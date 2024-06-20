import BoardItem from '../schema/board-item.js'

export const createBoard = async (req, res) => {
    try {
        if (req.body?.event?.pulseId) {
            let data = {
                pulseId: req.body.event.pulseId,
                pulseName: req.body.event.pulseName
            }
            if (req.body.event.columnValues) {
                if (req.body.event.columnValues?.email) {
                    data['email'] = req.body.event.columnValues?.email.text;
                }
                if (req.body.event.columnValues?.numbers) {
                    data['numbers'] = req.body.event.columnValues?.numbers.value;
                }
                if (req.body.event.columnValues?.status) {
                    data['status'] = req.body.event.columnValues?.status.label.text;
                }
            }
            await BoardItem.create(data);
        }

        res.status(200).send(req.body);
    } catch (ex) {
        console.log('error', ex);
    }

}

export const updateBoard = async (req, res) => {
    try {
        if (req.body.event && req.body.event.columnId) {
            const { pulseId, columnId, value } = req.body.event;
            let updateField = {};
            updateField[columnId] = value;
            await BoardItem.findOneAndUpdate(
                { pulseId },
                { $set: updateField },
                { new: true }
            );
            BoardItem.findOneAndUpdate({})
        }
        res.status(200).send(req.body);
    } catch (ex) {
        console.log('error', ex)
    }

}
