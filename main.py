import config
import cgi
import webapp2
import random
import os
from google.appengine.ext.webapp import template
import datetime
import urllib
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app



# ---------------------------------------------------------------------
# Home Page
# ---------------------------------------------------------------------

class MainPage(webapp2.RequestHandler):
	def get(self,urlKey):
		templateValues = {'title':'Freedom Torch'}
		path = os.path.join(os.path.dirname(__file__), 'html/home.html')
		self.response.out.write(template.render(path, templateValues))


# ---------------------------------------------------------------------
# Auth Page
# ---------------------------------------------------------------------

class AuthPage(webapp2.RequestHandler):
	def get(self,urlKey):
		templateValues = {'title':'Torch Unlocked'}
		path = os.path.join(os.path.dirname(__file__), 'html/auth.html')
		self.response.out.write(template.render(path, templateValues))

# ---------------------------------------------------------------------
# Me Page (Dashboard)
# ---------------------------------------------------------------------

class MePage(webapp2.RequestHandler):
    def get(self,urlKey):

        templateValues = {
            'title': 'Freedom Torch'
        }
        path = os.path.join(os.path.dirname(__file__), 'html/me.html')
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
							  ('/()', MainPage),
                              ('/(auth)', AuthPage),
                              ('/(me)', MePage),
							  ('/.*', NotFoundPageHandler)],
                              debug=False)

# ---------------------------------------------------------------------
