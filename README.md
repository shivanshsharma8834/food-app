
### Description 

**What's in the Fridge?** is a web application that helps you discover recipes based on the ingredients you have at home. Using a simple AI model trained on a dataset of Indian recipes, the app generates a list of 5 recipes that can be made with the ingredients you enter.

## Technologies Used

- **Frontend**: React
- **Backend**: Flask (serving the API)
- **AI Model**: Trained using Python and Scikit-Learn on a dataset of Indian recipes


### Dependencies 

Backend

```
- Python 3.11 or higher 
- Flask v3.0.3
- Pandas v2.0.3
- Joblib v1.3.2
- Scikit_learn v1.3.2
```

Frontend

```
Node-js v20.14.0
```

### Installation instructions 

Firstly you need to start the flask backend app. 

Git clone the repository 

```
git clone https://github.com/shivanshsharma8834/food-app.git
cd food-app
```

Then install the required python modules for your app 

```
pip install -r requirements.txt
```

Enter the following command to run the flask API:

Note: You have to be in the food-app/ directory for this to work

```
flask run 
```

Now open another terminal in the same directory and navigate to the /whats-in-your-fridge folder

```
cd whats-in-your-fridge
npm install 
```

Run the frontend server 

```
npm run dev
```

And voila ! The app works! 
Open the server port displayed on the terminal on your browser and use the app to your delight.
http://localhost:5173/





