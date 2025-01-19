import axios from 'axios';
import { backendUrl } from '../config';

const registerUser = async (data) => {
	try {
		const response = await axios.post(
			`${backendUrl}/admin/register`,
			data
		);

		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const loginUser = async (data) => {
	try {
		const response = await axios.post(
			`${backendUrl}/admin/login`,
			data
		);
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const fetchCategories = async () => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.get(`${backendUrl}/category`, {
			headers: {
				authorization: `Bearer ${authToken}`,
			},
		});
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const createCategory = async (data) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.post(
			`${backendUrl}/category/create`,
			data,
			{
				headers: {
					authorization: `Bearer ${authToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const deleteCategory = async (categoryId) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.delete(
			`${backendUrl}/category/${categoryId}`,
			{
				headers: {
					authorization: `Bearer ${authToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const fetchTransactions = async () => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.get(`${backendUrl}/transaction`, {
			headers: {
				authorization: `Bearer ${authToken}`,
			},
		});
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const fetchAccounts = async () => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.get(`${backendUrl}/account`, {
			headers: {
				authorization: `Bearer ${authToken}`,
			},
		});
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const createAccount = async (data) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.post(
			`${backendUrl}/account/create`,
			data,
			{
				headers: {
					authorization: `Bearer ${authToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

const deleteAccount = async (accountId) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.delete(
			`${backendUrl}/account/${accountId}`,
			{
				headers: {
					authorization: `Bearer ${authToken}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		if (error.response && error.response.data) {
			throw error.response.data;
		} else {
			throw new Error('Network error or server not reachable');
		}
	}
};

export {
	registerUser,
	loginUser,
	fetchCategories,
	createCategory,
	deleteCategory,
	fetchTransactions,
	fetchAccounts,
	deleteAccount,
	createAccount,
};
