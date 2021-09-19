# CollegeInfo
Displays university rankings from various sources.

## Data
We used python webscraping to get data from various sources such as The Higher Education and QS Universities.
Using python, we converted and combined the data into a csv file.
App.js, then, reads the csv file and loads information to an array.

## Autocomplete
Whenever the search bar detects a keydown, App.js looks for university names that contains the substring that the user has entered.
To reduce complexity, only first 5 results will be shown based on alphabetical order.

