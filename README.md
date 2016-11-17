# 311
Interactive Web Development at Cal Poly Pomona CIS
#Mid Term Date: Thursday, November 3rd
This syllabus item will be a true/false test. Please bring a long form scantron. 

#Projects
##Annoucing the Final Project in ASP.NET
In our course we introduce both Javascript and the ASP.NET framework. Students are assigned to create a dynamic, data-driven website using ASP.NET, using this Lynda.com guided course: https://www.lynda.com/ASP-NET-tutorials/ASP-NET-Essential-Training/784-2.html?org=cpp.edu. Students are assigned to complete this sample project, using the Lynda course as a guide and reference. The Due date is the close of the final exam. Students are to submit a Microsoft Word document or PDF including screen shots of their completed project. Each file they created for the project should be copy-pasted into the document (not screen shots), to show their completed work. Per our syllabus, this project is worth 5% of the course credit.

##Term Project Sequence
0. This term your project is staged in 3 phases: 
1. Phase One. Javascript toolkit, emphasizing S3/DynamoDB interactions with AWS and Facebook/OAuth, hosted live in the cloud
2. Phase Two. Team concept, navigation hierarchy, full concept, rendered with HTML5 markup. Four pages per team member
3. Phase Three. Apply Javascript toolkit to enable the webpage to interact with the cloud (i/o, file uploads). Two AWS interactions per page required per team mate, not including loading the hosted page from S3. 

#Homework 
##New Concept 2 for your project: Javascript Nodes
0. This example will walk you though how to manage dynamic data. Located at https://s3-us-west-2.amazonaws.com/csu311/usingJSDomNodes.html, this sample is also here on git:https://github.com/stefanbund/311/blob/master/dynamoAPI%20set/usingJSDomNodes.html. It demonstrates how you can harness a for-loop to take a collection of data, then display the data in a tabular, line-by-line format. Ecommerce and more professional environments (like google search results) tend to use this capacity. 
1. The power of the for-loop in JS is also a worthy topic to review. This article on MDN does it well:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length#Iterating_over_an_array
2. The notion of adding content dynamically also dovetails many element types available with HTML5 (article, blockquote, footer, etc). Here is an excellent discussion of how to add multiple FIGCAPTIONs to your HTML (figure captions to images): http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_figcaption_create 

## New Concepts for inclusion into your projects, November 8 - December 4
0. For your ongoing inclusion into Assignment 3, please take advantage of these techniques and learning resources: 
1. javascript cookies, for persisting data across a set of pages: http://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
2. dynamodb queries: http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.04.html
3. displaying data from your AWS/JSON operation inside your HTML5: https://github.com/stefanbund/311/blob/master/dynamoAPI%20set/testKeys-show-output-in-p.html#L89 (this is a bit of code added to the data section of your get call)

## Due Tuesday November 1st
Have four pages of HTML5 complete, demonstrating the core strategy for your pages. These pages should feed a larger team strategy and support the team's objectives. When presented with a sitemap, the user should be able to navigate the general, top level pages necessary to run your business model. No javascript is required, only HTML pages, empty of data otherwise delivered by javascript. 

## Due Tuesday October 25th
Your team must deliver a navigation bar, similar to http://getbootstrap.com/examples/navbar-static-top/, to be used at the top of each page of your site. This requires your team to decide what pages must be made, who will make them, and how they should flow together to support your business process. Draw a navigation diagram to support the creation of a sequence of pages, which bring the user to a task's completion. This need not be the final version, but a working prototype that gives each team member some independence.

##Due Thursday October 20th
0.Please have a concept agreed upon by your group. Your group should establish a list of pages needed, assigning the pages to each group member. 

##Due Tuesday October 18th
0. Take a course from Lynda.com involving introductory CSS/HTML via Bootstrap: https://www.lynda.com/Bootstrap-tutorials/Bootstrap-3-Essential-Training/417641-2.html
1. Go through the hands-on skills, approximately 5 hours, in preparation for lab on 10/18

##Due Thursday October 13th
0. Consult this tutorial to help complete your AWSJSSDK toolkit: https://youtu.be/fj3FLMZ6kgE?list=PLuPYdJHhTTxd_dAY-o191FaXZsBIgLTv_
1. Be rounding out your complete solution. New HW will be presented over the weekend. 

##Due  Tuesday October 11th
0. Please review and understand the topics and techniques in these materials: 
1. basics of AWS, cloud , and NoSQL databases, with hands-on demo: https://youtu.be/AvBa_dZmm24?list=PLuPYdJHhTTxd_dAY-o191FaXZsBIgLTv_
2.  Dynamo DB part 2, integrating DynamoDB with  IAM, and understanding the JS template needed to query and operate. https://youtu.be/4mSVOabj8RA?list=PLuPYdJHhTTxd_dAY-o191FaXZsBIgLTv_
3.  study a working example, available at https://s3-us-west-2.amazonaws.com/csu311/fulltest.html
4. being working with the demo code, available in this repo:https://github.com/stefanbund/311/blob/master/dynamoAPI%20set/fulltest.html
5. have questions, errors, and partly-working, buggy code to discuss on 10/11
6. post your errors and struggles to github/Issues, to generate discussions and solution logs

##Due Thursday October 6th
Have the S3 Demo working in your own browser, with CORS, ARN Role, FB App ID. If you have errors, post your issue, with screen shots or copied error text to the 'Issues' forum. The sample code is available here: https://github.com/stefanbund/311/tree/master/AWS%20S3%20DEMO
##Due Tuesday, October 4th
1. Please code each example in this tutorial series on core Javasript, lectured in class: https://github.com/stefanbund/311/blob/master/wk3%2C%20core%20js/wk%203%20js%20examples.pdf
2. Read through and understand topics in this resource:  https://aws.amazon.com/developers/getting-started/browser/
3. Watch this introduction to S3 website hosting on AWS: https://youtu.be/4hfLklgpQ-M?list=PLuPYdJHhTTxd_dAY-o191FaXZsBIgLTv_
4. Watch and study this introduction to  the AWS Javascript SDK, and file uploads to the cloud: https://youtu.be/gYRuIuFjY4U?list=PLuPYdJHhTTxd_dAY-o191FaXZsBIgLTv_
5. this is a working sample for your inspection: https://s3-us-west-2.amazonaws.com/csu311/index.html
6. you'll also need a facebook developer account at https://developers.facebook.com and an AWS account https://aws.amazon.com

##Due Tuesday, September 27
Lynda lesson, Javascript Essential Training (Allardice), linked here: https://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3ajavascript+essential%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2

##Resources
youtubes! https://www.youtube.com/playlist?list=PLuPYdJHhTTxd_dAY-o191FaXZsBIgLTv_

##to do, 
http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.03.html

##DynamoDB Javascript API reference
1. http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/GettingStarted.NodeJs.04.html , and
2. http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#query-property
