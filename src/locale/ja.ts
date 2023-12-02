import { Catalog, msg } from "@hi18n/core";
import type { Vocabulary } from ".";

export default new Catalog<Vocabulary>("ja", {
    // 凡例: "翻訳ID": msg(翻訳文字列),
    // 共通
    "success": msg("成功"),
    "info": msg("情報"),
    "warn": msg("警告"),
    "error": msg("エラー"),
    "enabled": msg("有効"),
    "disabled": msg("無効"),
    "peaple": msg("人"),
    "unlimited": msg("無制限"),
    "executing": msg("実行中"),
    "stoping": msg("停止中"),
    "userID": msg("ユーザーID"),
    "displayName": msg("表示名"),
    "nickname": msg("ニックネーム"),
    "unset": msg("未設定"),
    "role": msg("ロール"),
    "accountCreationDateTime": msg("アカウント作成日"),
    "serverJoinDateTime": msg("サーバー参加日"),
    "authority": msg("権限"),
    "profile": msg("プロフィール"),
    "blank": msg("未記入"),
    "grouwing": msg("せいちょーちう。"),
    "toFirst": msg("最初へ"),
    "toPrevious": msg("前へ"),
    "delete": msg("削除"),
    "toNext": msg("次へ"),
    "toLast": msg("最後へ"),
    "selectPage": msg("ページを選択してください。"),
    "operationTimeOut": msg("{target}の操作がタイムアウトしました。"),
    "footer/page": msg("ページ：{page}"),
    "rps/selectMenu/selectHand": msg("出す手を選択してください。"),
    "rps/rock": msg("グー"),
    "rps/paper": msg("パー"),
    "rps/scissors": msg("チョキ"),

    // Log
    "log/keyvs/set": msg("keyvを設定しました。namespace：{namespace}"),
    "log/keyvs/reset": msg("keyvをリセットしました。namespace：{namespace}"),
    "log/keyvs/delete": msg("keyvを削除しました。namespace：{namespace}"),
    "log/bot/login": msg("{name}がログインしました。"),
    "log/bot/login/faild": msg("ログインに失敗しました。\n詳細：\n{error}"),
    "log/bot/vcAutoCreation/start": msg("VCの自動作成機能を開始しました。サーバー：{guild}"),
    "log/bot/vcAutoCreation/stop": msg("VCの自動作成機能を停止しました。サーバー：{guild}"),
    "log/bot/vcAutoCreation/channelCreate": msg("VCの自動作成機能でチャンネルを作成しました。\nサーバー：{guild}\nチャンネル：{channel}"),
    "log/bot/vcAutoCreation/channelDelete": msg("VCの自動作成機能でチャンネルを削除しました。\nサーバー：{guild}\nチャンネル：{channel}"),
    "log/bot/vcAutoCreation/error": msg("VCの自動管理機能でエラーが発生しました。\nサーバー：{guild}\n詳細：\n{error}"),
    "log/bot/bumpReminder/start": msg("Bumpのリマインド機能を開始しました。サーバー：{guild}"),
    "log/bot/bumpReminder/stop": msg("Bumpのリマインド機能を停止しました。サーバー：{guild}"),
    "log/bot/bumpReminder/detectBump": msg("Bumpのリマインド機能を実行中にBumpを検知しました。サーバー：{guild}"),
    "log/bot/bumpReminder/setRemind": msg("Bumpのリマインドを設定しました。サーバー：{guild}"),
    "log/bot/bumpReminder/cancelRemind": msg("Bumpのリマインドをキャンセルしました。サーバー：{guild}"),
    "log/bot/bumpReminder/remind": msg("Bumpのリマインドをしました。サーバー：{guild}"),
    "log/bot/event/set": msg("Botのイベントを設定しました。イベント名：{name}"),
    "log/bot/command/register/pre": msg("スラッシュコマンドを登録します。"),
    "log/bot/command/register/complated": msg("スラッシュコマンドの登録が完了しました。"),
    "log/bot/command/register/faild": msg("スラッシュコマンドの登録に失敗しました。\n詳細：\n{error}"),
    "log/bot/command/notFound": msg("一致するコマンドが見つかりませんでした。コマンド：{command}"),
    "log/bot/command/execute/success": msg("スラッシュコマンドの実行に成功しました。\nコマンド：{command}\nサーバー：{guild}"),
    "log/bot/command/execute/faild": msg("スラッシュコマンドの実行に失敗しました。\nコマンド：{command}\nサーバー：{guild}\n詳細：\n{error}"),
    "log/bot/command/autocomplete/undefined": msg("autocomplateが未定義です。\nコマンド：{command}"),
    "log/bot/command/autocomplete/success": msg("autocomplateの実行に成功しました。コマンド：{command}\nサーバー：{guild}"),
    "log/bot/command/autocomplete/faild": msg("autocomplateの実行に失敗しました。コマンド：{command}\nサーバー：{guild}\n詳細：\n{error}"),
    "log/bot/command/modal/notFound": msg("一致するmodalが見つかりませんでした。modal：{modal}"),
    "log/bot/command/modal/success": msg("modalの実行に成功しました。modal：{modal}\nサーバー：{guild}"),
    "log/bot/command/modal/faild": msg("modalの実行に失敗しました。modal：{modal}\nサーバー：{guild}\n詳細：\n{error}"),

    // Bot
    "bot/config/reset": msg("Botの設定をリセットしました。"),
    "bot/vcAutoCreation/notSetTriggerVC": msg("VCの自動作成機能のトリガーチャンネルが設定されていません。\nVCの自動作成機能を開始し直してください。"),
    "bot/vcAutoCreation/error": msg("VCの自動管理機能でエラーが発生しました。\n詳細：\n{error}"),
    "bot/bumpReminder/bumpMessage": msg("{time}({diffCurTime})にBumpが可能になります。"),
    "bot/bumpReminder/button/doRemind": msg("リマインドする"),
    "bot/bumpReminder/button/doNotRemind": msg("リマインドしない"),
    "bot/bumpReminder/setRemind": msg("Bumpのリマインドを設定しました。"),
    "bot/bumpReminder/cancelRemind": msg("Bumpのリマインドをキャンセルしました。"),
    "bot/bumpReminder/remindMessage": msg("{mentionRole}{mentionUsers}\nBump出来るよ！"),

    // コマンド共通
    "bot/command/cooldown": msg("このコマンドは{cooldown}秒後に使用可能です。"),
    "bot/command/unsetDestAfk": msg("移動先の休止チャンネルが設定されていません。"),
    "bot/command/notFoundDestAfk": msg("移動先に設定されいてる休止チャンネルが見つかりませんでした。\n移動先を設定し直してください。"),
    "bot/command/notFoundUser": msg("{user}が見つかりませんでした。"),
    "bot/command/unsetProfChannel": msg("プロフィールチャンネルが設定されていません。"),
    "bot/command/notFoundProfChannel": msg("設定されたプロフィールチャンネルが見つかりませんでした。\nプロフィールチャンネルを設定し直してください。"),
    "bot/command/notFoundChannel": msg("チャンネルが見つかりませんでした。\nチャンネルID：{channelID}"),

    // コマンド固有
    "bot/command/echo/description": msg("入力したテキストをそのまま返します。"),
    "bot/command/echo/textOption/description": msg("テキストを入力してください。"),
    "bot/command/afk/description": msg("ユーザーを休止チャンネルに移動させます。"),
    "bot/command/afk/userOption/description": msg("移動させるユーザーを入力してください。"),
    "bot/command/afk/success": msg("{user}を{channel}に移動させました。"),
    "bot/command/afk/alreadyAfk": msg("{user}は既に{channel}に居ます。"),
    "bot/command/afk/faild": msg("{user}の移動に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-afk/description": msg("休止チャンネルを設定します。"),
    "bot/command/cnf-afk/set-dest/description": msg("移動先の休止チャンネルを設定します。"),
    "bot/command/cnf-afk/set-dest/channelOption/description": msg("移動先に設定する休止チャンネルを入力してください。"),
    "bot/command/cnf-afk/set-dest/success": msg("移動先の休止チャンネルを{channel}に設定しました。"),
    "bot/command/cnf-afk/set-dest/faild": msg("移動先の休止チャンネルの設定に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-afk/get-dest/description": msg("移動先の休止チャンネルを取得します。"),
    "bot/command/cnf-afk/get-dest/success": msg("移動先の休止チャンネルは{channel}です。"),
    "bot/command/cnf-afk/get-dest/faild": msg("移動先の休止チャンネルの取得に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/description": msg("VCの自動作成機能を設定します。"),
    "bot/command/vac/start/description": msg("VCの自動作成機能を開始します。"),
    "bot/command/vac/start/success": msg("VCの自動作成機能を開始しました。"),
    "bot/command/vac/start/faild": msg("VCの自動作成機能の開始に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/start/createTriggerVCFaild": msg("VCの自動作成用のトリガーチャンネルの作成に失敗しました。"),
    "bot/command/vac/start/setTriggerVCFaild": msg("VCの自動作成用のトリガーチャンネルの登録に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/start/alreadyStarting": msg("VCの自動作成機能は既に開始しています。"),
    "bot/command/vac/stop/description": msg("VCの自動作成機能を停止します。"),
    "bot/command/vac/stop/success": msg("VCの自動作成機能を停止しました。"),
    "bot/command/vac/stop/faild": msg("VCの自動作成機能の停止に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/stop/getTriggerVCFaild": msg("自動作成用のトリガーチャンネルの取得に失敗しました。\n詳細：\n{error}"),
    "bot/command/vac/stop/triggerVCNotFound": msg("自動作成用のトリガーチャンネルが見つかりませんでした。"),
    "bot/command/vac/stop/alreadyStoping": msg("VCの自動作成機能は既に停止しています。"),
    "bot/command/vac/status/description": msg("VCの自動作成機能の状態を表示します。"),
    "bot/command/vac/status/success": msg("VCの自動作成機能は{status}です。"),
    "bot/command/vac/status/faild": msg("VCの自動作成機能の状態の取得に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-vc/description": msg("VCの設定をします。"),
    "bot/command/cnf-vc/notInVC": msg("設定するVCに入室中に実行してください。"),
    "bot/command/cnf-vc/rename/description": msg("VCの名前を変更します。"),
    "bot/command/cnf-vc/rename/nameOption/description": msg("変更する名前を入力してください。"),
    "bot/command/cnf-vc/rename/success": msg("{channel}の名前を{name}に変更しました。"),
    "bot/command/cnf-vc/rename/faild": msg("VCの名前の変更に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-vc/user-limit/description": msg("VCの人数制限を設定します。"),
    "bot/command/cnf-vc/user-limit/userLimitOption/description": msg("人数制限を入力してください。(0~99 0：無制限)"),
    "bot/command/cnf-vc/user-limit/success": msg("{channel}の人数制限を{userLimit}に変更しました。"),
    "bot/command/cnf-vc/user-limit/faild": msg("{channel}の人数制限の変更に失敗しました。\n詳細：\n{error}"),
    "bot/command/cnf-prof-ch/description": msg("プロフィールを設定をします。"),
    "bot/command/cnf-prof-ch/set-ch/description": msg("プロフィールチャンネルを設定します。"),
    "bot/command/cnf-prof-ch/set-ch/channelOption/description": msg("プロフィールチャンネルを入力してください。"),
    "bot/command/cnf-prof-ch/set-ch/success": msg("プロフィールチャンネルを{channel}に設定しました。"),
    "bot/command/cnf-prof-ch/get-ch/description": msg("プロフィールチャンネルを取得します。"),
    "bot/command/cnf-prof-ch/get-ch/success": msg("プロフィールチャンネルを{channel}に設定しました。"),
    "bot/command/user-info/description": msg("ユーザーの情報を表示します。"),
    "bot/command/user-info/normal/description": msg("指定されたユーザーの情報を表示します。"),
    "bot/command/user-info/normal/userOption/description": msg("情報を表示するユーザーを入力してください。"),
    "bot/command/user-info/success": msg("ユーザー情報の取得に成功しました。"),
    "bot/command/user-info/vc-members/description": msg("VCに参加しているメンバーの情報を表示します。"),
    "bot/command/user-info/vc-members/notInVC": msg("VCに入室中に実行してください。"),
    "bot/command/cnf-bump-reminder/description": msg("Bumpのリマインド機能をを設定します。"),
    "bot/command/cnf-bump-reminder/start/description": msg("Bumpのリマインド機能を開始します。"),
    "bot/command/cnf-bump-reminder/start/success": msg("Bumpのリマインド機能を開始しました。"),
    "bot/command/cnf-bump-reminder/stop/description": msg("Bumpのリマインド機能を停止します。"),
    "bot/command/cnf-bump-reminder/stop/success": msg("Bumpのリマインド機能を停止しました。"),
    "bot/command/cnf-bump-reminder/set-mention/description": msg("Bumpの通知時にメンションするロールを設定します。"),
    "bot/command/cnf-bump-reminder/set-mention/roleOption/description": msg("メンションするロールを入力してください。(未指定の場合は無効になります。)"),
    "bot/command/cnf-bump-reminder/set-mention/success": msg("Bumpの通知時にメンションするロールを{role}に設定しました。"),
    "bot/command/cnf-bump-reminder/set-mention/notMentionable": msg("メンションできないロールは設定できません。"),
    "bot/command/cnf-bump-reminder/status/description": msg("Bumpのリマインド機能の状態を表示します。"),
    "bot/command/cnf-bump-reminder/status/success": msg("Bumpのリマインド機能は{status}です。\nメンションするロールは{mentionRole}に設定されています。"),
    "bot/command/send-text/description": msg("テキストメッセージを送信します。"),
    "bot/command/send-text/modal/title": msg("テキストメッセージを送信"),
    "bot/command/send-text/notFoundChannel": msg("送信するチャンネルが見つかりませんでした。"),
    "bot/command/send-text/success": msg("{channel}にテキストメッセージを送信しました。"),
    "bot/command/send-text/channelOption/Description": msg("送信するチャンネルを指定してください。(未指定時は現在のチャンネルに送信)"),
    "bot/command/send-text/modal/textInput/placeholder": msg("送信するテキストを入力してください。"),
    "bot/command/game/description": msg("私とゲームをするコマンドです。"),
    "bot/command/game/rps/description": msg("じゃんけんをします。"),
    "bot/command/game/rps/ready": msg("最初はグー！じゃんけん..."),
    "bot/command/game/rps/result": msg("ぽんっ！\nあなた：{userHand}\n私：{botHand}"),
    "bot/command/game/rps/botWin": msg("やったー！勝ったよ！\n褒めて褒めてー！！！"),
    "bot/command/game/rps/botDraw": msg("あいこだね！\nもう一回！"),
    "bot/command/game/rps/botLose": msg("えーん💦 負けちゃった…\nまた遊ぼうね！"),
    "bot/command/game/rps/timeout": msg("待ちくたびれちゃった…\nまたね！👋🏻"),
});