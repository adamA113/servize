# Servize

## Table of contents
1. [Project Aim](#project-aim)
1. [General Info](#general-info)
1. [Technologies](#technologies)
1. [Development](#development)
1. [Deployment](#deployment)
1. [Team](#team)
### Project Aim 
* The is a website where you create an account either as a customer or as a service provider (handyman/ technician).
* As a customer you can search for certain services and choose the technician you want to help you, and filter them via prices or overall ratings.
* As a technician you can offer your services and your special offers (if any) to attract customers to you.



### General Info
* The website will be initially used to search for Technicians/Handymen at the beginning. 
* But the final product will provide more general and wide services such as other freelance websites. 

### Technologies
Servize uses a number of open source projects:
* [React](https://reactjs.org/) - library for UI components.
* [Redux](https://redux.js.org/) - library for managing application state.
* [Django](https://www.djangoproject.com/) - evented I/O for the backend
* [PostgreSQL](https://www.postgresql.org/) - relational database management system
* [Jira] - product management software

### Development
To run this project on your local machine:
* Make a forked repo.

* Clone it on your local machine using the following command:
```
git clone <the url of your forked repo>
```
* cd into the cloned files.
 #### Run the Front End side:
 Move inside the client folder:
```
$ cd client
```
Then type to install all the required dependencies:
```
$ npm install
```
And finally type the following to run the front server:
```
$ npm start
```
#### Run the Back End side:
* Open a new terminal.
* Create a virtual environment (this command is for Windows only)
```
$ pthon -m venv env
```
* activate the virtual environment :
```
$ env\Scripts\activate
```
* Install all the required depenencies for the back end:
```
$ pip install -r requirements.txt
```
* Move inside the server folder:
```
$ cd server
```
* Finally run the server:
```
$ python manage.py runserver
```

### Deployment 
In progress ...
<!-- [Heroku](https://servize-web.herokuapp.com/) -->


## Team
- [Yasir Tobbileh](https://github.com/adamA113)
- [Najwan Qandeel](https://github.com/NajwanQandeel)
- [Rami Nawahda](https://github.com/raminawahda7) 
- [Kholoud Almohtaseb](https://github.com/kholoudmohtaseb) 

License
---

MIT

