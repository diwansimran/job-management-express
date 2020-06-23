# Job management api using node and express

This is an api for project management. It uses node, express and mysql database.

Afterwards, this application was dockarized and deployed on three cloud platforms: (i) Openstack, (ii) Amazon AWS and (iii) Microsoft azure 
Plese refer the Docerfile to see docker commands.

(i) Openstack: Appliocation was deployed on VM instance and MySQL database server of Dalhousie University was used(FCS MySQL).

(ii) Amazon AWS: Application was deployed on Elastic beanstalk with docker as a platform and as a database Amazon managed MySQL database service was used.

(iii) Microsoft Azure: Application was deployed as docker instance and as a database Azure MySQL database service was used. 

Docker image can be found at: [Dockerhub - Job management using express](https://hub.docker.com/r/simrandiwan/assignment4)
---
## Requirements

For development, you will only need Node.js, express and npm installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


---

## Install

    $ git clone https://github.com/diwansimran/job-management-express.git
    $ cd job-management-express
    $ npm install

## Running the project

    $ npm start


