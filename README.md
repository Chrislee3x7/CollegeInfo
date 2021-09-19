# College Info
Displays university rankings from various sources.
The pages were built from scratch using html, with css, javascript, bootstrap.

## Data
We used python webscraping to get data from various sources such as The Higher Education and QS Universities. (The files can be seen in "university_ranking" directory) <br />
Using python, we converted and combined the data into a csv file.
App.js, then, reads the csv file and loads information to an array.
App.js passes the data to Display_data.js via sessionItems. 
Display_data, then, looks for data corresponding to the college name received in the search bar.

## Autocomplete
Whenever the search bar detects a keydown, App.js looks for university names that contains the substring that the user has entered.
To reduce complexity, only first 5 results will be shown based on alphabetical order.

## Responsive Web Design
The web contents are responsive to the window size. Smaller window will result in smaller commponent sizes. 
This was one of the main focus of our web development progress.

## Challenge: Overlapping University Name
Some universities appeared in different sources with different names such as an extra space in the end of its name.
We solved most of this problem through python strip function and javascript set data structure.

## Credits
Joseph Lin, Chris Lee, Lance Ma, Segyul Park <br/>
Made for Hello World Hackathon 2021
