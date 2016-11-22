import config
import cgi
import webapp2
import random
import os
from google.appengine.ext.webapp import template
import datetime
import urllib
from google.appengine.ext import db
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app


# ---------------------------------------------------------------------
# Define Models
# ---------------------------------------------------------------------

class DataObject(db.Model):
    created_at = db.DateTimeProperty(auto_now_add=True)
    name = db.StringProperty(multiline=False)
    description = db.StringProperty(multiline=True)



# ---------------------------------------------------------------------
# Home Page
# ---------------------------------------------------------------------

class MainPage(webapp2.RequestHandler):
	def get(self,urlKey):
		templateValues = {}
		path = os.path.join(os.path.dirname(__file__), 'html/home.html')
		self.response.out.write(template.render(path, templateValues))


# ---------------------------------------------------------------------
# Auth Page
# ---------------------------------------------------------------------

class AuthPage(webapp2.RequestHandler):
	def get(self,urlKey):
		templateValues = {}
		path = os.path.join(os.path.dirname(__file__), 'html/auth.html')
		self.response.out.write(template.render(path, templateValues))

# ---------------------------------------------------------------------
# Me Page
# ---------------------------------------------------------------------

class MePage(webapp2.RequestHandler):
    def get(self,urlKey):
        templateValues = {}
        path = os.path.join(os.path.dirname(__file__), 'html/me.html')
        self.response.out.write(template.render(path, templateValues))


# ---------------------------------------------------------------------
# Post Handler
# ---------------------------------------------------------------------

class PostHandler(webapp2.RequestHandler):

	def post(self,urlKey):
		queryString = self.request.get('queryString')

        # Get IP ADDRESS
        # self.request.remote_addr

		templateValues = {}
		path = os.path.join(os.path.dirname(__file__), 'html/translated.html')
		self.response.out.write(template.render(path, templateValues))



# ---------------------------------------------------------------------
# 404 Handler
# ---------------------------------------------------------------------

class NotFoundPageHandler(webapp2.RequestHandler):
	def get(self):
		self.error(404)
		templateValues = {'BASE_URL':config.getRootURL()}
		path = os.path.join(os.path.dirname(__file__), 'html/404.html')
		self.response.out.write(template.render(path, templateValues))

# ---------------------------------------------------------------------

app = webapp2.WSGIApplication([
							  ('/post/(.*)', PostHandler),
							  ('/()', MainPage),
                              ('/(auth)', AuthPage),
                              ('/(me)', MePage),
							  ('/.*', NotFoundPageHandler)],
                              debug=False)

# ---------------------------------------------------------------------
