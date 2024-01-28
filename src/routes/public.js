const { check, validationResult } = require('express-validator');
const multer = require('multer');
const express = require('express');
const { Web3 } = require('web3');
const {
  prepareFileForStoring,
  chunkBase64String,
  getFileHash,
  getBufferFromArr,
  storeChunkInNodes,
} = require('../utils/helpers');
const { FILE_MANAGER_CONFIG } = require('../utils/constants');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

//@route POST api/storeFile
//desc - Post stores file
router.post('/storeFile', upload.single('file'), async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const web3 = new Web3(FILE_MANAGER_CONFIG.ethNodePoint); // Update with your Ethereum node URL
    const fileStorageContract = new web3.eth.Contract(
      FILE_MANAGER_CONFIG.contractAbi,
      FILE_MANAGER_CONFIG.contractAddress
    );

    const file = req.file;
    const { originalname, size, encoding } = file;

    const b64FileContent = await prepareFileForStoring(file.path);
    const avgChunkSize = Number(await fileStorageContract.methods.maxChunkSize().call());
    const maxNumChunkDuplication = Number(await fileStorageContract.methods.numMaxChunksDuplication().call());

    const chunkArr = chunkBase64String(b64FileContent, avgChunkSize);

    const getStorageNodes = await fileStorageContract.methods.storeFileInNodes(chunkArr).call();

    const chunksBuffer = getBufferFromArr(chunkArr);

    const fileHash = getFileHash(chunksBuffer);

    console.log('fileBuffer', b64FileContent, chunksBuffer, avgChunkSize, maxNumChunkDuplication);

    res.send('Success');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
