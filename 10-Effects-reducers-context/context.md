# Context Limitations 

React context is not optimized for high frequency changes

These could be changes that update the particular component every few seconds or multiple times per second. 

Redux would be a better tool for this, this will be covered later in the course. 

React context also shouldn't bbe used to replace all component communications and props. 

The main scenario for use context is long prop chains. 