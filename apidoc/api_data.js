define({ "api": [
  {
    "group": "allComments",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/all/allComments/:issueId",
    "title": "to get paginated comments of user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "issueId",
            "description": "<p>userId receiving user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "skip",
            "description": "<p>skip value for pagination. (query params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Comments Listed\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"commentId\": \"dx-I2Zu-\",\n      \"issueId\": \"JJX29BwJ\",\n      \"description\": \"hi i am gulshan please resolved my issues<br>\",\n      \"commentName\": \"Gulshan Kumar\",\n      \"userId\": \"UK2PaZ-7\",\n      \"createdOn\": \"2019-10-03T15:22:15.000Z\"\n    },\n    {\n      \"commentId\": \"o5Rvi8gF\",\n      \"issueId\": \"JJX29BwJ\",\n      \"description\": \"hello vidya did you solve this issues<br>\",\n      \"commentName\": \"Gulshan Kumar\",\n      \"userId\": \"UK2PaZ-7\",\n      \"createdOn\": \"2019-10-05T08:28:37.000Z\"\n    },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "allComments",
    "name": "GetApiV1UsersAllAllcommentsIssueid"
  },
  {
    "group": "all_notifications",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/all/notifications",
    "title": "to get paginated comments of user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Notification Details Found\",\n  \"status\": 200,\n  \"data\": [\n   \"_id\": \"5d9895f9f1b841320c2d1389\",\n      \"notificId\": \"mQNuD3VPA\",\n      \"issueId\": \"JJX29BwJ\",\n      \"commentId\": \"eXxObZ_i\",\n      \"userId\": \"h6yQJjQ\",\n      \"status\": 1,\n      \"createdOn\": \"2019-10-05T13:09:13.000Z\",\n      \"__v\": 0,\n      \"comment_details\": [\n          {\n              \"_id\": \"5d9895f9f1b841320c2d1388\",\n              \"commentId\": \"eXxObZ_i\",\n              \"issueId\": \"JJX29BwJ\",\n              \"description\": \"please resolved this issue\",\n              \"commentName\": \"vidya thakur\",\n              \"userId\": \"h6yQJjQ\",\n              \"createdOn\": \"2019-10-05T13:09:13.000Z\",\n              \"__v\": 0\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "all_notifications",
    "name": "GetApiV1UsersAllNotifications"
  },
  {
    "group": "all_notifications",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all/comments/issueId/notifyId",
    "title": "to get updated comments of user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"Notification details updated\",\n  \"status\": 200,\n  \"data\": [\n   {\n      \"commentId\": \"dx-I2Zu-\",\n      \"issueId\": \"JJX29BwJ\",\n      \"description\": \"hi i am gulshan please resolved my issues<br>\",\n      \"commentName\": \"Gulshan Kumar\",\n      \"images\": [],\n      \"userId\": \"UK2PaZ-7\",\n      \"createdOn\": \"2019-10-03T15:22:15.000Z\"\n  },\n  {\n      \"commentId\": \"eCWWfuOK\",\n      \"issueId\": \"JJX29BwJ\",\n      \"description\": \"check this issues<br>\",\n      \"commentName\": \"Gulshan Kumar\",\n      \"images\": [],\n      \"userId\": \"UK2PaZ-7\",\n      \"createdOn\": \"2019-10-03T15:25:02.000Z\"\n  },\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "all_notifications",
    "name": "GetApiV1UsersViewAllCommentsIssueidNotifyid"
  },
  {
    "group": "all_notifications",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all/view/all/watcher/issueId",
    "title": "to get  watcher of user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"error\": false,\n  \"message\": \"All Watcher Details Found\",\n  \"status\": 200,\n  \"data\": [\n   \n      \"_id\": \"5d949902ebe7c62ad071382d\",\n      \"watcherId\": \"H806bwiX\",\n      \"issueId\": \"JJX29BwJ\",\n      \"userId\": \"h6yQJjQ\",\n      \"reporter\": \"h6yQJjQ\",\n      \"__v\": 0,\n      \"reporter_details\": [\n          {\n              \"_id\": \"5d7f6a8cd652282c106b56cd\",\n              \"userId\": \"h6yQJjQ\",\n              \"firstName\": \"vidya\",\n              \"lastName\": \"thakur\",\n              \"password\": \"$2b$10$SxfG7P8hY17B/pa8KIiVKuYjf6DnBMQKqXnqyENl0mqFUawc69R9u\",\n              \"email\": \"vidyathakur27septe@gmail.com\",\n              \"mobile\": \"\",\n              \"createdOn\": \"2019-09-16T10:57:16.000Z\",\n              \"__v\": 0\n    .........................\n  ]\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "all_notifications",
    "name": "GetApiV1UsersViewAllViewAllWatcherIssueid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/create",
    "title": "Create Issue",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>status of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reporter",
            "description": "<p>reporter of the issue passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignee",
            "description": "<p>assignee of the issue passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tstatus: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n\t\t\t\t\t\tassignee: string,\n\t\t\t\t\t\tisPublished: boolean,\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "create",
    "name": "PostApiV1UsersCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/users/create/comment",
    "title": "Create comment",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the comment passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the comment passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>commentId of the comment passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the comment passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentName",
            "description": "<p>commentName of the comment passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"comment Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueId: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tcommentId: \"string\",\n\t\t\t\t\t\tdescription: \"hello world\",\n\t\t\t\t\t\tcommentName: string,\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "create",
    "name": "PostApiV1UsersCreateComment"
  },
  {
    "type": "post",
    "url": "/api/v1/users/create/watcher",
    "title": "Create watcher",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the watcher passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the watcher passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "watcherId",
            "description": "<p>watcherId of the watcher passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the watcher passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentName",
            "description": "<p>commentName of the watcher passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"watcher Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\twatcherId: \"string\"\n\t\t\t\t\t\tissueId: \"string\",\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tcommentId: \"string\",\n\t\t\t\t\t\treporter: \"login username\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "create",
    "name": "PostApiV1UsersCreateWatcher"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:issueId/delete",
    "title": "Delete issue by issueId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the issue passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "delete",
    "name": "PostApiV1UsersIssueidDelete"
  },
  {
    "group": "delete_watchers",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/view/all/view/delete/watcher/:watcherId/:issueId",
    "title": "to delete  watcher of user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n\t    \"error\": false,\n\t    \"message\": \"Deleted the Watcher successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "delete_watchers",
    "name": "GetApiV1UsersViewAllViewDeleteWatcherWatcheridIssueid"
  },
  {
    "type": "put",
    "url": "/api/v1/users/:issueId/edit",
    "title": "Edit issue by issueId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>issueId of the issue passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueId: \"string\",\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tstatus: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n\t\t\t\t\t\tassignee: string,\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "edit",
    "name": "PutApiV1UsersIssueidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/all",
    "title": "Get all issues",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Issue Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\ttitle: \"string\",\n\t\t\t\t\t\tstatus: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n\t\t\t\t\t\tassignee: string,\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Issue Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "read",
    "name": "GetApiV1UsersViewAll"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/:issueId",
    "title": "Get a single issue",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Issue Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number\n\t\t\t\t\t  issueId: \"string\",\n\t\t\t\t\t  title: \"string\",\n\t\t\t\t\t\tstatus: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\treporter: \"string\",\n\t\t\t\t\t\tassignee: string,\n\t\t\t\t\t\tuserId: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "read",
    "name": "GetApiV1UsersViewIssueid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "login the users",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header) User can also Login with social login 'Google login'</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Login Successful\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\"mobile\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"firstName\": \"Vidya\",\n        \"lastName\": \"Thakur\",\n        \"userId\": \"h6yQJjQ\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Login Failed \",\n\t    \"status\": 400,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "read",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "signup the users",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>,lastName,email,mobile,password.(Send first name of the user. (body params) (required) , body parameter or as a header,last name of the user. (body params) (required)</p> <p>email of the user. (body params) (required),mobile number of the user. (body params) (required),password of the user. (body params) (required))</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"User created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t \"__v\": 0,\n        \"_id\": \"5a9e93871f3a547032b94d71\",\n        \"createdOn\": \"2018-03-06T13:11:35.000Z\",\n        \"mobileNumber\": 2233112233,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"one\",\n        \"firstName\": \"some\",\n        \"userId\": \"ic4Wn5pPT\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"User Already Present With this Email \",\n\t    \"status\": 403,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "read",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "to logout user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (auth headers) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/sociallogin",
    "title": "api for user Google login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Google Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/User.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSociallogin"
  }
] });
