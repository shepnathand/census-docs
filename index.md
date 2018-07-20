---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# census-docs
This website documents resources, best-practices, and obstacles pertaining to the US Census API.

### What is an API?
An **A**pplication **P**rogramming **I**nterface is a simple way to access/query data directly from the host's servers.

### Why use the Census API?
The Census API is useful for integrating census data into your website or for requesting a lot of data at once. Here are some examples of how others have used the Census API:

  + [Circular Area Profiling System](http://mcdc.missouri.edu/websas/capsindex.shtml)
  + [ClearGov: Local Government Transparency & Analytics](http://www.cleargov.com/)
  + [Cornell: Poverty Map](http://pad.human.cornell.edu/Unlisted/uncertaintymap_fullinfo_api_B17001.cfm)
  + [Federal Financial Institutions Examination Council](https://geomap.ffiec.gov/FFIECGeocMap/GeocodeMap1.aspx)
  + [MABLE/Geocorr](http://mcdc.missouri.edu/websas/geocorr_index.shtml)
  + [Missouri’s Office of Social and Economic Data Analysis](http://www.oseda.missouri.edu/)
  + [The New Yorker: Inequality and New York's Subway](http://projects.newyorker.com/story/subway/)
  + [University of Michigan](http://www.psc.isr.umich.edu/dis/data/resource/detail/1457)
  + [U.S. Census Beureau: My Congressional District](https://www.census.gov/mycd/)

### Getting Started
The [Census API Documentation](https://www.census.gov/data/developers/guidance/api-user-guide.What_is_the_API.html) is a good place to start.

Also, if you think you might make more than 500 requests per day, you are going to need an [API key](http://api.census.gov/data/key_signup.html).

### Finding Data
The Census Bureau's [Available API's](https://www.census.gov/data/developers/data-sets.html) page is useful for finding the dataset you want. Once you find a dataset, click through the "Tables Variables" files to find what data you are interested in.

Onother option is to first find the data you want using FactFinder [Advanced Search](https://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?refresh=t). In the search results, the "ID" (on the left) is the table or group identification. The dataset is listed on the right. At the beginning of the ID's:

  + B = Detailed Tables
  + S = Subject Tables
  + DP = Data Profiles
  + CP = Comparison Profiles

Each ID referes to the table that the data are located in. To find the variable(s) you want, 

  1. navigate to the dataset through the [Available API's](https://www.census.gov/data/developers/data-sets.html) page
  2. find the group your ID refers to
  3. click on the format you desire to view the available variables in
  4. browse for the variables that you desire to download

Note that you will want to make a note of the url the variables file is located at.

### Downloading the Data
You have a couple of options for downloading data from the Census API. You could either make an HTML request or you could use an API wraper. To use the python [census](https://github.com/datamade/census) API wraper, all you need is the name and vintage of your dataset, the variables that you want to download, and the [FIPS Codes](https://www2.census.gov/geo/docs/reference/codes/files/) for the geography you want.

#### HTML Request
Every HTML request contains:

  + data set location
  + get function
  + geography filters
  + your API key (optional)

##### data set location
If your variables file is located at "https://api.census.gov/data/2016/acs/acs5/variables.html", the location of your dataset is:
  
  `https://api.census.gov/data/2016/acs/acs5`

##### get function
A get function has the format:
  
  `?get=comma,seperated,list,of,variables`

Say you chose the variables B00001_001E and B01001_001E (estimate total unweighted sample count of the population and estimate total by sex by age, respectively), then your get function would be:
  
  `?get=B00001_001E,B01001_001E`

##### geography filters
Geography filters can contain a for statement and any number of in statements. For the state level, no in statement is nessicary. If you wanted to request at the state level for Tennessee (FIPS code 47), then your geography filter would be:

  `&for=state:47`

If you wanted to view the county level data for every county in Tennessee, your geography filter would be:

  `&for=county:*&in=state:47`

In the *for* statement, you can use * to request all or you can use a comma seperated list. Each *in* statement can only include one geography.

If you want to view data for every tract in Hamilton County (FIPS Code 065) in Tennessee, your geography filter would be:

  `&for=tract:*&in=county:065&in=state:47`

[Here](https://www2.census.gov/geo/docs/reference/codes/files/) is a directory of files contating all of the FIPS codes.

##### API key
So far our request is a valid HTML request, and it looks like this:

  `https://api.census.gov/data/2016/acs/acs5?get=B00001_001E,B01001_001E&for=tract:*&in=county:065&in=state:47`

To add your API key, you need to add:

  `&key=yourApiKey`

to the end of your request.

Finally, to get your data:

  1. copy the URL into you navigation bar
  2. press enter
  3. select all the data
  4. go to [Convert JSON to CSV](http://www.convertcsv.com/json-to-csv.htm)
  5. paste the data into the Step 1 Option 3 Text Box
  6. select your output options in Step 2
  7. click either "Convert JSON to CSV" or "JSON to Excel"
  8. click Download Result

Your data are ready to use now!

#### Python Census API Wraper
There are a couple of benifits to using the python wraper, [census](https://github.com/datamade/census). With census, you can make many requests at the same time, you can rename the column headers, you can easily convert the data from JSON to CSV, you can preform transformations on the data, and you can document how you make each request in your scripts. Census is especially useful if you are already planning on using python to work with the data.

Before you start making requests using census, you are going to need [python](https://www.python.org/getit/). Once you have python, open a terminal and type

  `python -m pip install census`

and

  `python -m pip install us`

Now, create a .py file. Copy the following code into your new .py file:

  `#!/usr/bin/env python`  

  `# import the packages you need`  
  `import os`  
  `from census import Census`  
  `import csv`  
  `import json`  

  `# make your request`  
  `c = Census(os.environ.get('CENSUS_API_KEY'))`  
  `variables = ('B00001_001E,B01001_001E')`  
  `request = c.acs5.state_county_tract(variables, '47', '065', Census.ALL)`  

  `# convert your file to CSV`  
  `x = str(request)`  
  `x = x.replace("'",'"')`  
  `x = json.loads(x)`  
  `f = csv.writer(open("your_file_name.csv", "w+"))`  

  `# rename columns`  
  `f.writerow(['B00001_001E', 'B01001_001E', 'state', 'county', 'tract'])`  

  `# write rows`  
  `for x in x:`  
  `>>f.writerow([x["B00001_001E"],x["B01001_001E"],x["state"],x["county"],x["tract"]])`  

Replace "CENSUS_API_KEY" with your API key, and replace "your_file_name.csv" with your file name. Save your .py file. Now, in your terminal type:

  `python your_py_file_name.py`

and press enter. In your working directory, you should have a new file with the name you specified. If your request was good, the file will contain the same data as we got with the HTML request example!

### What's Next?
Where you go after reading the API Documentation and getting an API Key depends on how you intend to use the data. Here are some places you might want to check out:

  + [Mapping: Tutorials on creating maps with ACS data.](/mapping/)
  + [Website Integration: How to integrate data from the API into your website.](/web-integration/)

### Ready for More?
<div class="tutorials">
  <div class="container">
    <div class="row">
      <div class="col-sm-6 py-2">
        <div class="card h-100 card-body">
          <p class="card-text"><a href="https://source.opennews.org/articles/finding-stories-census-data/">Finding Stories in Census Data</a></p>
          <p>Emily Alpert Reyes on how to find promising needles in Census haystacks.</p>
        </div>
      </div>
      <div class="col-sm-6 py-2">
        <div class="card h-100 card-body">
          <p class="card-text"><a href="/tutorials/">Tutorials</a></p>
          <p>From getting started to detailed analysis.</p>
        </div>
      </div>
    </div>
  </div>
</div>
