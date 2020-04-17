# Bookmarks and Tags using Nodejs Rest API

**Install**

- cd AssignmentInternshala
- hit npm install
- hit npm start

**Endpoints**

1. Create a bookmark (POST)
   - link - https://nayanpatilassignment.herokuapp.com/api/bookmarks
   - body - {
     "Title":"Trump Total",
     "Link":"https://www.nytimes.com/2020/04/14/us/politics/trump-total-authority-claim.html",
     "Publisher":"Unknown"
     }

2. Delete a bookmark (DELETE)
    - Link - https://nayanpatilassignment.herokuapp.com/api/bookmarks/:id
    - Ex. - https://nayanpatilassignment.herokuapp.com/api/bookmarks/5e98b0456e33bf1c0aee21ec

3. Create a Tag (POST)
    - Link - https://nayanpatilassignment.herokuapp.com/api/tags

    - Body - {
	    "Title": "International"
        }

4. Delete a tag  (DELETE)
    - Link - https://nayanpatilassignment.herokuapp.com/api/tags/:id
    - Ex. - https://nayanpatilassignment.herokuapp.com/api/tags/5e989bf689c2dfdadff00295

5. Add a Tag to a Bookmark (PATCH)
    - Link - https://nayanpatilassignment.herokuapp.com/api/bookmarks/:id/addtag

    - Ex. - https://nayanpatilassignment.herokuapp.com/api/bookmarks/5e98b6e1fcc79700249d0e59/addtag

    - Body - {
        "TagId": "5e989bf689c2dfdadff00295"
    }

6. Remove Tag from certain Bookmark (PATCH)
    - Link - localhost:5000/api/bookmarks/:id/deltag/:TagId 
    - Ex. - localhost:5000/api/bookmarks/5e98ab1e920bcc0ade68888e/deltag/5e989c0589c2dfdadff00296

7. Retrieve all tags (GET)
    - Link - https://nayanpatilassignment.herokuapp.com/api/tags

8. Retrieve all bookmarks (GET)
    - Link - https://nayanpatilassignment.herokuapp.com/api/bookmarks