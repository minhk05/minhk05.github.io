var admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: "firebase-adminsdk-fbsvc@minblogmain.iam.gserviceaccount.com",
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDP+62HoU4UnJ5v\nUiFacM4AhE/emvyfq2uFX/tfGxDPM/bJVoyyCj0UnRCdXebBFx7bPTxpsRCv0zCt\nWNsV4Bm5NRWMp5s+Simm9el9g9r11m2l75Neu2ttJFod6ri2aDRC347f2YaWNziH\nysT9U2nAoAW7JSYsweAJSV3cIUVD0+ZxUrxvpslG1T2GVyLkKVC3XURcd3lESV7l\nw7CgTFfCjSReU2y7R3JUgKhIVWLaD4Hq64LuK5XTf9a3q6K08c1HC86AvbvyW1QH\nL2uppESlH6Eg4u6XhdoPtOfZQkUgtY/f55X2HRwWr2AxzMBE+mZ00lKyBpwEPZWO\nqAjZwI0bAgMBAAECggEAB/HlyZoUWP44oSkChClt/SAQywChqNnMBC7L8/CdPkUO\nZteLDVwNxEVRtqk5IOQothhLQABXElhfcifESrwiT2xjM9nNON5tY+bd8gEA8sYr\nrxyNRR+ktWkflif6wWEOqgVPOGbfWMqoOqu4xbKThhu2zFTZdfk7/S7Tyo5szm/u\nqtxky6P+V3Yvxy635oXDPDCLWJRXOn+uCQ3TMZAmsS/zK4rADPbfnfpK+gW5igDg\nZW9nKT02CsqqyM9btyYsX3I1dbJ5LhX8pdvWkat9Mtn7D6qYcVI7pAhASGG3aXf7\niIV3EzfhCd02OnF+lUeEOl1aFpSElkTLw8st4vYf4QKBgQDo+WeS4kp4vkeEPK7F\n+GQQ7vwmLay+0BUmn94T+ohTdyUwGHhW73kZiHSLtnwlvoG6oHv3603CDNnj1TTS\nG5XS6FwQExZDtDGCDqyNobSfNtrE8GbI7ui0w5FR3PlFzTTAwdiBnPdsRPJrdoGs\nEMtoGnNxyLq1HlxSh74EPMBgoQKBgQDkifXvNg4J7f1QBxa9oZ4cDIFGJw1rX+pV\n9GmZpHPFKt+2JxWrOPkU9wEfqASJxuTPLw0pfqlXOhMmuy7Sy/zgfJaZKlMr5uvU\nIkjYDFPE5BoF/1Wi4XNgrnhTGI8qqgXyf3VtwMoJ1OHpkdtCI+ofcfvY/kym2xqS\nxza+TB1IOwKBgGEh+ujmqB4HV1Hu6v9nPHFC8qYITQmRQABGjxTNU6FY/4w555J3\nbYoTtmO5xbEG6Jei6YzH8jeBnCa9cbRYA/NXJWseSh4YNrv+2jqCvQfUmwmZIYGM\n+kDDeQcklllf4Sqsp1QC2bWuWVQsqIvQxL22qYM7KXzyF5PhPHwPyDWBAoGBALk9\n/iNcHDr+NcIlTNB+bMrtc+dqBh2PjEEJsILB4rjhTJ23xn+X2YWdxMJlDPCkT5iD\n2dZVfWtffmB5frWMdLd9JRCXVv0R2vuCoqrEKy4/ebx8v2wb88pdANjR4lHBqLpr\nh8JjbyBS9p69BAzzUXUVjf7P+U+R71MjuIK87Us7AoGBAIoN0IfryBgU2j8R/1z6\n5ecjF/nxiMqrInJW+d4KSfpeOv88pxu5bDi72U/h0Urhl0ZNbaijbDDMk8Vr5I7W\nFz/SjnYhrqSgSa0+0wegyxgRgyKaUUUHPf9TVEaUI9EPvATTqh9UpOW5LVjEhHR+\ncxW6bHnIhhxvJkwsK+KgvonP\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
      project_id: "minblogmain",
    }),
    databaseURL: "https://minblogmain-default-rtdb.firebaseio.com/",
  });
}

module.exports = admin.firestore();
