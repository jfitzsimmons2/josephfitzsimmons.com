export default {
  "items": [
  {
      "label": "File",
      "icon":"pi pi-fw pi-file",
      "key": "0_0",
      "items": [
        {
            "label": "New",
            "icon":"pi pi-fw pi-plus",
            "key": "1_0",
            "items": [
              {
                  "label": "Bookmark",
                  "icon":"pi pi-fw pi-bookmark",
                  "key":"2_0"
              },
              {
                  "label": "Video",
                  "icon":"pi pi-fw pi-video",
                  "key":"2_1"
              }
            ]
        },
        {
            "label": "Delete",
            "icon":"pi pi-fw pi-trash",
            "key":"1_1"
        },
        {
            "label": "Export",
            "icon":"pi pi-fw pi-external-link",
            "key":"1_2"
        }
      ]
  },
  {
      "label": "Edit",
      "icon":"pi pi-fw pi-pencil",
      "key":"0_1",
      "items": [
        {
            "label": "Left",
            "icon":"pi pi-fw pi-align-left"
        },
        {
            "label": "Right",
            "icon":"pi pi-fw pi-align-right"
        },
        {
            "label": "Center",
            "icon":"pi pi-fw pi-align-center"
        },
        {
            "label": "Justify",
            "icon":"pi pi-fw pi-align-justify"
        }
      ]
  },
  {
      "label": "Users",
      "icon":"pi pi-fw pi-user",
      "key":"0_2",
      "items": [
        {
            "label": "New",
            "icon":"pi pi-fw pi-user-plus",

        },
        {
            "label": "Delete",
            "icon":"pi pi-fw pi-user-minus",
        },
        {
            "label": "Search",
            "icon":"pi pi-fw pi-users",
            "items": [
              {
                  "label": "Filter",
                  "icon":"pi pi-fw pi-filter",
                  "items": [
                    {
                        "label": "Print",
                        "icon":"pi pi-fw pi-print"
                    }
                  ]
              },
              {
                  "icon":"pi pi-fw pi-bars",
                  "label": "List"
              }
            ]
        }
      ]
  },
  {
      "label": "Events",
      "icon":"pi pi-fw pi-calendar",
      "key":"0_2",
      "items": [
        {
            "label": "Edit",
            "icon":"pi pi-fw pi-pencil",
            "to": "https://www.google.com",
            "items": [
              {
                  "label": "Save",
                  "icon":"pi pi-fw pi-calendar-plus"
              },
              {
                  "label": "Delete",
                  "icon":"pi pi-fw pi-calendar-minus"
              }
            ]
        },
        {
            "label": "Archieve",
            "icon":"pi pi-fw pi-calendar-times",
            "items": [
              {
                  "label": "Remove",
                  "icon":"pi pi-fw pi-calendar-minus"
              }
            ]
        }
      ]
  }
]
}
