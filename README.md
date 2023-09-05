# phase-4-project

## Installation
 Enter `bundle install` ` npm install --prefix client` into the terminal, in the root directory.

## General Information

The database for this repository is composed of three models, **Jobs**, **JobApplications**, and **Users**. **User** has_secure_password and requires a valid login in order to Create, Read, Update, or Delete a job_application. The index for Jobs does not require authorization however applying is not permitted unless the User has a session, however a job can be created regardless of authorization in order to meet the requirements of thr project.

The Client is meant to immitate the Indeed job site.

##Technologies Used:

* Ruby on Rails
* Postgresql
* React