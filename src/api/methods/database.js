const PouchDB = require('pouchdb')
let database = new PouchDB('create_database')

const getWalletAccount = (address) => {
  return new Promise((resolve, reject) => {
    database.get(address, function(err, doc) {
      if(err) {
        console.log(err)
        resolve(err)
      } else {
        console.log(doc)
        resolve(doc)
      }
    })
  })
}

const createWalletAccount = (user) => {
  return new Promise((resolve, reject) => {
    database.put(user, function(err, response) {
      if(err) {
        console.log(err)
        reject(err)
      } else {
        console.log('Document created Successfully')
        console.log(response)
        resolve(response)
      }
    })
  })
}

const updateWalletAccount = (address, user) => {
  return new Promise((resolve, reject) => {
    database.get(address, function (err, doc) {
      if (err) {
        console.log(err)
        reject(err)
      } else {
        database.put({ ...doc, user }, function (err, response) {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            console.log('Document updated Successfully')
            console.log(response)
            resolve(response)
          }
        })
      }
    })
  })
}


module.exports = { getWalletAccount, createWalletAccount, updateWalletAccount }