const yo = require('yo-yo')
const modalDialogCustom = require('./app/ui/modal-dialog-custom')

export default function publish(storage, fileProvider, fileManager, contract) {
    if (contract) {
        if (contract.metadata === undefined || contract.metadata.length === 0) {
            modalDialogCustom.alert('This contract may be abstract, may not implement an abstract parent\'s methods completely or not invoke an inherited contract\'s constructor correctly.')
        } else {}
    }
}