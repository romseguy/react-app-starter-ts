async function request(endpoint: any, params: any, method = "GET") {
	try {
		const options = {
			method,
			headers: {
				"Content-Type": "application/json",
			},
		};

		if (params) {
			if (method === "GET") {
				endpoint += "?" + objectToQueryString(params);
			} else {
				options.body = JSON.stringify(params);
			}
		}

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API}/${endpoint}`,
			options,
		);
		const result = await response.json();

		if (response.status !== 200) {
			return createApiError(result);
		}

		console.log(`/${endpoint}`, response.data);
		return result;
	} catch (error) {
		return createApiError({ error });
	}
}

function objectToQueryString(obj: any) {
	return Object.keys(obj)
		.map((key) => key + "=" + obj[key])
		.join("&");
}

function createApiError(error: any) {
	return {
		status: "error",
		message: error.message || "Unkown error",
	};
}

function get(endpoint: any, params: any) {
	return request(endpoint, params);
}

function post(endpoint: any, params: any) {
	return request(endpoint, params, "POST");
}

function update(endpoint: any, params: any) {
	return request(endpoint, params, "PUT");
}

function remove(endpoint: any, params: any) {
	return request(endpoint, params, "DELETE");
}

export default {
	get,
	post,
	update,
	remove,
	createApiError,
};
