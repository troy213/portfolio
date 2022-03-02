const crypto = require('crypto')

const iv = crypto.randomBytes(16)

const aesEncrypt = (keyLength, method, data, key) => {
  keyLength = String(keyLength).toLowerCase()
  method = String(method).toLowerCase()
  data = String(data)
  key = String(key).toLowerCase()

  //check AES key length
  let encryptionKey
  try {
    if (keyLength === '128') {
      if (key.length > 16) {
        encryptionKey = key.slice(0, 16)
      } else {
        encryptionKey = String(key).padEnd(16, 0)
      }
    } else if (keyLength === '192') {
      if (key.length > 24) {
        encryptionKey = key.slice(0, 24)
      } else {
        encryptionKey = String(key).padEnd(24, 0)
      }
    } else if (keyLength === '256') {
      if (key.length > 32) {
        encryptionKey = key.slice(0, 32)
      } else {
        encryptionKey = String(key).padEnd(32, 0)
      }
    } else {
      throw `There is no AES-${keyLength}`
    }
  } catch (err) {
    console.log(err)
    return
  }

  //check AES method CBC or GCM
  let cipher
  if (method === 'cbc' || method === 'gcm') {
    cipher = crypto.createCipheriv(
      `aes-${keyLength}-${method}`,
      encryptionKey,
      iv
    )
    let encrypted = cipher.update(data)
    encrypted = Buffer.concat([encrypted, cipher.final()])
    if (method === 'cbc') {
      return {
        iv: iv.toString('base64'),
        encryptedData: encrypted.toString('base64'),
      }
    } else if (method === 'gcm') {
      return {
        iv: iv.toString('base64'),
        encryptedData: encrypted.toString('base64'),
        authTag: cipher.getAuthTag(),
      }
    }
  } else {
    console.log(`AES ${method} method is not available in this module`)
    return
  }
}

const aesDecrypt = (keyLength, method, data, key) => {
  keyLength = String(keyLength).toLowerCase()
  method = String(method).toLowerCase()
  key = String(key).toLowerCase()

  let iv = Buffer.from(data.iv, 'base64')
  let encryptedText = Buffer.from(data.encryptedData, 'base64')

  //check AES key length
  let decryptionKey
  try {
    if (keyLength === '128') {
      if (key.length > 16) {
        decryptionKey = key.slice(0, 16)
      } else {
        decryptionKey = String(key).padEnd(16, 0)
      }
    } else if (keyLength === '192') {
      if (key.length > 24) {
        decryptionKey = key.slice(0, 24)
      } else {
        decryptionKey = String(key).padEnd(24, 0)
      }
    } else if (keyLength === '256') {
      if (key.length > 32) {
        decryptionKey = key.slice(0, 32)
      } else {
        decryptionKey = String(key).padEnd(32, 0)
      }
    } else {
      throw `There is no AES-${keyLength}`
    }
  } catch (err) {
    console.log(err)
    return
  }

  //check AES method CBC or GCM
  let decipher
  if (method === 'cbc' || method === 'gcm') {
    try {
      decipher = crypto.createDecipheriv(
        `aes-${keyLength}-${method}`,
        decryptionKey,
        iv
      )
      if (method === 'gcm') decipher.setAuthTag(data.authTag)
      let decrypted = decipher.update(encryptedText)
      decrypted = Buffer.concat([decrypted, decipher.final()])

      return decrypted.toString()
    } catch (err) {
      console.log(`FATAL ERROR: can't dechiper the encryption`)
      return ''
    }
  } else {
    console.log(`AES ${method} method is not available in this module`)
    return ''
  }
}

module.exports = { aesEncrypt, aesDecrypt }
