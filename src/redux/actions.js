import axios from 'axios';
import { backendUrl } from '../config';
import { fetchNewData } from './fetchNewData';

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

const createTransaction = async (data) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.post(
			`${backendUrl}/transaction/create`,
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

const updateTransaction = async (transactionId, data) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.put(
			`${backendUrl}/transaction/${transactionId}`,
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

const deleteTransaction = async (transactionId) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.delete(
			`${backendUrl}/transaction/${transactionId}`,
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

const fetchIncomes = async () => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.get(`${backendUrl}/income`, {
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

const addIncome = async (data) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.post(
			`${backendUrl}/income/add`,
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

const fetchExpenses = async () => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.get(`${backendUrl}/expense`, {
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

const addExpense = async (data) => {
	try {
		const authToken = localStorage.getItem('authToken');
		const response = await axios.post(
			`${backendUrl}/expense/add`,
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

const logout = () => {
	localStorage.removeItem('authToken');
};

const triggerFetchNewDataFromDB = (dispatch) => {
	dispatch(fetchNewData());
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
	createTransaction,
	updateTransaction,
	deleteTransaction,
	logout,
	fetchIncomes,
	addIncome,
	fetchExpenses,
	addExpense,
	triggerFetchNewDataFromDB,
};
