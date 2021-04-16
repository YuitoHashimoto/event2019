$(function(){
	
	// カウントダウン
	// let area_count = $('.countdown');
	let area_day = $('.days .time');
	let area_hrs = $('.hours .time');
	let area_min = $('.minutes .time');

	// 開催日
	const targetDay = new Date('2019/09/06 13:00');
	// 終了時間
	const endDay = new Date('2019/09/07 16:30');

	// カウントダウン関数
	let counts = ( today = new Date() ) => {
		
		const period_ms = targetDay - today;
		const ms2day = (24*60*60*1000);

		// 残り日差
		let remainDay = Math.floor( period_ms / ms2day );

		// 切り捨てた日差 * 24 = 残り時差
		let remainHrs = Math.floor( ( ( period_ms / ms2day ) - remainDay ) * 24 ) ;

		// 切り捨てた時差 * 60 = 残り分差
		let remainMin = Math.floor( ( ( ( ( period_ms / ms2day ) - remainDay ) * 24 ) - remainHrs ) * 60 ) ;
		
		if (period_ms > 0) {
			area_day . text( remainDay );
			area_hrs . text( remainHrs );
			area_min . text( remainMin );
		}
		// else if ( endDay - today < 0 ){
		// 	area_count . html( "<span>ご来場ありがとうございました！</span>" );
		// }
		// else {
		// 	area_count . html( "<span>現在開催中です！</span>");
		// }
	};

	// カウントダウン発火
	counts();
	setInterval( function(){ counts() }, 1000 );
});