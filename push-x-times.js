var count = Number(process.argv[2]);
if (isNaN(count)) return console.error('give me a count');


var ezuuid = require('ezuuid'),
	dbName = ezuuid(),
	Pouch = require('pouchdb'),
	db = new Pouch(dbName),
	fs = require('fs'),
	ps = require('child_process');


  var diary = {
    "_id": "diary-OS91262",
    "domainName": "diary",
    "observer": "name changed to protect the innocent",
    "remarks": "",
    "eventDate": "2012-01-02",
    "contacts": [
      {
        "_id": "AV21212",
        "domainName": "contact",
        "beginTime": "2012-01-02T13:20:07.000Z",
        "endTime": "2012-01-02T20:50:07.000Z",
        "taxon": "taxon-Pithecia",
        "remarks": "08:34, GPS was accidentally turned off.",
        "focals": [
          {
            "_id": "FS23011",
            "domainName": "focal-sample",
            "subjectId": "animal-Milo/",
            "beginTime": "2012-01-02T13:36:10.000Z",
            "endTime": "2012-01-02T13:56:10.000Z",
            "observations": [
              {
                "id": "47375311",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-02T23:26:56.000Z",
                "endTime": "2012-01-02T23:28:56.000Z"
              },
              {
                "id": "47375312",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-02T23:26:46.000Z",
                "endTime": "2012-01-02T23:28:46.000Z"
              },
              {
                "id": "47375313",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-02T23:25:41.000Z",
                "endTime": "2012-01-02T23:27:41.000Z"
              },
              {
                "id": "47375314",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-02T23:25:32.000Z",
                "endTime": "2012-01-02T23:27:32.000Z"
              },
              {
                "id": "47375315",
                "domainName": "focal-observation",
                "behavior": "AFV/",
                "beginTime": "2012-01-02T23:25:12.000Z",
                "endTime": "2012-01-02T23:27:12.000Z"
              },
              {
                "id": "47375316",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-02T23:24:54.000Z",
                "endTime": "2012-01-02T23:26:54.000Z"
              },
              {
                "id": "47375317",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-02T23:23:50.000Z",
                "endTime": "2012-01-02T23:25:50.000Z"
              },
              {
                "id": "47375318",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-02T23:23:20.000Z",
                "endTime": "2012-01-02T23:25:20.000Z"
              },
              {
                "id": "47375319",
                "domainName": "focal-observation",
                "behavior": "FBM/",
                "beginTime": "2012-01-02T23:22:08.000Z",
                "endTime": "2012-01-02T23:24:08.000Z"
              },
              {
                "id": "47375320",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-02T23:21:35.000Z",
                "endTime": "2012-01-02T23:23:35.000Z"
              }
            ]
          },
          {
            "_id": "FS23012",
            "domainName": "focal-sample",
            "subjectId": "animal-INF10/",
            "beginTime": "2012-01-02T14:07:11.000Z",
            "endTime": "2012-01-02T14:27:11.000Z",
            "observations": [
              {
                "id": "47375301",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-02T23:36:23.000Z",
                "endTime": "2012-01-02T23:38:23.000Z"
              },
              {
                "id": "47375302",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-02T23:36:21.000Z",
                "endTime": "2012-01-02T23:38:21.000Z"
              },
              {
                "id": "47375303",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-02T23:36:19.000Z",
                "endTime": "2012-01-02T23:38:19.000Z"
              },
              {
                "id": "47375304",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-02T23:36:03.000Z",
                "endTime": "2012-01-02T23:38:03.000Z"
              },
              {
                "id": "47375305",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-02T23:34:24.000Z",
                "endTime": "2012-01-02T23:36:24.000Z"
              },
              {
                "id": "47375306",
                "domainName": "focal-observation",
                "behavior": "AFV/",
                "beginTime": "2012-01-02T23:34:18.000Z",
                "endTime": "2012-01-02T23:36:18.000Z"
              },
              {
                "id": "47375307",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-02T23:32:36.000Z",
                "endTime": "2012-01-02T23:34:36.000Z"
              },
              {
                "id": "47375308",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-02T23:32:19.000Z",
                "endTime": "2012-01-02T23:34:19.000Z"
              },
              {
                "id": "47375309",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-02T23:31:01.000Z",
                "endTime": "2012-01-02T23:33:01.000Z"
              },
              {
                "id": "47375310",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-02T23:30:38.000Z",
                "endTime": "2012-01-02T23:32:38.000Z"
              }
            ]
          },
          {
            "_id": "FS23013",
            "domainName": "focal-sample",
            "subjectId": "animal-Mona/",
            "beginTime": "2012-01-02T14:27:46.000Z",
            "endTime": "2012-01-02T14:47:46.000Z",
            "observations": [
              {
                "id": "47375291",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-02T23:54:08.000Z",
                "endTime": "2012-01-02T23:56:08.000Z"
              },
              {
                "id": "47375292",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-02T23:54:05.000Z",
                "endTime": "2012-01-02T23:56:05.000Z"
              },
              {
                "id": "47375293",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-02T23:53:37.000Z",
                "endTime": "2012-01-02T23:55:37.000Z"
              },
              {
                "id": "47375294",
                "domainName": "focal-observation",
                "behavior": "MBT/",
                "beginTime": "2012-01-02T23:53:18.000Z",
                "endTime": "2012-01-02T23:55:18.000Z"
              },
              {
                "id": "47375295",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-02T23:52:26.000Z",
                "endTime": "2012-01-02T23:54:26.000Z"
              },
              {
                "id": "47375296",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-02T23:52:24.000Z",
                "endTime": "2012-01-02T23:54:24.000Z"
              },
              {
                "id": "47375297",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-02T23:51:59.000Z",
                "endTime": "2012-01-02T23:53:59.000Z"
              },
              {
                "id": "47375298",
                "domainName": "focal-observation",
                "behavior": "MFV/",
                "beginTime": "2012-01-02T23:51:53.000Z",
                "endTime": "2012-01-02T23:53:53.000Z"
              },
              {
                "id": "47375299",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-02T23:50:59.000Z",
                "endTime": "2012-01-02T23:52:59.000Z"
              },
              {
                "id": "47375300",
                "domainName": "focal-observation",
                "behavior": "FEFR/FESE/",
                "beginTime": "2012-01-02T23:50:02.000Z",
                "endTime": "2012-01-02T23:52:02.000Z"
              }
            ]
          },
          {
            "_id": "FS23014",
            "domainName": "focal-sample",
            "subjectId": "animal-Milo/",
            "beginTime": "2012-01-02T15:34:00.000Z",
            "endTime": "2012-01-02T15:54:00.000Z",
            "observations": [
              {
                "id": "47375281",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T01:14:46.000Z",
                "endTime": "2012-01-03T01:16:46.000Z"
              },
              {
                "id": "47375282",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T01:14:02.000Z",
                "endTime": "2012-01-03T01:16:02.000Z"
              },
              {
                "id": "47375283",
                "domainName": "focal-observation",
                "behavior": "SGMA/",
                "beginTime": "2012-01-03T01:12:35.000Z",
                "endTime": "2012-01-03T01:14:35.000Z"
              },
              {
                "id": "47375284",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T01:11:33.000Z",
                "endTime": "2012-01-03T01:13:33.000Z"
              },
              {
                "id": "47375285",
                "domainName": "focal-observation",
                "behavior": "SGMA/SGMR/",
                "beginTime": "2012-01-03T01:07:06.000Z",
                "endTime": "2012-01-03T01:09:06.000Z"
              },
              {
                "id": "47375286",
                "domainName": "focal-observation",
                "behavior": "SGMA/",
                "beginTime": "2012-01-03T01:03:35.000Z",
                "endTime": "2012-01-03T01:05:35.000Z"
              },
              {
                "id": "47375287",
                "domainName": "focal-observation",
                "behavior": "SGMA/",
                "beginTime": "2012-01-03T01:01:21.000Z",
                "endTime": "2012-01-03T01:03:21.000Z"
              },
              {
                "id": "47375288",
                "domainName": "focal-observation",
                "behavior": "VCV/",
                "beginTime": "2012-01-03T00:58:09.000Z",
                "endTime": "2012-01-03T01:00:09.000Z"
              },
              {
                "id": "47375289",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T00:54:52.000Z",
                "endTime": "2012-01-03T00:56:52.000Z"
              },
              {
                "id": "47375290",
                "domainName": "focal-observation",
                "behavior": "FENL/",
                "beginTime": "2012-01-03T00:54:19.000Z",
                "endTime": "2012-01-03T00:56:19.000Z"
              }
            ]
          },
          {
            "_id": "FS23015",
            "domainName": "focal-sample",
            "subjectId": "animal-Mona/",
            "beginTime": "2012-01-02T15:58:41.000Z",
            "endTime": "2012-01-02T16:18:41.000Z",
            "observations": [
              {
                "id": "47375271",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:22:13.000Z",
                "endTime": "2012-01-03T01:24:13.000Z"
              },
              {
                "id": "47375272",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:22:09.000Z",
                "endTime": "2012-01-03T01:24:09.000Z"
              },
              {
                "id": "47375273",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:22:01.000Z",
                "endTime": "2012-01-03T01:24:01.000Z"
              },
              {
                "id": "47375274",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:21:55.000Z",
                "endTime": "2012-01-03T01:23:55.000Z"
              },
              {
                "id": "47375275",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:20:45.000Z",
                "endTime": "2012-01-03T01:22:45.000Z"
              },
              {
                "id": "47375276",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:20:40.000Z",
                "endTime": "2012-01-03T01:22:40.000Z"
              },
              {
                "id": "47375277",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:20:09.000Z",
                "endTime": "2012-01-03T01:22:09.000Z"
              },
              {
                "id": "47375278",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:20:03.000Z",
                "endTime": "2012-01-03T01:22:03.000Z"
              },
              {
                "id": "47375279",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T01:17:28.000Z",
                "endTime": "2012-01-03T01:19:28.000Z"
              },
              {
                "id": "47375280",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/SPC/",
                "beginTime": "2012-01-03T01:16:56.000Z",
                "endTime": "2012-01-03T01:18:56.000Z"
              }
            ]
          },
          {
            "_id": "FS23016",
            "domainName": "focal-sample",
            "subjectId": "animal-Mona/",
            "beginTime": "2012-01-02T16:38:45.000Z",
            "endTime": "2012-01-02T16:58:45.000Z",
            "observations": [
              {
                "id": "47375261",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T01:29:51.000Z",
                "endTime": "2012-01-03T01:31:51.000Z"
              },
              {
                "id": "47375262",
                "domainName": "focal-observation",
                "behavior": "MBT/",
                "beginTime": "2012-01-03T01:29:32.000Z",
                "endTime": "2012-01-03T01:31:32.000Z"
              },
              {
                "id": "47375263",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-03T01:27:58.000Z",
                "endTime": "2012-01-03T01:29:58.000Z"
              },
              {
                "id": "47375264",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-03T01:27:35.000Z",
                "endTime": "2012-01-03T01:29:35.000Z"
              },
              {
                "id": "47375265",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T01:26:18.000Z",
                "endTime": "2012-01-03T01:28:18.000Z"
              },
              {
                "id": "47375266",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T01:25:58.000Z",
                "endTime": "2012-01-03T01:27:58.000Z"
              },
              {
                "id": "47375267",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-03T01:25:17.000Z",
                "endTime": "2012-01-03T01:27:17.000Z"
              },
              {
                "id": "47375268",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T01:25:10.000Z",
                "endTime": "2012-01-03T01:27:10.000Z"
              },
              {
                "id": "47375269",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T01:24:20.000Z",
                "endTime": "2012-01-03T01:26:20.000Z"
              },
              {
                "id": "47375270",
                "domainName": "focal-observation",
                "behavior": "FBM/",
                "beginTime": "2012-01-03T01:24:03.000Z",
                "endTime": "2012-01-03T01:26:03.000Z"
              }
            ]
          },
          {
            "_id": "FS23017",
            "domainName": "focal-sample",
            "subjectId": "animal-Milo/",
            "beginTime": "2012-01-02T17:02:08.000Z",
            "endTime": "2012-01-02T17:22:08.000Z",
            "observations": [
              {
                "id": "47375251",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T02:09:36.000Z",
                "endTime": "2012-01-03T02:11:36.000Z"
              },
              {
                "id": "47375252",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T02:09:34.000Z",
                "endTime": "2012-01-03T02:11:34.000Z"
              },
              {
                "id": "47375253",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T02:09:28.000Z",
                "endTime": "2012-01-03T02:11:28.000Z"
              },
              {
                "id": "47375254",
                "domainName": "focal-observation",
                "behavior": "FV/",
                "beginTime": "2012-01-03T02:09:22.000Z",
                "endTime": "2012-01-03T02:11:22.000Z"
              },
              {
                "id": "47375255",
                "domainName": "focal-observation",
                "behavior": "MFV/",
                "beginTime": "2012-01-03T02:08:56.000Z",
                "endTime": "2012-01-03T02:10:56.000Z"
              },
              {
                "id": "47375256",
                "domainName": "focal-observation",
                "behavior": "AFV/",
                "beginTime": "2012-01-03T02:08:45.000Z",
                "endTime": "2012-01-03T02:10:45.000Z"
              },
              {
                "id": "47375257",
                "domainName": "focal-observation",
                "behavior": "MBT/",
                "beginTime": "2012-01-03T02:08:26.000Z",
                "endTime": "2012-01-03T02:10:26.000Z"
              },
              {
                "id": "47375258",
                "domainName": "focal-observation",
                "behavior": "FESE/",
                "beginTime": "2012-01-03T02:08:05.000Z",
                "endTime": "2012-01-03T02:10:05.000Z"
              },
              {
                "id": "47375259",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:06:54.000Z",
                "endTime": "2012-01-03T02:08:54.000Z"
              },
              {
                "id": "47375260",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:06:22.000Z",
                "endTime": "2012-01-03T02:08:22.000Z"
              }
            ]
          },
          {
            "_id": "FS23018",
            "domainName": "focal-sample",
            "subjectId": "animal-Mona/",
            "beginTime": "2012-01-02T17:53:05.000Z",
            "endTime": "2012-01-02T18:13:05.000Z",
            "observations": [
              {
                "id": "47375241",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:33:08.000Z",
                "endTime": "2012-01-03T02:35:08.000Z"
              },
              {
                "id": "47375242",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:32:49.000Z",
                "endTime": "2012-01-03T02:34:49.000Z"
              },
              {
                "id": "47375243",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T02:32:29.000Z",
                "endTime": "2012-01-03T02:34:29.000Z"
              },
              {
                "id": "47375244",
                "domainName": "focal-observation",
                "behavior": "MWI/",
                "beginTime": "2012-01-03T02:32:19.000Z",
                "endTime": "2012-01-03T02:34:19.000Z"
              },
              {
                "id": "47375245",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T02:32:08.000Z",
                "endTime": "2012-01-03T02:34:08.000Z"
              },
              {
                "id": "47375246",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T02:31:57.000Z",
                "endTime": "2012-01-03T02:33:57.000Z"
              },
              {
                "id": "47375247",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-03T02:31:31.000Z",
                "endTime": "2012-01-03T02:33:31.000Z"
              },
              {
                "id": "47375248",
                "domainName": "focal-observation",
                "behavior": "FMA/",
                "beginTime": "2012-01-03T02:31:21.000Z",
                "endTime": "2012-01-03T02:33:21.000Z"
              },
              {
                "id": "47375249",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T02:13:48.000Z",
                "endTime": "2012-01-03T02:15:48.000Z"
              },
              {
                "id": "47375250",
                "domainName": "focal-observation",
                "behavior": "FFV/",
                "beginTime": "2012-01-03T02:12:31.000Z",
                "endTime": "2012-01-03T02:14:31.000Z"
              }
            ]
          },
          {
            "_id": "FS23019",
            "domainName": "focal-sample",
            "subjectId": "animal-Mona/",
            "beginTime": "2012-01-02T19:07:18.000Z",
            "endTime": "2012-01-02T19:27:18.000Z",
            "observations": [
              {
                "id": "47375231",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-03T02:39:57.000Z",
                "endTime": "2012-01-03T02:41:57.000Z"
              },
              {
                "id": "47375232",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-03T02:39:55.000Z",
                "endTime": "2012-01-03T02:41:55.000Z"
              },
              {
                "id": "47375233",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-03T02:39:53.000Z",
                "endTime": "2012-01-03T02:41:53.000Z"
              },
              {
                "id": "47375234",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-03T02:39:51.000Z",
                "endTime": "2012-01-03T02:41:51.000Z"
              },
              {
                "id": "47375235",
                "domainName": "focal-observation",
                "behavior": "XX/",
                "beginTime": "2012-01-03T02:39:35.000Z",
                "endTime": "2012-01-03T02:41:35.000Z"
              },
              {
                "id": "47375236",
                "domainName": "focal-observation",
                "behavior": "RVA (SO)/",
                "beginTime": "2012-01-03T02:38:38.000Z",
                "endTime": "2012-01-03T02:40:38.000Z"
              },
              {
                "id": "47375237",
                "domainName": "focal-observation",
                "behavior": "MBT/",
                "beginTime": "2012-01-03T02:38:06.000Z",
                "endTime": "2012-01-03T02:40:06.000Z"
              },
              {
                "id": "47375238",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T02:37:32.000Z",
                "endTime": "2012-01-03T02:39:32.000Z"
              },
              {
                "id": "47375239",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T02:36:20.000Z",
                "endTime": "2012-01-03T02:38:20.000Z"
              },
              {
                "id": "47375240",
                "domainName": "focal-observation",
                "behavior": "FESE/FEFR/",
                "beginTime": "2012-01-03T02:35:38.000Z",
                "endTime": "2012-01-03T02:37:38.000Z"
              }
            ]
          },
          {
            "_id": "FS23020",
            "domainName": "focal-sample",
            "subjectId": "animal-Mona/",
            "beginTime": "2012-01-02T19:43:26.000Z",
            "endTime": "2012-01-02T20:03:26.000Z",
            "observations": [
              {
                "id": "47375221",
                "domainName": "focal-observation",
                "behavior": "AFV/",
                "beginTime": "2012-01-03T02:51:45.000Z",
                "endTime": "2012-01-03T02:53:45.000Z"
              },
              {
                "id": "47375222",
                "domainName": "focal-observation",
                "behavior": "MBT/",
                "beginTime": "2012-01-03T02:51:39.000Z",
                "endTime": "2012-01-03T02:53:39.000Z"
              },
              {
                "id": "47375223",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:50:55.000Z",
                "endTime": "2012-01-03T02:52:55.000Z"
              },
              {
                "id": "47375224",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:50:47.000Z",
                "endTime": "2012-01-03T02:52:47.000Z"
              },
              {
                "id": "47375225",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:50:05.000Z",
                "endTime": "2012-01-03T02:52:05.000Z"
              },
              {
                "id": "47375226",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:50:00.000Z",
                "endTime": "2012-01-03T02:52:00.000Z"
              },
              {
                "id": "47375227",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:49:07.000Z",
                "endTime": "2012-01-03T02:51:07.000Z"
              },
              {
                "id": "47375228",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:49:00.000Z",
                "endTime": "2012-01-03T02:51:00.000Z"
              },
              {
                "id": "47375229",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:48:03.000Z",
                "endTime": "2012-01-03T02:50:03.000Z"
              },
              {
                "id": "47375230",
                "domainName": "focal-observation",
                "behavior": "RPA (SO)/",
                "beginTime": "2012-01-03T02:47:45.000Z",
                "endTime": "2012-01-03T02:49:45.000Z"
              }
            ]
          }
        ]
      },
      {
        "_id": "AV21213",
        "domainName": "contact",
        "beginTime": "2012-01-02T16:37:44.000Z",
        "endTime": "2012-01-02T17:00:44.000Z",
        "taxon": "taxon-Saguinus",
        "remarks": "",
        "focals": [
        ]
      }
    ]
  };

diary.footprint = {
		type: 'LineString',
		coordinates:[
		],
	};


var i = 0,
	count = +process.argv[2];

function push(){
	db.get('mydoc')
		.then(function(doc){
			i++;

			if (i>=count) return stop();
			doc.footprint.coordinates.push([40, -73]);

			db.put(doc)
				.then(function(){
					push();
				});

		});
}

function stop(){
	db.get('mydoc')
		.then(function(doc){
//			console.log('final _rev: '+ doc._rev);
			ps.exec('du -sh ./'+dbName, function(err, res){
				var dbSize = res.match(/(.*)\t/)[1];
				fs.writeFileSync('test.json', JSON.stringify(doc));

				ps.exec('du -sh ./test.json', function(err, res){
					var fileSize = res.match(/(.*)\t/)[1];
					console.log(count + ' PUTS: db ' + dbSize + ' doc: ' +fileSize);
				});
			});
		});
}

diary._id = 'mydoc';
db.put(diary)
	.then(function(res){
		push();
	});



