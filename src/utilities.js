import _ from 'lodash'

const KEY = process.env['REACT_APP_KEY']
const PAST_CLIENTS_KEY = 'PAST_CLIENTS'
const PAST_CLIENTS_PW = process.env[`REACT_APP_${KEY}_${PAST_CLIENTS_KEY}`]

function canUserViewClient (client) {
  if (!client.protected) {
    return true
  }
  let clientNameKey = getCleanClientName(client.name)
  if (client.protected && !client.recent) {
    clientNameKey = 'PAST_CLIENTS'
  }
  const permissions = getPermissionsData()
  const canView = permissions[clientNameKey]
  if (canView === true) {
    return true
  }
  return false
}

function canUserViewPastClients () {
  const permissions = getPermissionsData()
  if (permissions[PAST_CLIENTS_KEY] === true) {
    return true
  }
  return false
}

function doesPasswordMatch ({ client, password }) {
  let mustMatch = undefined
  if (client.protected && client.recent) {
    mustMatch = process.env[`REACT_APP_${KEY}_${getCleanClientName(client.name)}`]
  }
  else if (client.protected && !client.recent) {
    mustMatch = PAST_CLIENTS_PW
  }
  if (password === mustMatch) {
    return true
  }
  return false
}

function getCleanClientName (clientName) {
  return clientName.replace(/ /g, '').trim()
}

function getPermissionsData () {
  const permissions = localStorage.getItem(`${KEY}_canView`)
  if (!_.isEmpty(permissions)) {
    return JSON.parse(permissions)
  }
  return {}
}

function resetClientPermissions () {
  console.log('RESET PERMISSIONS')
  localStorage.setItem(`${KEY}_canView`, '{}')
}

function saveClientPermissions (client) {
  let permissions = getPermissionsData()
  if (client.recent) {
    const cleanClientName = getCleanClientName(client.name)
    permissions[getCleanClientName(client.name)] = true
  }
  else {
    permissions[PAST_CLIENTS_KEY] = true
  }
  localStorage.setItem(`${KEY}_canView`, JSON.stringify({ ...permissions }))
}

export {
  canUserViewClient,
  canUserViewPastClients,
  doesPasswordMatch,
  getCleanClientName,
  resetClientPermissions,
  saveClientPermissions,
}
