<template name="art_content">
	<view>
		<scroll-view scroll-y class="DrawerPage">
		  <cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block>
			<block slot="content">{{article.art_title}}</block>
		  </cu-custom>
		  <!-- 标题 -->
		  <view class="grace-article-title grace-skeleton padding">{{article.art_title}}</view>
		  <!-- 作者信息 -->
		  <view class="grace-article-author-line padding-lr padding-bottom">
		      <view class="grace-article-author graceSkeleton grace-skeleton">
		          <image style="width: 60rpx;height: 60rpx;" :src="article.u_face" mode="aspectFill"></image>
		          <view class="author-name">{{article.u_name}}</view>
		      </view>
		      <view class="grace-skeleton">{{article.art_createtime}}</view>
		  </view>
	
		  <!-- 文章内容 -->
		  <view class="grace-article-contents padding-xl bg-white">
			  <rich-text class="text-sty" :nodes="article.content"></rich-text>
		  </view>
		</scroll-view>
	</view>
</template>

<script>

	export default {
		name: "art_content",
		data() {
			return {
				article : {
					'art_title': "php邮箱",
					'u_face':'../../static/16.bmp',
					'u_name': 'chen',
					'art_createtime': '2020.5.11',
					'content':"<h3>扩展安装</h3>"

+"<p>在phpstorm下 Terminal 执行语句</p>"

+"<p>```"
+"composer require phpmailer/phpmailer</p>"

+"<p>```</p>"

+"<h3>举例模板</h3>"

+"<p>```"
+"<?php"
+"// Import PHPMailer classes into the global namespace"
+"// These must be at the top of your script, not inside a function"
+"use PHPMailer\PHPMailer\PHPMailer;"
+"use PHPMailer\PHPMailer\Exception;</p>"

+"<p>// Load Composer's autoloader"
+"require 'vendor/autoload.php';</p>"

+"<p>// Instantiation and passing <code>true</code> enables exceptions"
+"$mail = new PHPMailer(true);</p>"

+"<p>try {"
+"    //Server settings"
+"    $mail->SMTPDebug = 2;                                       // 不开调试设置为0"
+"    $mail->isSMTP();                                            // Set mailer to use SMTP"
+"    $mail->Host       = 'smtp1.example.com;smtp2.example.com';  // 一或多个邮箱详情，例如smtp.163.com之类"
+"    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication"
+"    $mail->Username   = 'user@example.com';                     // SMTP 写自己的企业邮箱或者其它邮箱"
+"    $mail->Password   = 'secret';                               // SMTP password"
+"    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, 无其他要求便ssl"
+"    $mail->Port       = 587;                                    // TCP port to connect to ssl的端口465，其它去查找</p>"

+"<pre><code>//Recipients"
+"$mail-&gt;setFrom('from@example.com', 'Mailer');         // 发送邮箱与备注名  "
+"$mail-&gt;addAddress('joe@example.net', 'Joe User');     // 接受对象的邮箱以及名"
+"$mail-&gt;addAddress('ellen@example.com');               // Name is optional"
+"$mail-&gt;addReplyTo('info@example.com', 'Information');"
+"$mail-&gt;addCC('cc@example.com');"
+"$mail-&gt;addBCC('bcc@example.com');"

+"// Attachments"
+"$mail-&gt;addAttachment('/var/tmp/file.tar.gz');         // Add attachments"
+"$mail-&gt;addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name"

+"// Content"
+"$mail-&gt;isHTML(true);                                  // Set email format to HTML"
+"$mail-&gt;Subject = 'Here is the subject';           //这是邮件的title"
+"$mail-&gt;Body    = 'This is the HTML message body &lt;b&gt;in bold!&lt;/b&gt;'; //邮件的内容"
+"$mail-&gt;AltBody = 'This is the body in plain text for non-HTML mail clients'; //这个没必要写"

+"$mail-&gt;send();                                  //可以直接返回这个"
+"echo 'Message has been sent';"
+"</code></pre>"

+"<p>} catch (Exception $e) {"
+"    echo \"Message could not be sent. Mailer Error: {$mail->ErrorInfo}\";"
+"}</p>"

+"<p>```</p>"

+"<h3>简单实例</h3>"

+"<p>```</p>"

+"<p>use PHPMailer\PHPMailer\PHPMailer;  //这两个一般会自都导入的"
+"use PHPMailer\PHPMailer\Exception;</p>"

+"<p>function mailto($to, $title, $content)"
+"{"
+"    $mail = new PHPMailer(true);</p>"

+"<pre><code>try {"
+"    //Server settings"
+"    $mail-&gt;SMTPDebug = 0;                                       // Enable verbose debug output"
+"    $mail-&gt;CharSet = 'utf-8';"
+"    $mail-&gt;isSMTP();                                            // Set mailer to use SMTP"
+"    $mail-&gt;Host       = 'smtp.163.com';  // Specify main and backup SMTP servers"
+"    $mail-&gt;SMTPAuth   = true;                                   // Enable SMTP authentication"
+"    $mail-&gt;Username   = '13824560944@163.com';                     // SMTP username"
+"    $mail-&gt;Password   = 'jun.1999.qq520';                               // SMTP password"
+"    $mail-&gt;SMTPSecure = 'ssl';                                 // Enable TLS encryption, `ssl` also accepted "
+"    $mail-&gt;Port       = 465;                                    // TCP port to connect to"

+"    //Recipients"
+"    $mail-&gt;setFrom('13824560944@163.com', 'chen');"
+"    $mail-&gt;addAddress($to);     // Add a recipient"

+"    // Content"
+"      $mail-&gt;isHTML(true);   "                   
+"    $mail-&gt;Subject = $title;"
+"    $mail-&gt;Body    = $content;"
+"    return $mail-&gt;send();"
+"} catch (Exception $e) {"
+"	exception($mail-&gt;ErrorInfo,1001);}"
+"</code></pre>"
+"<p>}</p>"
+"<p>```</p>"
// +"					'content': "<div class='div-class' "
// +"					style='line-height: 60px;font-size:35px; color: red; text-align:center;'>   富文本输出</div>"
				
				}, //文章基础信息
				
			};
		},
		onLoad(option){
			console.log(option.artid);
			//��������id����ѯ��������
		},
		methods: {

		},
	}
</script>

<style>
	.page {height: 100vh;}
	.grace-article-title{margin:11px 12px; font-size:23px; line-height:1.5em; font-weight:700;}
	.grace-skeleton{background:#F1F2F3; border-radius:8px;line-height:28px;}
	.grace-article-author-line{margin:3px 12px; display:flex; flex-wrap:nowrap; justify-content:space-between;}
	.grace-article-author{display:flex; flex-wrap:nowrap;}
	.grace-article-author image{width:28px; height:28px; border-radius:100%;}
	.grace-article-author .author-name{line-height:28px; padding-left:11px;font-size: 17px;}
	.grace-article-contents{line-height: 3em;}
	.grace-article-contents .img-item{width:100%;}
	.grace-article-contents .img-item image{width:100%;}
	.grace-article-contents .text-item{margin:8px 12px; line-height:2.2em; font-size:16px; color:#2F2F2F;} 

</style>
