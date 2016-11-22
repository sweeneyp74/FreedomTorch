import os
#-----------------------------------------------------------------
#Segment Keys

LOCAL_KEY = ""
LIVE_KEY = ""

def getKey():
	if os.environ['SERVER_SOFTWARE'].startswith('Development'):
		return LOCAL_KEY
	else:
		return LIVE_KEY

#-----------------------------------------------------------------
#BaseURL

BASE_URL = "/"

def getRootURL():
	return BASE_URL
