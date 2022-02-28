var imageViewer = {
	init: function() {
		_this = this
		$(function() {
			console.log(this)
			$("#btn-change").click(function(){
				console.log("asdf")
			});

		})
	},
	
	changeImage: function() {
		console.log(this)
		var index = Math.floor(Math.random() * this._images.length);
		console.log(index)
		$(".image-viewer img").attr({
		alt: this._images[index].name,
		src: 'images/' + this._images[index].file
		})
	},

/*	slideShow: function() {

		if ($(this).text() == '슬라이드쇼 시작') {
			$(this).text('슬라이드 쇼 중지')
			timer = setInterval(function() {
				var index = Math.floor(Math.random() * images.length);
				$(".image-viewer img").attr({
					alt: images[index].name,
					src: 'images/' + images[index].file
				});
			}, 3000)
		} else {
			$(this).text('슬라이드쇼 시작');
			clearInterval(timer);
		}
	},*/

_images: [{

	name : "국화",
		file : "Chrysanthemum.jpg"
	}, {
		name : "사막",
		file : "Desert.jpg"
	},

	{
		name : "수국",
		file : "Hydrangeas.jpg"
	},

	{
		name : "해파리",
		file : "Jellyfish.jpg"
	},

	{
		name : "코알라",
		file : "Koala.jpg"
	}, {
		name : "등대",
		file : "Lighthouse.jpg"
	},

	{
		name : "펭귄",
		file : "Penguins.jpg"
	},

	{
		name : "툴립",
		file : "Tulips.jpg"
	} ]

}