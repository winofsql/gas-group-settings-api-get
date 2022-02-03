function test1() {

  var sheet = SpreadsheetApp.getActiveSheet();
  var range;
  var val;

  // 内容のテスト用のグループ
  var groupSettings = AdminGroupsSettings.Groups.get('テスト用グループメールアドレス');
  var column = 4;
  
  var keys = Object.keys(groupSettings).sort();;
  for(var i in keys) {
    range = sheet.getRange(101, column);
    range.setValue( keys[i] );
    range = sheet.getRange(102, column);
    range.setValue( groupSettings[keys[i]] + " (s)" );

    column++;
    // Logger.log(keys[i] + ' : ' + groupSettings[keys[i]]);
  }

}
function test2() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range;
  var val;

  // 内容のテスト用のグループ
  var groupSettings = AdminGroupsSettings.Groups.get('テスト用グループメールアドレス');
  var column = 4;
  
  var keys = Object.keys(groupSettings).sort();
  for(var i in keys) {
    range = sheet.getRange(103, column);
    range.setValue( keys[i] );
    range = sheet.getRange(104, column);
    range.setValue( groupSettings[keys[i]] + " (s)" );

    range = sheet.getRange(102, column);
    val = range.getValue().toString();

    range = sheet.getRange(106, column);
    range.setValue( "" );

    if ( val != groupSettings[keys[i]] + " (s)" ) {
      range.setValue( "✖" );
    }


    column++;
    // Logger.log(keys[i] + ' : ' + groupSettings[keys[i]]);
  }
  
}
function myFunction() {

  // 現在利用中のシート
  var sheet = SpreadsheetApp.getActiveSheet();
  var range;
  var val;
  var column;
  var row;
  var key_value;

  var groupSettings;
  
  for( row = 1; row < 100; row++ ) {

    // グループ表示名の取得
    range = sheet.getRange(row, 1);
    val = range.getValue().toString();
    if ( val == "" ) {
      // 読み飛ばし
      continue;
    }

    // 対象グループアドレスより設定一覧を取得
    range = sheet.getRange(row, 2);
    val = range.getValue().toString();
    Logger.log( val );
    //val = "language";
    groupSettings = AdminGroupsSettings.Groups.get( val + '@ドメイン');

    // Logger.log( groupSettings["enableCollaborativeInbox"] );

    // 【共同トレイ】
    val = "???";
    if ( groupSettings["enableCollaborativeInbox"] == "true" ) {
      val = "〇";
    }
    else {
      val = "✖";
    }
    range = sheet.getRange(row, 4);
    range.setValue( val );

    // 【会話閲覧】
    // ANYONE_CAN_VIEW ( WEB )
    // ALL_IN_DOMAIN_CAN_VIEW ( 組織 )
    // ALL_MEMBERS_CAN_VIEW ( メンバー )
    // ALL_MANAGERS_CAN_VIEW ( マネージャ )
    // ALL_OWNERS_CAN_VIEW ( オーナー )    
    Logger.log( groupSettings["whoCanViewGroup"] );
    key_value = groupSettings["whoCanViewGroup"]

    val = "???";
    if ( key_value == "ANYONE_CAN_VIEW" ) {
      val = "WEB";
    }
    if ( key_value == "ALL_IN_DOMAIN_CAN_VIEW" ) {
      val = "組織";
    }
    if ( key_value == "ALL_MEMBERS_CAN_VIEW" ) {
      val = "メンバー";
    }
    if ( key_value == "ALL_MANAGERS_CAN_VIEW" ) {
      val = "マネージャ";
    }
    if ( key_value == "ALL_OWNERS_CAN_VIEW" ) {
      val = "オーナー";
    }
    range = sheet.getRange(row, 9);
    range.setValue( val );

    // 【投稿】
    // NONE_CAN_POST ( 不可 )
    // ALL_MANAGERS_CAN_POST ( マネージャ )
    // ALL_MEMBERS_CAN_POST ( メンバー )
    // ALL_OWNERS_CAN_POST ( オーナー )
    // ALL_IN_DOMAIN_CAN_POST ( 組織 )
    // ANYONE_CAN_POST ( WEB )
    // Logger.log( groupSettings["whoCanPostMessage"] );
    key_value = groupSettings["whoCanPostMessage"]
    val = "???";
    if ( key_value == "NONE_CAN_POST" ) {
      val = "不可";
    }
    if ( key_value == "ALL_MANAGERS_CAN_POST" ) {
      val = "マネージャ";
    }
    if ( key_value == "ALL_MEMBERS_CAN_POST" ) {
      val = "メンバー";
    }
    if ( key_value == "ALL_OWNERS_CAN_POST" ) {
      val = "オーナー";
    }
    if ( key_value == "ALL_IN_DOMAIN_CAN_POST" ) {
      val = "組織";
    }
    if ( key_value == "ANYONE_CAN_POST" ) {
      val = "WEB";
    }
    range = sheet.getRange(row, 10);
    range.setValue( val );

    // 【メンバ一覧】
    // ALL_IN_DOMAIN_CAN_VIEW ( 組織 )
    // ALL_MEMBERS_CAN_VIEW ( メンバー )
    // ALL_MANAGERS_CAN_VIEW ( マネージャ )
    // ALL_OWNERS_CAN_VIEW ( オーナー )
    Logger.log( groupSettings["whoCanViewMembership"] );
    key_value = groupSettings["whoCanViewMembership"]
    val = "???";
    if ( key_value == "ALL_IN_DOMAIN_CAN_VIEW" ) {
      val = "組織";
    }
    if ( key_value == "ALL_MEMBERS_CAN_VIEW" ) {
      val = "メンバー";
    }
    if ( key_value == "ALL_MANAGERS_CAN_VIEW" ) {
      val = "マネージャ";
    }
    if ( key_value == "ALL_OWNERS_CAN_VIEW" ) {
      val = "オーナー";
    }
    range = sheet.getRange(row, 11);
    range.setValue( val );    

    // 【差出人欄アドレス】
    // DEFAULT_SELF ( 投稿者 )
    // GROUP ( グループ )
    // Logger.log( groupSettings["defaultSender"] );
    key_value = groupSettings["defaultSender"]
    val = "???";
    if ( key_value == "DEFAULT_SELF" ) {
      val = "投稿者";
    }
    if ( key_value == "GROUP" ) {
      val = "グループ";
    }
    range = sheet.getRange(row, 22);
    range.setValue( val );    


  }  
}
