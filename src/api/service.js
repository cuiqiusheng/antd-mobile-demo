
//export const serviceUrl = "http://zhouzhong.top:8080";
export const serviceUrl = "https://www.easy-mock.com/mock/597b0663a1d30433d840d837/czd";

export const getGlobalHeader = () => {
	return {
		lon:"",
		lat:"",
		device:"",
		token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkZXZpY2VOdW1iZXIiOiIxNTAwMTk2ODE3NSIsImlzcyI6InJlc3RhcGl1c2VyIiwiYXVkIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJleHAiOjE1MDE3NDIwMTIsIm5iZiI6MTUwMTU2OTIxMn0.tkmKHs6XQJjZC-H4fT0eyo57TwgUBsjQrKW9RF8ffq8"};
};

export const setLocalData = (key, data) => {
	if (typeof (data) === 'object')
		localStorage.setItem(key, JSON.stringify(data));
	else
		localStorage.setItem(key, data);
};

export const getLocalData = (key) => {
	let value = null;
	try {
		value = JSON.parse(localStorage.getItem(key));
	}
	catch (err) {
		value = localStorage.getItem(key);
	}
	return value;
};

