/**
 * Validates a portuguese license plate
 * @param {String} plateNumber
 */

export default function isValidLicensePlate(plateNumber) {
  if (typeof plateNumber !== 'string') return false
  if (
    !/(?!(([a-zA-Z]{2})-([a-zA-Z]{2})-(\d{2}))|(\d{2})-([a-zA-Z]{2})-([a-zA-Z]{2}))((\d{2})|([a-zA-Z]{2}))-((\d{2})|(\w{2}))-((\d{2})|(\w{2}))/g.test(
      plateNumber
    )
  )
    return false
  const matches = (plateNumber.match(/([a-zA-Z])\1{1}/g) || []).length
  return matches > 0 && matches <= 2
}
