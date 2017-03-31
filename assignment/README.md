# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.


FINAL PROJECT proposal



##Data



#Investigating Global Urbanization and Nightlight Intensity


## Problem / Question

Applications are ultimately just tools. What problem or question does
your application attempt to resolve or grapple with? How does your
application speak to this problem/question?

- Using nightlight to show urban settlement patterns has been an interesting topic. Recent research has explored the reliability of using nightlight as an indicator for urbanization. My tool aims to enable users to see and check the nightlight of any interested country, region or city, and compare and contrast it with the urban landcover pattern. It will give users a direct and quick intuition of the fastest/slowest growing urban areas.

- Further based on Mid-term project, to beautify the website and incorporate it into the Global Nightlight & Urbanization application

## The data

Geospatial applications are all about working with data. What datasets
would you plan/like to use? If the data you'll be working with isn't
already stored in a way that you can use, how will you be storing your data?

- Global Nightlight Data from 1992 to 2013
- Global Landcover Data from 1992 to 2013
- Global countries
- Global Cities
- Chinese Cities

- ## these data are raster-based datasets, how can I download them?


## Technologies used

Which technologies covered in class (or discovered on your own!) do you
plan to use? How do you anticipate using each of these technologies?

Review the APIs/online examples of leaflet, turf, jQuery, underscore (or
any library not explicitly covered in class) for functions/uses which
you'd like to explore. Briefly describe how you might use them.

- Display by Size:
  Display Cities' GDP, Population, Income by Size via proportional symbols.  
- Click - Display Function:
  Click on a point, show the description in the sidebar.
- Search and Pop-up Function:
  Input a location name, show the relevant results.
- Raster-based Calculation Function:
  Either through a scrolling bar, or through a button click, performs some format of Raster-based calculation on the global night light data and landcover data.

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
  - People wishing to know more about the macro-economy of Chinese cities.
  - People interested in viewing the globe in nightlight.
  - People interested in Urbanization issues.

- What do they gain from your application' use?
  - Zoom-In: User input of country, state or city name, then the map will zoom in to the interested area
  - Nightlight Intensity: A user-controlled scrolling threshold that depicts what


- Are there any website/application examples in the wild to which you can compare your final?
  - Yes. Nathan showed me a website (I forgot the name but I will find out) of scrolling bar screening the data to different ranges


#### Layouts and visual design

So far, we've built all our applications with a side bar for
representing non-map content and navigation. This is not the only
successful design. Extra content could be displayed in a top bar,
through modals, through side bars on both sides, and any combination of
these as well as a number not mentioned. Try to describe your
application's visual layout. Conceptually (no need for extensive CSS
here), what will this design require?

- Essentially darker color to work with the nightlight datasets.
- Clean but well organized website layout.

## Anticipated difficulties

Thinking about weaknesses can be useful. What do you anticipate being
most difficult about this project? How will you attempt to cope with
these difficulties? For example, asynchronous behavior (ajax, events)
are hard to use and think about. Global variables are a strategy for
coping with that difficulty by breaking data out of the asynchronous
context.

- Obtaining and displaying raster data
- Scrolling bar


## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).

- Raster-based data presentation and manipulation.
