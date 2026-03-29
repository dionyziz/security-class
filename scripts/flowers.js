fetch('https://sophron.latthi.com/wall_of_shame.html')
	.then(function(response) { return response.text(); })
	.then(function(html) {
		var list = document.createElement('ul');
		list.className = 'faces flowerfaces';
		var fragment = document.createElement('div');
		fragment.innerHTML = html;
		var items = fragment.querySelectorAll('li');
		items.forEach(function(e) {
			var h2 = e.querySelector('h2');
			if (h2) {
				var email = h2.textContent.replace(' [at] ', '@');
				var img = document.createElement('img');
				img.src = 'https://www.gravatar.com/avatar/' + md5(email);
				h2.insertBefore(img, h2.firstChild);
			}
			list.appendChild(e);
		});
		document.querySelector('.content').innerHTML = '';
		document.querySelector('.content').appendChild(list);
	})
	.catch(function() {
		document.querySelector('.content').textContent = 'Το Wall of Shame δεν είναι πλέον διαθέσιμο.';
	});
