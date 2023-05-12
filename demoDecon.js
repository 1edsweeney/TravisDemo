/**
 * 
 */
 	 const swellGuy = {
	  name: 'SpongeBob',
	  middleName: 'Square',
	  nickname: 'squarething',
	  fullName: 'SpongeBob Squarepants'
	};
	var { name, middleName, nickname, fullName } = swellGuy;
	
	console.log("One swellguy old nickname is " + nickname );
	
	nickname = 'newnick';
	
	swellGuy.nickname = nickname;
	
	console.log("One swellguy new nickname is " + swellGuy.nickname );
	console.log("One swellguy is " + fullName );