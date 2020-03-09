class Database {
	constructor(db) {
		this._db = db;
	}

	get(section) {
		return this._db[section]
	}

	find(section, id) {
		return this._db[section].filter(item => item.id === Number(id))[0];
	}
}

module.exports = Database;