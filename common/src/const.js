// These should match the artifact in this package and contract in contracts
// package.  OR ELSE
const POLYGON_CONTRACT_VERSION = 1
const POLYGON_NFT_CONTRACT = `OriginPolygonERC721_v${POLYGON_CONTRACT_VERSION}`

const timeZones = [
  {
    abbreviation: 'NUT',
    name: 'Pacific/Niue',
    longName: 'Niue Time',
    rawOffsetInMinutes: -660
  },
  {
    abbreviation: 'SST',
    name: 'Pacific/Midway',
    longName: 'Samoa Time',
    rawOffsetInMinutes: -660
  },
  {
    abbreviation: 'SST',
    name: 'Pacific/Pago_Pago',
    longName: 'Samoa Time',
    rawOffsetInMinutes: -660
  },
  {
    abbreviation: 'CKT',
    name: 'Pacific/Rarotonga',
    longName: 'Cook Islands Time',
    rawOffsetInMinutes: -600
  },
  {
    abbreviation: 'HST',
    name: 'America/Adak',
    longName: 'Hawaii-Aleutian Time',
    rawOffsetInMinutes: -600
  },
  {
    abbreviation: 'HST',
    name: 'Pacific/Honolulu',
    longName: 'Hawaii-Aleutian Time',
    rawOffsetInMinutes: -600
  },
  {
    abbreviation: 'TAHT',
    name: 'Pacific/Tahiti',
    longName: 'Tahiti Time',
    rawOffsetInMinutes: -600
  },
  {
    abbreviation: 'MART',
    name: 'Pacific/Marquesas',
    longName: 'Marquesas Time',
    rawOffsetInMinutes: -570
  },
  {
    abbreviation: 'AKST',
    name: 'America/Anchorage',
    longName: 'Alaska Time',
    rawOffsetInMinutes: -540
  },
  {
    abbreviation: 'GAMT',
    name: 'Pacific/Gambier',
    longName: 'Gambier Time',
    rawOffsetInMinutes: -540
  },
  {
    abbreviation: 'PST',
    name: 'America/Los_Angeles',
    longName: 'Pacific Time',
    rawOffsetInMinutes: -480
  },
  {
    abbreviation: 'PST',
    name: 'America/Tijuana',
    longName: 'Pacific Time',
    rawOffsetInMinutes: -480
  },
  {
    abbreviation: 'PST',
    name: 'America/Vancouver',
    longName: 'Pacific Time',
    rawOffsetInMinutes: -480
  },
  {
    abbreviation: 'PST',
    name: 'Pacific/Pitcairn',
    longName: 'Pitcairn Time',
    rawOffsetInMinutes: -480
  },
  {
    abbreviation: 'GMT-7',
    name: 'America/Hermosillo',
    longName: 'Mexican Pacific Time',
    rawOffsetInMinutes: -420
  },
  {
    abbreviation: 'MST',
    name: 'America/Edmonton',
    longName: 'Mountain Time',
    rawOffsetInMinutes: -420
  },
  {
    abbreviation: 'MST',
    name: 'America/Ojinaga',
    longName: 'Mountain Time',
    rawOffsetInMinutes: -420
  },
  {
    abbreviation: 'MST',
    name: 'America/Denver',
    longName: 'Mountain Time',
    rawOffsetInMinutes: -420
  },
  {
    abbreviation: 'MST',
    name: 'America/Phoenix',
    longName: 'Mountain Time',
    rawOffsetInMinutes: -420
  },
  {
    abbreviation: 'MST',
    name: 'America/Whitehorse',
    longName: 'Mountain Time',
    rawOffsetInMinutes: -420
  },
  {
    abbreviation: 'CST',
    name: 'America/Belize',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Chicago',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Guatemala',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Managua',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Mexico_City',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Costa_Rica',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/El_Salvador',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Regina',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Tegucigalpa',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'CST',
    name: 'America/Winnipeg',
    longName: 'Central Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'EAST',
    name: 'Pacific/Easter',
    longName: 'Easter Island Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'GALT',
    name: 'Pacific/Galapagos',
    longName: 'Galapagos Time',
    rawOffsetInMinutes: -360
  },
  {
    abbreviation: 'ACT',
    name: 'America/Rio_Branco',
    longName: 'Acre Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'COT',
    name: 'America/Bogota',
    longName: 'Colombia Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'CST',
    name: 'America/Havana',
    longName: 'Cuba Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Atikokan',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Cancun',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Grand_Turk',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Cayman',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Jamaica',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Nassau',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/New_York',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Panama',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Port-au-Prince',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'EST',
    name: 'America/Toronto',
    longName: 'Eastern Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'ECT',
    name: 'America/Guayaquil',
    longName: 'Ecuador Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'PET',
    name: 'America/Lima',
    longName: 'Peru Time',
    rawOffsetInMinutes: -300
  },
  {
    abbreviation: 'AMT',
    name: 'America/Manaus',
    longName: 'Amazon Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/St_Kitts',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Montserrat',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Barbados',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/St_Lucia',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Port_of_Spain',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Martinique',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/St_Barthelemy',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Halifax',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'Atlantic/Bermuda',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/St_Vincent',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Kralendijk',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Guadeloupe',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Blanc-Sablon',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Marigot',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Aruba',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Lower_Princes',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Tortola',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Dominica',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/St_Thomas',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Grenada',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Antigua',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Puerto_Rico',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Santo_Domingo',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Anguilla',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Thule',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'AST',
    name: 'America/Curacao',
    longName: 'Atlantic Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'BOT',
    name: 'America/La_Paz',
    longName: 'Bolivia Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'CLT',
    name: 'America/Santiago',
    longName: 'Chile Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'GYT',
    name: 'America/Guyana',
    longName: 'Guyana Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'PYT',
    name: 'America/Asuncion',
    longName: 'Paraguay Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'VET',
    name: 'America/Caracas',
    longName: 'Venezuela Time',
    rawOffsetInMinutes: -240
  },
  {
    abbreviation: 'NST',
    name: 'America/St_Johns',
    longName: 'Newfoundland Time',
    rawOffsetInMinutes: -210
  },
  {
    abbreviation: 'ART',
    name: 'America/Argentina/Buenos_Aires',
    longName: 'Argentina Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'BRT',
    name: 'America/Sao_Paulo',
    longName: 'Brasilia Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'CLT',
    name: 'Antarctica/Palmer',
    longName: 'Chile Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'CLT',
    name: 'America/Punta_Arenas',
    longName: 'Chile Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'FKT',
    name: 'Atlantic/Stanley',
    longName: 'Falkland Islands Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'GFT',
    name: 'America/Cayenne',
    longName: 'French Guiana Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'GMT-3',
    name: 'America/Miquelon',
    longName: 'St. Pierre & Miquelon Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'SRT',
    name: 'America/Paramaribo',
    longName: 'Suriname Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'UYT',
    name: 'America/Montevideo',
    longName: 'Uruguay Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'WGT',
    name: 'America/Godthab',
    longName: 'West Greenland Time',
    rawOffsetInMinutes: -180
  },
  {
    abbreviation: 'FNT',
    name: 'America/Noronha',
    longName: 'Fernando de Noronha Time',
    rawOffsetInMinutes: -120
  },
  {
    abbreviation: 'GST',
    name: 'Atlantic/South_Georgia',
    longName: 'South Georgia Time',
    rawOffsetInMinutes: -120
  },
  {
    abbreviation: 'AZOT',
    name: 'Atlantic/Azores',
    longName: 'Azores Time',
    rawOffsetInMinutes: -60
  },
  {
    abbreviation: 'CVT',
    name: 'Atlantic/Cape_Verde',
    longName: 'Cape Verde Time',
    rawOffsetInMinutes: -60
  },
  {
    abbreviation: 'EGT',
    name: 'America/Scoresbysund',
    longName: 'East Greenland Time',
    rawOffsetInMinutes: -60
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Abidjan',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Accra',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Bamako',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Bissau',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Conakry',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Dakar',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'America/Danmarkshavn',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Europe/Isle_of_Man',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Europe/Dublin',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Freetown',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Atlantic/St_Helena',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Lome',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Europe/London',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Monrovia',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Nouakchott',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Ouagadougou',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Atlantic/Reykjavik',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Europe/Jersey',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Europe/Guernsey',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Banjul',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Africa/Sao_Tome',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'GMT',
    name: 'Antarctica/Troll',
    longName: 'Greenwich Mean Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'WET',
    name: 'Africa/Casablanca',
    longName: 'Western European Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'WET',
    name: 'Africa/El_Aaiun',
    longName: 'Western European Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'WET',
    name: 'Atlantic/Canary',
    longName: 'Western European Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'WET',
    name: 'Europe/Lisbon',
    longName: 'Western European Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'WET',
    name: 'Atlantic/Faroe',
    longName: 'Western European Time',
    rawOffsetInMinutes: 0
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Windhoek',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Africa/Algiers',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Amsterdam',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Andorra',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Belgrade',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Berlin',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Malta',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Bratislava',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Brussels',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Budapest',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Copenhagen',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Gibraltar',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Ljubljana',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Arctic/Longyearbyen',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Luxembourg',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Madrid',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Monaco',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Oslo',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Paris',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Podgorica',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Prague',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Rome',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/San_Marino',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Sarajevo',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Skopje',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Stockholm',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Tirane',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Africa/Tunis',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Vaduz',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Vatican',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Vienna',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Warsaw',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Zagreb',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CET',
    name: 'Europe/Zurich',
    longName: 'Central European Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Bangui',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Malabo',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Brazzaville',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Porto-Novo',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Douala',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Kinshasa',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Lagos',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Libreville',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Luanda',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Ndjamena',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'WAT',
    name: 'Africa/Niamey',
    longName: 'West Africa Time',
    rawOffsetInMinutes: 60
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Bujumbura',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Gaborone',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Harare',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Khartoum',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Kigali',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Blantyre',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Lubumbashi',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Lusaka',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'CAT',
    name: 'Africa/Maputo',
    longName: 'Central Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Juba',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Asia/Damascus',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Asia/Amman',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Athens',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Asia/Beirut',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Bucharest',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Africa/Cairo',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Chisinau',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Asia/Hebron',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Helsinki',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Kaliningrad',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Kiev',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Mariehamn',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Asia/Nicosia',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Riga',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Sofia',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Tallinn',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Africa/Tripoli',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'EET',
    name: 'Europe/Vilnius',
    longName: 'Eastern European Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'IST',
    name: 'Asia/Jerusalem',
    longName: 'Israel Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'SAST',
    name: 'Africa/Johannesburg',
    longName: 'South Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'SAST',
    name: 'Africa/Mbabane',
    longName: 'South Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'SAST',
    name: 'Africa/Maseru',
    longName: 'South Africa Time',
    rawOffsetInMinutes: 120
  },
  {
    abbreviation: 'AST',
    name: 'Asia/Kuwait',
    longName: 'Arabian Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'AST',
    name: 'Asia/Baghdad',
    longName: 'Arabian Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'AST',
    name: 'Asia/Qatar',
    longName: 'Arabian Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'AST',
    name: 'Asia/Bahrain',
    longName: 'Arabian Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'AST',
    name: 'Asia/Riyadh',
    longName: 'Arabian Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'AST',
    name: 'Asia/Aden',
    longName: 'Arabian Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Addis_Ababa',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Indian/Antananarivo',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Asmara',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Dar_es_Salaam',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Djibouti',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Kampala',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Indian/Mayotte',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Mogadishu',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Indian/Comoro',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'EAT',
    name: 'Africa/Nairobi',
    longName: 'East Africa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'MSK',
    name: 'Europe/Minsk',
    longName: 'Moscow Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'MSK',
    name: 'Europe/Moscow',
    longName: 'Moscow Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'SYOT',
    name: 'Antarctica/Syowa',
    longName: 'Syowa Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'TRT',
    name: 'Europe/Istanbul',
    longName: 'Turkey Time',
    rawOffsetInMinutes: 180
  },
  {
    abbreviation: 'IRST',
    name: 'Asia/Tehran',
    longName: 'Iran Time',
    rawOffsetInMinutes: 210
  },
  {
    abbreviation: 'AMT',
    name: 'Asia/Yerevan',
    longName: 'Armenia Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'AZT',
    name: 'Asia/Baku',
    longName: 'Azerbaijan Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'GET',
    name: 'Asia/Tbilisi',
    longName: 'Georgia Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'GST',
    name: 'Asia/Dubai',
    longName: 'Gulf Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'GST',
    name: 'Asia/Muscat',
    longName: 'Gulf Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'MUT',
    name: 'Indian/Mauritius',
    longName: 'Mauritius Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'RET',
    name: 'Indian/Reunion',
    longName: 'Réunion Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'SAMT',
    name: 'Europe/Samara',
    longName: 'Samara Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'SCT',
    name: 'Indian/Mahe',
    longName: 'Seychelles Time',
    rawOffsetInMinutes: 240
  },
  {
    abbreviation: 'AFT',
    name: 'Asia/Kabul',
    longName: 'Afghanistan Time',
    rawOffsetInMinutes: 270
  },
  {
    abbreviation: 'TFT',
    name: 'Indian/Kerguelen',
    longName: 'French Southern & Antarctic Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'MVT',
    name: 'Indian/Maldives',
    longName: 'Maldives Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'MAWT',
    name: 'Antarctica/Mawson',
    longName: 'Mawson Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'PKT',
    name: 'Asia/Karachi',
    longName: 'Pakistan Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'TJT',
    name: 'Asia/Dushanbe',
    longName: 'Tajikistan Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'TMT',
    name: 'Asia/Ashgabat',
    longName: 'Turkmenistan Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'UZT',
    name: 'Asia/Tashkent',
    longName: 'Uzbekistan Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'GMT+5',
    name: 'Asia/Qyzylorda',
    longName: 'West Kazakhstan Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'YEKT',
    name: 'Asia/Yekaterinburg',
    longName: 'Yekaterinburg Time',
    rawOffsetInMinutes: 300
  },
  {
    abbreviation: 'IST',
    name: 'Asia/Colombo',
    longName: 'India Time',
    rawOffsetInMinutes: 330
  },
  {
    abbreviation: 'IST',
    name: 'Asia/Kolkata',
    longName: 'India Time',
    rawOffsetInMinutes: 330
  },
  {
    abbreviation: 'NPT',
    name: 'Asia/Kathmandu',
    longName: 'Nepal Time',
    rawOffsetInMinutes: 345
  },
  {
    abbreviation: 'BST',
    name: 'Asia/Dhaka',
    longName: 'Bangladesh Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'BTT',
    name: 'Asia/Thimphu',
    longName: 'Bhutan Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'CST',
    name: 'Asia/Urumqi',
    longName: 'China Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'GMT+6',
    name: 'Asia/Almaty',
    longName: 'East Kazakhstan Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'GMT+6',
    name: 'Indian/Chagos',
    longName: 'Indian Ocean Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'KGT',
    name: 'Asia/Bishkek',
    longName: 'Kyrgyzstan Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'OMST',
    name: 'Asia/Omsk',
    longName: 'Omsk Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'VOST',
    name: 'Antarctica/Vostok',
    longName: 'Vostok Time',
    rawOffsetInMinutes: 360
  },
  {
    abbreviation: 'CCT',
    name: 'Indian/Cocos',
    longName: 'Cocos Islands Time',
    rawOffsetInMinutes: 390
  },
  {
    abbreviation: 'MMT',
    name: 'Asia/Yangon',
    longName: 'Myanmar Time',
    rawOffsetInMinutes: 390
  },
  {
    abbreviation: 'CXT',
    name: 'Indian/Christmas',
    longName: 'Christmas Island Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'DAVT',
    name: 'Antarctica/Davis',
    longName: 'Davis Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'HOVT',
    name: 'Asia/Hovd',
    longName: 'Hovd Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'ICT',
    name: 'Asia/Bangkok',
    longName: 'Indochina Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'ICT',
    name: 'Asia/Ho_Chi_Minh',
    longName: 'Indochina Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'ICT',
    name: 'Asia/Phnom_Penh',
    longName: 'Indochina Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'ICT',
    name: 'Asia/Vientiane',
    longName: 'Indochina Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'NOVT',
    name: 'Asia/Novosibirsk',
    longName: 'Novosibirsk Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'GMT+7',
    name: 'Asia/Jakarta',
    longName: 'Western Indonesia Time',
    rawOffsetInMinutes: 420
  },
  {
    abbreviation: 'AWST',
    name: 'Australia/Perth',
    longName: 'Australian Western Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'BNT',
    name: 'Asia/Brunei',
    longName: 'Brunei Darussalam Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'WITA',
    name: 'Asia/Makassar',
    longName: 'Central Indonesia Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'CST',
    name: 'Asia/Macau',
    longName: 'China Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'CST',
    name: 'Asia/Shanghai',
    longName: 'China Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'HKT',
    name: 'Asia/Hong_Kong',
    longName: 'Hong Kong Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'IRKT',
    name: 'Asia/Irkutsk',
    longName: 'Irkutsk Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'MYT',
    name: 'Asia/Kuala_Lumpur',
    longName: 'Malaysia Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'PHT',
    name: 'Asia/Manila',
    longName: 'Philippine Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'SGT',
    name: 'Asia/Singapore',
    longName: 'Singapore Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'GMT+8',
    name: 'Asia/Taipei',
    longName: 'Taipei Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'ULAT',
    name: 'Asia/Ulaanbaatar',
    longName: 'Ulaanbaatar Time',
    rawOffsetInMinutes: 480
  },
  {
    abbreviation: 'ACWST',
    name: 'Australia/Eucla',
    longName: 'Australian Central Western Time',
    rawOffsetInMinutes: 525
  },
  {
    abbreviation: 'TLT',
    name: 'Asia/Dili',
    longName: 'East Timor Time',
    rawOffsetInMinutes: 540
  },
  {
    abbreviation: 'GMT+9',
    name: 'Asia/Jayapura',
    longName: 'Eastern Indonesia Time',
    rawOffsetInMinutes: 540
  },
  {
    abbreviation: 'JST',
    name: 'Asia/Tokyo',
    longName: 'Japan Time',
    rawOffsetInMinutes: 540
  },
  {
    abbreviation: 'GMT+9',
    name: 'Asia/Pyongyang',
    longName: 'Korean Time',
    rawOffsetInMinutes: 540
  },
  {
    abbreviation: 'GMT+9',
    name: 'Asia/Seoul',
    longName: 'Korean Time',
    rawOffsetInMinutes: 540
  },
  {
    abbreviation: 'PWT',
    name: 'Pacific/Palau',
    longName: 'Palau Time',
    rawOffsetInMinutes: 540
  },
  {
    abbreviation: 'YAKT',
    name: 'Asia/Chita',
    longName: 'Yakutsk Time',
    rawOffsetInMinutes: 540
  },
  {
    abbreviation: 'ACST',
    name: 'Australia/Adelaide',
    longName: 'Australian Central Time',
    rawOffsetInMinutes: 570
  },
  {
    abbreviation: 'ACST',
    name: 'Australia/Darwin',
    longName: 'Australian Central Time',
    rawOffsetInMinutes: 570
  },
  {
    abbreviation: 'AEST',
    name: 'Australia/Brisbane',
    longName: 'Australian Eastern Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'AEST',
    name: 'Australia/Sydney',
    longName: 'Australian Eastern Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'ChST',
    name: 'Pacific/Guam',
    longName: 'Chamorro Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'ChST',
    name: 'Pacific/Saipan',
    longName: 'Chamorro Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'CHUT',
    name: 'Pacific/Chuuk',
    longName: 'Chuuk Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'GMT+10',
    name: 'Antarctica/DumontDUrville',
    longName: 'Dumont-d’Urville Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'PGT',
    name: 'Pacific/Port_Moresby',
    longName: 'Papua New Guinea Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'VLAT',
    name: 'Asia/Vladivostok',
    longName: 'Vladivostok Time',
    rawOffsetInMinutes: 600
  },
  {
    abbreviation: 'LHST',
    name: 'Australia/Lord_Howe',
    longName: 'Lord Howe Time',
    rawOffsetInMinutes: 630
  },
  {
    abbreviation: 'BST',
    name: 'Pacific/Bougainville',
    longName: 'Bougainville Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'CAST',
    name: 'Antarctica/Casey',
    longName: 'Casey Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'KOST',
    name: 'Pacific/Kosrae',
    longName: 'Kosrae Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'NCT',
    name: 'Pacific/Noumea',
    longName: 'New Caledonia Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'GMT+12',
    name: 'Pacific/Norfolk',
    longName: 'Norfolk Island Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'SAKT',
    name: 'Asia/Sakhalin',
    longName: 'Sakhalin Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'SBT',
    name: 'Pacific/Guadalcanal',
    longName: 'Solomon Islands Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'VUT',
    name: 'Pacific/Efate',
    longName: 'Vanuatu Time',
    rawOffsetInMinutes: 660
  },
  {
    abbreviation: 'FJT',
    name: 'Pacific/Fiji',
    longName: 'Fiji Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'GMT+12',
    name: 'Pacific/Tarawa',
    longName: 'Gilbert Islands Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'MHT',
    name: 'Pacific/Majuro',
    longName: 'Marshall Islands Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'NRT',
    name: 'Pacific/Nauru',
    longName: 'Nauru Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'NZST',
    name: 'Pacific/Auckland',
    longName: 'New Zealand Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'NZST',
    name: 'Antarctica/McMurdo',
    longName: 'New Zealand Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'GMT+12',
    name: 'Asia/Kamchatka',
    longName: 'Petropavlovsk-Kamchatski Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'TVT',
    name: 'Pacific/Funafuti',
    longName: 'Tuvalu Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'GMT+12',
    name: 'Pacific/Wake',
    longName: 'Wake Island Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'GMT+12',
    name: 'Pacific/Wallis',
    longName: 'Wallis & Futuna Time',
    rawOffsetInMinutes: 720
  },
  {
    abbreviation: 'GMT+13:45',
    name: 'Pacific/Chatham',
    longName: 'Chatham Time',
    rawOffsetInMinutes: 765
  },
  {
    abbreviation: 'GMT+14',
    name: 'Pacific/Apia',
    longName: 'Apia Time',
    rawOffsetInMinutes: 780
  },
  {
    abbreviation: 'GMT+13',
    name: 'Pacific/Enderbury',
    longName: 'Phoenix Islands Time',
    rawOffsetInMinutes: 780
  },
  {
    abbreviation: 'TKT',
    name: 'Pacific/Fakaofo',
    longName: 'Tokelau Time',
    rawOffsetInMinutes: 780
  },
  {
    abbreviation: 'TOT',
    name: 'Pacific/Tongatapu',
    longName: 'Tonga Time',
    rawOffsetInMinutes: 780
  },
  {
    abbreviation: 'LINT',
    name: 'Pacific/Kiritimati',
    longName: 'Line Islands Time',
    rawOffsetInMinutes: 840
  }
]

module.exports = {
  NFT_CONTRACT_VERSION,
  NFT_CONTRACT,
  POLYGON_NFT_CONTRACT,
  POLYGON_CONTRACT_VERSION,
  timeZones
}
