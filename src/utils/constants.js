const FILE_MANAGER_CONFIG = Object.freeze({
  ownerAddress: '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
  contractAddress: '0xb4736f4bc8527bc44edBba83DD152858241B837a',
  ethNodePoint: 'https://sepolia.infura.io/v3/e43d53efdbcd4b859f45dd09c6787d3c',
  contractAbi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'uploader',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'fileId',
          type: 'uint256',
        },
      ],
      name: 'FileRemoved',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'fileId',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'fileName',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'fileType',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'fileHash',
          type: 'string',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'fileSize',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'uploadTime',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'uploader',
          type: 'address',
        },
      ],
      name: 'FileUploaded',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_nodeAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_initialStorage',
          type: 'uint256',
        },
      ],
      name: 'addNode',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'allNodes',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_nodeAddress',
          type: 'address',
        },
        {
          internalType: 'string',
          name: '_fileId',
          type: 'string',
        },
      ],
      name: 'deleteChunkInNode',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_fileId',
          type: 'uint256',
        },
      ],
      name: 'deleteFile',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_chunkSize',
          type: 'uint256',
        },
      ],
      name: 'findAvailableNode',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllNodes',
      outputs: [
        {
          internalType: 'address[]',
          name: '',
          type: 'address[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_nodeAddress',
          type: 'address',
        },
      ],
      name: 'getNodeByAddress',
      outputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'nodeAddress',
              type: 'address',
            },
            {
              internalType: 'uint256',
              name: 'availableStorage',
              type: 'uint256',
            },
          ],
          internalType: 'struct NodeManager.Node',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'maxChunkSize',
      outputs: [
        {
          internalType: 'uint104',
          name: '',
          type: 'uint104',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'nodes',
      outputs: [
        {
          internalType: 'address',
          name: 'nodeAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'availableStorage',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'numMaxChunksDuplication',
      outputs: [
        {
          internalType: 'uint104',
          name: '',
          type: 'uint104',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_nodeAddress',
          type: 'address',
        },
        {
          internalType: 'string',
          name: '_fileId',
          type: 'string',
        },
      ],
      name: 'retrieveChunkInNode',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '_fileId',
          type: 'uint256',
        },
      ],
      name: 'retrieveFile',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_nodeAddress',
          type: 'address',
        },
        {
          internalType: 'string',
          name: '_chunk',
          type: 'string',
        },
      ],
      name: 'storeChunkInNode',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'storeFile',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_fileHash',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: '_uniqueId',
          type: 'uint256',
        },
      ],
      name: 'storeFileHash',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_fileName',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_fileType',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_fileHash',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_fileEncoding',
          type: 'string',
        },
        {
          internalType: 'uint256',
          name: '_uniqueId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: '_fileSize',
          type: 'uint256',
        },
      ],
      name: 'storeFileMetadata',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_nodeAddress',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_newStorage',
          type: 'uint256',
        },
      ],
      name: 'updateAvailableStorage',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
});

module.exports = { FILE_MANAGER_CONFIG };
