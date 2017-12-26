const CONNECTIONS = [
  {
    name: 'HOUSE OF SOLOMON',
    connections: [
      {source: 'PORCH', target: 'KITCHEN'},
      {source: 'KITCHEN', target: 'DINING ROOM'},
      {source: 'DINING ROOM', target: 'GRACE\'S ROOM'},
      {source: 'DINING ROOM', target: 'HALLWAY'},
      {source: 'HALLWAY', target: 'BATHROOM'},
      {source: 'HALLWAY', target: 'ANDREW\'S ROOM'},
      {source: 'HALLWAY', target: 'REMY\'S ROOM'},
      {source: 'HALLWAY', target: 'REMY\'S BATHROOM'},
      {source: 'REMY\'S ROOM', target: 'REMY\'S BATHROOM'},
      {source: 'HALLWAY', target: 'LIVING ROOM'},
      {source: 'HALLWAY', target: 'MAIN ENTRANCE'}
    ]
  },
  {
    name: 'SEBASTIAN\'S CABIN',
    connections: [
      {source: 'MAIN ENTRANCE', target: 'FRONT DRIVE'},
      {source: 'OUTHOUSE', target: 'FRONT DRIVE'},
      {source: 'FIREPIT', target: 'FRONT DRIVE'},
      {source: 'MAIN ENTRANCE', target: 'KITCHEN\& FIRST-ROOM'},
      {source: 'LIVING ROOM', target: 'KITCHEN\& FIRST-ROOM'},
      {source: 'LIVING ROOM', target: 'FRONT DRIVE'},
      {source: 'KITCHEN\& FIRST-ROOM', target: 'FRONT DRIVE'},
      {source: 'FIREPIT', target: 'RIVER'},
      {source: 'FIREPIT', target: 'KITCHEN\& FIRST-ROOM'}
    ]
  },
  {
    name: 'BLACK HOUSE',
    connections: [
      {source: 'GARDEN', target: 'STREET'},
      {source: 'GARDEN', target: 'LIVING ROOM'},
      {source: 'GARDEN', target: 'GARAGE'},
      {source: 'KITCHEN', target: 'GARAGE'},
      {source: 'KITCHEN', target: 'LIVING ROOM'},
      {source: 'KITCHEN', target: 'BACKYARD'},
      {source: 'KITCHEN', target: 'HALLWAY'},
      {source: 'BATHROOM', target: 'HALLWAY'},
      {source: 'DAVID\'S ROOM', target: 'HALLWAY'},
      {source: 'LAUREN\'S ROOM', target: 'HALLWAY'},
      {source: 'ANDREW\'S ROOM', target: 'HALLWAY'},
      {source: 'ANDREW\'S ROOM', target: 'ANDREW\'S BATHROOM'}
    ]
  },
  {
    name: 'AN APARTMENT IN A BUILDING CALLED ANITA',
    connections: [
      {source: 'BATHROOM', target: 'HALL'},
      {source: 'NIKKI\'S ROOM', target: 'HALL'},
      {source: 'KITCHEN', target: 'HALL'},
      {source: 'LIVING ROOM', target: 'HALL'},
      {source: 'ANDREW\& ALLIE\'S ROOM', target: 'HALL'},
      {source: 'ANDREW\& ALLIE\'S ROOM', target: 'LIVING ROOM'},
      {source: 'KITCHEN', target: 'LIVING ROOM'},
      {source: 'MAIN ENTRANCE', target: 'HALL'}
    ]
  },
  {
    name: 'THE LUTZ',
    connections: [
      {source: 'FRONT PORCH', target: 'STREET'},
      {source: 'FRONT PORCH', target: 'MAIN ROOM'},
      {source: 'BACKHALL', target: 'MAIN ROOM'},
      {source: 'BACKHALL', target: 'MEN\'S ROOM'},
      {source: 'BACKHALL', target: 'WOMEN\'S ROOM'},
      {source: 'BACKHALL', target: 'KITCHEN'},
      {source: 'BACKHALL', target: 'BACK PORCH'},
      {source: 'STREET', target: 'BACK PORCH'}
    ]
  },
  {
    name: 'MCNUTT \& HENDRICKS RESIDENCE',
    size: {
      width: 2000,
      height: 2 * 714
    },
    connections: [
      {source: 'MAIN ENTRANCE', target: 'OUTSIDE'},
      {source: 'BACKYARD', target: 'OUTSIDE'},
      {source: 'BACKYARD', target: 'GARAGE'},
      {source: 'MAIN ENTRANCE', target: 'LIVING ROOM'},
      {source: 'DINING ROOM', target: 'LIVING ROOM'},
      {source: 'DINING ROOM', target: 'HALL'},
      {source: 'DINING ROOM', target: 'KITCHEN'},
      {source: 'HALL', target: 'BATHROOM'},
      {source: 'HALL', target: 'SCREENING ROOM'},
      {source: 'HALL', target: 'STAIRS'},
      {source: 'HALL', target: 'STUDY'},
      {source: 'UPSTAIRS HALL', target: 'STAIRS'},
      {source: 'UPSTAIRS HALL', target: 'ANDREW\'S ROOM'},
      {source: 'UPSTAIRS HALL', target: 'WILL\'S ROOM'},
      {source: 'UPSTAIRS HALL', target: 'UPSTAIRS BATHROOM'},
      {source: 'KITCHEN', target: 'BACKYARD'},
      {source: 'KITCHEN', target: 'STAIRS'},
      {source: 'KITCHEN', target: 'BASEMENT STAIRS'},
      {source: 'BASEMENT', target: 'BASEMENT STAIRS'},
      {source: 'BASEMENT STAIRS', target: 'LAUNDRY ROOM'},
      {source: 'DEEP BASEMENT', target: 'LAUNDRY ROOM'},
      {source: 'DEEP BASEMENT', target: 'STUDIO'}
    ]
  },
  {
    name: 'RAINBOW HOUSE AS IT ONCE WAS',
    size: {
      width: 2000,
      height: 2 * 714
    },
    connections: [
      {source: 'DOWNSTAIRS LIVINGROOM', target: 'BACKYARD'},
      {source: 'DOWNSTAIRS LIVINGROOM', target: 'KEVIN\& DEBORAH\'S BEDROOM'},
      {source: 'DOWNSTAIRS LIVINGROOM', target: 'DOWNSTAIRS DINING ROOM'},
      {source: 'KEVIN\'S OFFICE', target: 'DOWNSTAIRS DINING ROOM'},
      {source: 'LOWER LEVEL STAIRS', target: 'DOWNSTAIRS DINING ROOM'},
      {source: 'DOWNSTAIRS KITCHEN', target: 'DOWNSTAIRS DINING ROOM'},
      {source: 'DOWNSTAIRS BATHROOM', target: 'DOWNSTAIRS DINING ROOM'},
      {source: 'LAUNDRY ROOM', target: 'DOWNSTAIRS DINING ROOM'},

      {source: 'LOWER LEVEL STAIRS', target: 'HALL'},
      {source: 'BATHROOM', target: 'HALL'},
      {source: 'DINING ROOM', target: 'HALL'},
      {source: 'DEEDEE\'S KITCHEN', target: 'HALL'},
      {source: 'DEEDEE\'S KITCHEN', target: 'FOYER'},
      {source: 'FRONTSTAIRS', target: 'FOYER'},
      {source: 'GREAT LIVING ROOM', target: 'FOYER'},
      {source: 'GREAT LIVING ROOM', target: 'DINING ROOM'},
      {source: 'GREAT LIVING ROOM', target: 'JULIET BALCONY'},
      {source: 'SUNROOM', target: 'DINING ROOM'},
      {source: 'DEEDEE\'S KITCHEN', target: 'PORCH'},
      {source: 'FOYER', target: 'PORCH'},

      {source: 'TOP STAIRS', target: 'UPPERFLOORS LANDING'},
      {source: 'TOP STAIRS', target: 'CALEB\'S ROOM'},
      {source: 'CALEB\'S ROOM', target: 'CALEB\'S CLOSET'},

      {source: 'FRONTSTAIRS', target: 'UPPERFLOORS LANDING'},
      {source: 'UPSTAIRS BATHROOM', target: 'UPPERFLOORS LANDING'},
      {source: 'DEBORAH\'S OFFICE', target: 'UPPERFLOORS LANDING'},
      {source: 'DEEDEE\'S STUDIO', target: 'UPPERFLOORS LANDING'},
      {source: 'ROSWELL\'S BEDROOM', target: 'UPPERFLOORS LANDING'},
      {source: 'DEEDEE\'S BEDROOM', target: 'UPPERFLOORS LANDING'},
      {source: 'ROSWELL\'S BEDROOM', target: 'UPSTAIRS PORCH'},
      {source: 'DEEDEE\'S BEDROOM', target: 'UPSTAIRS PORCH'},

      {source: 'STREET', target: 'PORCH'},
      {source: 'SIDEYARD', target: 'PORCH'},
      {source: 'SIDEYARD', target: 'BACKYARD'}
    ]
  },
];

export default CONNECTIONS;
