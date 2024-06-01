from flask import Flask, request, render_template, jsonify
import pandas as pd
import joblib
from sklearn.metrics.pairwise import cosine_similarity

# Load the data and model
df = pd.read_csv('food.csv')
tfidf = joblib.load('tfidf_model.pkl')
print(df.columns)
tfidf_matrix = tfidf.transform(df['ingredients'])

# Function to get top 5 similar dishes
def get_similar_dishes(input_ingredients, top_n=5):
    input_tfidf = tfidf.transform([input_ingredients])
    cosine_sim = cosine_similarity(input_tfidf, tfidf_matrix).flatten()
    similar_indices = cosine_sim.argsort()[-top_n:][::-1]
    return df.iloc[similar_indices]

# Initialize Flask app
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_dishes', methods=['POST'])
def get_dishes():
    input_ingredients = request.form['ingredients']
    similar_dishes = get_similar_dishes(input_ingredients)
    results = similar_dishes.to_dict(orient='records')
    return render_template('results.html', dishes=results)

if __name__ == '__main__':
    app.run(debug=True)
