const featureGroups = [
  {
    groupID: 1,
    groupName: "size",
    path: "/size",
    featureDetails: {
      featureQuestion:
        "Great! Next, tell us the dishwasher size that suits your needs.",
      featureOptions: [
        {
          feature: '24"',
          featureCopy:
            "With generous capacity, quest perfomance and Bosch quality, our standard size dishwasher fits easily in most spaces.",
          featureImage: ""
        },
        {
          feature: '24" ADA compliant',
          featureCopy:
            "Designed for customers with special height requirements, while featuring technologies for quiet operation, outstanding performance and flexibility.",
          featureImage: ""
        },
        {
          feature: '18" ADA compliant',
          featureCopy:
            "Designed for customers with special height requirements, while featuring technologies for quiet operation, outstanding performance and flexibility.",
          featureImage: ""
        }
      ]
    }
  },
  {
    groupID: 2,
    groupName: "rack",
    path: "/rack",
    featureDetails: {
      featureQuestion:
        "Most Bosch dishwashers are equipped with a convenient 3rd rack. Let us know which you prefer.",
      featureOptions: [
        {
          feature: "Standard",
          featureCopy:
            "With 30% capacity, quest perfomance and Bosch quality, our standard size dishwasher fits easily in most spaces.",
          featureImage: ""
        },
        {
          feature: "Flexible",
          featureCopy:
            "Features expandable wings that easily lower to acommodate deeper items, while adjustable times help fit awkward or bulkky items",
          featureImage: ""
        },
        {
          feature: "MyWay",
          featureCopy:
            "With the industry’s largest 3rd rack loading capacity,* MyWayTM rack easily fits hard-to-place items, like cereal bowls, freeing up space on the bottom racks for larger items.",
          featureImage: ""
        },
        {
          feature: "Not Interested",
          featureCopy: '"Issa no from me dawg." - Randy Jackson',
          featureImage: ""
        }
      ]
    }
  },
  {
    groupID: 3,
    groupName: "Handle",
    path: "/handle",
    featureDetails: {
      featureQuestion:
        "Bosch dishwashers come in a range of handle styles to suit the look of your kitchen. Tell us what you're thinking",
      featureOptions: [
        {
          feature: "Bar",
          featureCopy:
            "With 30% capacity, quest perfomance and Bosch quality, our standard size dishwasher fits easily in most spaces.",
          featureImage: ""
        },
        {
          feature: "Recessed",
          featureCopy:
            "Features expandable wings that easily lower to acommodate deeper items, while adjustable times help fit awkward or bulkky items",
          featureImage: ""
        },
        {
          feature: "Scoop",
          featureCopy:
            "With the industry’s largest 3rd rack loading capacity,* MyWayTM rack easily fits hard-to-place items, like cereal bowls, freeing up space on the bottom racks for larger items.",
          featureImage: ""
        },
        {
          feature: "Pocket",
          featureCopy:
            "With the industry’s largest 3rd rack loading capacity,* MyWayTM rack easily fits hard-to-place items, like cereal bowls, freeing up space on the bottom racks for larger items.",
          featureImage: ""
        },
        {
          feature: "Custom",
          featureCopy: '"Issa no from me dawg." - Randy Jackson',
          featureImage: ""
        }
      ]
    }
  },
  {
    groupID: 4,
    groupName: "Light",
    path: "/light",
    featureDetails: {
      featureQuestion:
        "Several of our dishwashers feature convenient indicators that can make your life easier.  Do any of these seem benficial for your lifestyle?",
      featureOptions: [
        {
          feature: "InfoLight®",
          featureCopy:
            "Indicates when your dishwasher is in use by discreetly projecting a small red light onto the floor.",
          featureImage: ""
        },
        {
          feature: "TimeLight®",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        }
      ]
    }
  },
  {
    groupID: 5,
    groupName: "color",
    path: "/color",
    featureDetails: {
      featureQuestion:
        "Next, what color or finish would work best in your kitchen?",
      featureOptions: [
        {
          feature: "White",
          featureCopy:
            "Indicates when your dishwasher is in use by discreetly projecting a small red light onto the floor.",
          featureImage: ""
        },
        {
          feature: "Black",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        },
        {
          feature: "Stainless Steel",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        },
        {
          feature: "Black Stainless Steel",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        },
        {
          feature: "Custom",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        }
      ]
    }
  },
  {
    groupID: 6,
    groupName: "Noise",
    path: "/noise",
    featureDetails: {
      featureQuestion:
        "All Bosch dishwashers are expectionally quiet. Next, let us know if you are bother by ay noise.",
      featureOptions: [
        {
          feature: "38",
          featureCopy:
            "Indicates when your dishwasher is in use by discreetly projecting a small red light onto the floor.",
          featureImage: ""
        },
        {
          feature: "39",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        },
        {
          feature: "40",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        },
        {
          feature: "42",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        },
        {
          feature: "44",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        },
        {
          feature: "46",
          featureCopy:
            "Displays the time remaining on your dishwasher cycle by discreetly projecting a small white light onto the floor.",
          featureImage: ""
        }
      ]
    }
  },
  {
    groupID: 7,
    groupName: "Handle",
    path: "/drying",
    featureDetails: {
      featureQuestion:
        "Bosch dishwashers feature some of the most advanced drying technologies on the market.  Tell us which you prrefer, depending on your needs and preferences",
      featureOptions: [
        {
          feature: "AutoAir",
          featureCopy:
            "AutoAirTM automatically opens the door at the end of the drying cycle to let moisture escape and fresh air circulate, for remarkably dry dishes.",
          featureImage: ""
        },
        {
          feature: "CrystalDry",
          featureCopy:
            "Our patented drying technology, CrystalDry transforms moisture into heat to get dishes 60% dryer.",
          featureImage: ""
        },
        {
          feature: "PurDry",
          featureCopy:
            "Available on all Bosch dishwashers, PureDry features a 'Sanitize' option to thouroughly clean, sanitize and dry dishes.",
          featureImage: ""
        }
      ]
    }
  },
  {
    groupID: 8,
    groupName: "HomeConnect",
    path: "/homeconnect",
    featureDetails: {
      featureQuestion:
        "And finally, would you like the option to remotely control and monitor your Bosch dishwasher from your smart phone using Home Connect?",
      featureOptions: [
        {
          feature: "Yes with Home Connect",
          featureCopy:
            "Remotely manage your dishwasher from checking the status to remote troubleshooting, to start your dishwasher from another room",
          featureImage: ""
        },
        {
          feature: "No without Home Connect",
          featureCopy:
            "Remotely manage your dishwasher from checking the status to remote troubleshooting, to start your dishwasher from another room",
          featureImage: ""
        }
      ]
    }
  }
];

export default featureGroups;