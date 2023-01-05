import { Cell, Slice, Address, Builder, beginCell, ComputeError, TupleItem, TupleReader, Dictionary, contractAddress, ContractProvider, Sender, Contract, ContractABI } from 'ton-core';
import { ContractSystem, ContractExecutor } from 'ton-emulator';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'cell', cell: source.code });
    __tuple.push({ type: 'cell', cell: source.data });
    return __tuple;
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Cell;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw);
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    const _bounced = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.bounced ? -1n : 0n });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.sender).endCell() });
    __tuple.push({ type: 'int', value: source.value });
    __tuple.push({ type: 'slice', cell: source.raw });
    return __tuple;
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null) {
            b_0.storeBit(true);
            b_0.storeRef(src.body);
        } else {
            b_0.storeBit(false);
        }
        if (src.code !== null) {
            b_0.storeBit(true);
            b_0.storeRef(src.code);
        } else {
            b_0.storeBit(false);
        }
        if (src.data !== null) {
            b_0.storeBit(true);
            b_0.storeRef(src.data);
        } else {
            b_0.storeBit(false);
        }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body: Cell | null = null;
    if (sc_0.loadBit()) {
        _body = sc_0.loadRef();
    }
    let _code: Cell | null = null;
    if (sc_0.loadBit()) {
        _code = sc_0.loadRef();
    }
    let _data: Cell | null = null;
    if (sc_0.loadBit()) {
        _data = sc_0.loadRef();
    }
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    const _bounce = source.readBoolean();
    const _to = source.readAddress();
    const _value = source.readBigNumber();
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.bounce ? -1n : 0n });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.to).endCell() });
    __tuple.push({ type: 'int', value: source.value });
    __tuple.push({ type: 'int', value: source.mode });
    if (source.body !== null) {
        __tuple.push({ type: 'cell', cell: source.body });
    } else {
        __tuple.push({ type: 'null' });
    }
    if (source.code !== null) {
        __tuple.push({ type: 'cell', cell: source.code });
    } else {
        __tuple.push({ type: 'null' });
    }
    if (source.data !== null) {
        __tuple.push({ type: 'cell', cell: source.data });
    } else {
        __tuple.push({ type: 'null' });
    }
    return __tuple;
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3067051791, 32);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3067051791) { throw Error('Invalid prefix'); }
    let _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, newOwner: _newOwner };
}

function loadTupleChangeOwner(source: TupleReader) {
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, newOwner: _newOwner };
}

function storeTupleChangeOwner(source: ChangeOwner) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.newOwner).endCell() });
    return __tuple;
}

export type TokenTransfer = {
    $$type: 'TokenTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Cell;
}

export function storeTokenTransfer(src: TokenTransfer) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.responseDestination);
        if (src.customPayload !== null) {
            b_0.storeBit(true);
            b_0.storeRef(src.customPayload);
        } else {
            b_0.storeBit(false);
        }
        b_0.storeCoins(src.forwardTonAmount);
        b_0.storeSlice(src.forwardPayload.beginParse());
    };
}

export function loadTokenTransfer(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _destination = sc_0.loadAddress();
    let _responseDestination = sc_0.loadMaybeAddress();
    let _customPayload: Cell | null = null;
    if (sc_0.loadBit()) {
        _customPayload = sc_0.loadRef();
    }
    let _forwardTonAmount = sc_0.loadCoins();
    let _forwardPayload = sc_0.asCell();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

function loadTupleTokenTransfer(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _destination = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    const _customPayload = source.readCellOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell();
    return { $$type: 'TokenTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

function storeTupleTokenTransfer(source: TokenTransfer) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.queryId });
    __tuple.push({ type: 'int', value: source.amount });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.destination).endCell() });
    if (source.responseDestination !== null) {
        __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.responseDestination).endCell() });
    } else {
        __tuple.push({ type: 'null' });
    }
    if (source.customPayload !== null) {
        __tuple.push({ type: 'cell', cell: source.customPayload });
    } else {
        __tuple.push({ type: 'null' });
    }
    __tuple.push({ type: 'int', value: source.forwardTonAmount });
    __tuple.push({ type: 'slice', cell: source.forwardPayload });
    return __tuple;
}

export type TokenTransferInternal = {
    $$type: 'TokenTransferInternal';
    queryId: bigint;
    amount: bigint;
    from: Address;
    responseAddress: Address | null;
    forwardTonAmount: bigint;
    forwardPayload: Cell;
}

export function storeTokenTransferInternal(src: TokenTransferInternal) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(395134233, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeAddress(src.responseAddress);
        b_0.storeCoins(src.forwardTonAmount);
        b_0.storeSlice(src.forwardPayload.beginParse());
    };
}

export function loadTokenTransferInternal(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 395134233) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _responseAddress = sc_0.loadMaybeAddress();
    let _forwardTonAmount = sc_0.loadCoins();
    let _forwardPayload = sc_0.asCell();
    return { $$type: 'TokenTransferInternal' as const, queryId: _queryId, amount: _amount, from: _from, responseAddress: _responseAddress, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

function loadTupleTokenTransferInternal(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _from = source.readAddress();
    const _responseAddress = source.readAddressOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell();
    return { $$type: 'TokenTransferInternal' as const, queryId: _queryId, amount: _amount, from: _from, responseAddress: _responseAddress, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

function storeTupleTokenTransferInternal(source: TokenTransferInternal) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.queryId });
    __tuple.push({ type: 'int', value: source.amount });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.from).endCell() });
    if (source.responseAddress !== null) {
        __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.responseAddress).endCell() });
    } else {
        __tuple.push({ type: 'null' });
    }
    __tuple.push({ type: 'int', value: source.forwardTonAmount });
    __tuple.push({ type: 'slice', cell: source.forwardPayload });
    return __tuple;
}

export type TokenNotification = {
    $$type: 'TokenNotification';
    queryId: bigint;
    amount: bigint;
    from: Address;
    forwardPayload: Cell;
}

export function storeTokenNotification(src: TokenNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.from);
        b_0.storeSlice(src.forwardPayload.beginParse());
    };
}

export function loadTokenNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _from = sc_0.loadAddress();
    let _forwardPayload = sc_0.asCell();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forwardPayload: _forwardPayload };
}

function loadTupleTokenNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _from = source.readAddress();
    const _forwardPayload = source.readCell();
    return { $$type: 'TokenNotification' as const, queryId: _queryId, amount: _amount, from: _from, forwardPayload: _forwardPayload };
}

function storeTupleTokenNotification(source: TokenNotification) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.queryId });
    __tuple.push({ type: 'int', value: source.amount });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.from).endCell() });
    __tuple.push({ type: 'slice', cell: source.forwardPayload });
    return __tuple;
}

export type TokenBurn = {
    $$type: 'TokenBurn';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    responseAddress: Address | null;
}

export function storeTokenBurn(src: TokenBurn) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1499400124, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.responseAddress);
    };
}

export function loadTokenBurn(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1499400124) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _responseAddress = sc_0.loadMaybeAddress();
    return { $$type: 'TokenBurn' as const, queryId: _queryId, amount: _amount, owner: _owner, responseAddress: _responseAddress };
}

function loadTupleTokenBurn(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _owner = source.readAddress();
    const _responseAddress = source.readAddressOpt();
    return { $$type: 'TokenBurn' as const, queryId: _queryId, amount: _amount, owner: _owner, responseAddress: _responseAddress };
}

function storeTupleTokenBurn(source: TokenBurn) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.queryId });
    __tuple.push({ type: 'int', value: source.amount });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.owner).endCell() });
    if (source.responseAddress !== null) {
        __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.responseAddress).endCell() });
    } else {
        __tuple.push({ type: 'null' });
    }
    return __tuple;
}

export type TokenBurnNotification = {
    $$type: 'TokenBurnNotification';
    queryId: bigint;
    amount: bigint;
    owner: Address;
    responseAddress: Address | null;
}

export function storeTokenBurnNotification(src: TokenBurnNotification) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2078119902, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.responseAddress);
    };
}

export function loadTokenBurnNotification(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2078119902) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    let _amount = sc_0.loadCoins();
    let _owner = sc_0.loadAddress();
    let _responseAddress = sc_0.loadMaybeAddress();
    return { $$type: 'TokenBurnNotification' as const, queryId: _queryId, amount: _amount, owner: _owner, responseAddress: _responseAddress };
}

function loadTupleTokenBurnNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _owner = source.readAddress();
    const _responseAddress = source.readAddressOpt();
    return { $$type: 'TokenBurnNotification' as const, queryId: _queryId, amount: _amount, owner: _owner, responseAddress: _responseAddress };
}

function storeTupleTokenBurnNotification(source: TokenBurnNotification) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.queryId });
    __tuple.push({ type: 'int', value: source.amount });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.owner).endCell() });
    if (source.responseAddress !== null) {
        __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.responseAddress).endCell() });
    } else {
        __tuple.push({ type: 'null' });
    }
    return __tuple;
}

export type TokenExcesses = {
    $$type: 'TokenExcesses';
    queryId: bigint;
}

export function storeTokenExcesses(src: TokenExcesses) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(3576854235, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadTokenExcesses(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
    let _queryId = sc_0.loadUintBig(64);
    return { $$type: 'TokenExcesses' as const, queryId: _queryId };
}

function loadTupleTokenExcesses(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'TokenExcesses' as const, queryId: _queryId };
}

function storeTupleTokenExcesses(source: TokenExcesses) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.queryId });
    return __tuple;
}

export type TokenUpdateContent = {
    $$type: 'TokenUpdateContent';
    content: Cell | null;
}

export function storeTokenUpdateContent(src: TokenUpdateContent) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(1862840892, 32);
        if (src.content !== null) {
            b_0.storeBit(true);
            b_0.storeRef(src.content);
        } else {
            b_0.storeBit(false);
        }
    };
}

export function loadTokenUpdateContent(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 1862840892) { throw Error('Invalid prefix'); }
    let _content: Cell | null = null;
    if (sc_0.loadBit()) {
        _content = sc_0.loadRef();
    }
    return { $$type: 'TokenUpdateContent' as const, content: _content };
}

function loadTupleTokenUpdateContent(source: TupleReader) {
    const _content = source.readCellOpt();
    return { $$type: 'TokenUpdateContent' as const, content: _content };
}

function storeTupleTokenUpdateContent(source: TokenUpdateContent) {
    let __tuple: TupleItem[] = [];
    if (source.content !== null) {
        __tuple.push({ type: 'cell', cell: source.content });
    } else {
        __tuple.push({ type: 'null' });
    }
    return __tuple;
}

export type JettonData = {
    $$type: 'JettonData';
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell | null;
    walletCode: Cell;
}

export function storeJettonData(src: JettonData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.totalSupply, 257);
        b_0.storeBit(src.mintable);
        b_0.storeAddress(src.owner);
        if (src.content !== null) {
            b_0.storeBit(true);
            b_0.storeRef(src.content);
        } else {
            b_0.storeBit(false);
        }
        b_0.storeRef(src.walletCode);
    };
}

export function loadJettonData(slice: Slice) {
    let sc_0 = slice;
    let _totalSupply = sc_0.loadIntBig(257);
    let _mintable = sc_0.loadBit();
    let _owner = sc_0.loadAddress();
    let _content: Cell | null = null;
    if (sc_0.loadBit()) {
        _content = sc_0.loadRef();
    }
    let _walletCode = sc_0.loadRef();
    return { $$type: 'JettonData' as const, totalSupply: _totalSupply, mintable: _mintable, owner: _owner, content: _content, walletCode: _walletCode };
}

function loadTupleJettonData(source: TupleReader) {
    const _totalSupply = source.readBigNumber();
    const _mintable = source.readBoolean();
    const _owner = source.readAddress();
    const _content = source.readCellOpt();
    const _walletCode = source.readCell();
    return { $$type: 'JettonData' as const, totalSupply: _totalSupply, mintable: _mintable, owner: _owner, content: _content, walletCode: _walletCode };
}

function storeTupleJettonData(source: JettonData) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.totalSupply });
    __tuple.push({ type: 'int', value: source.mintable ? -1n : 0n });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.owner).endCell() });
    if (source.content !== null) {
        __tuple.push({ type: 'cell', cell: source.content });
    } else {
        __tuple.push({ type: 'null' });
    }
    __tuple.push({ type: 'cell', cell: source.walletCode });
    return __tuple;
}

export type JettonWalletData = {
    $$type: 'JettonWalletData';
    balance: bigint;
    owner: Address;
    master: Address;
    walletCode: Cell;
}

export function storeJettonWalletData(src: JettonWalletData) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.balance, 257);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.master);
        b_0.storeRef(src.walletCode);
    };
}

export function loadJettonWalletData(slice: Slice) {
    let sc_0 = slice;
    let _balance = sc_0.loadIntBig(257);
    let _owner = sc_0.loadAddress();
    let _master = sc_0.loadAddress();
    let _walletCode = sc_0.loadRef();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}

function loadTupleJettonWalletData(source: TupleReader) {
    const _balance = source.readBigNumber();
    const _owner = source.readAddress();
    const _master = source.readAddress();
    const _walletCode = source.readCell();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, master: _master, walletCode: _walletCode };
}

function storeTupleJettonWalletData(source: JettonWalletData) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.balance });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.owner).endCell() });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(source.master).endCell() });
    __tuple.push({ type: 'cell', cell: source.walletCode });
    return __tuple;
}

export type Mint = {
    $$type: 'Mint';
    amount: bigint;
}

export function storeMint(src: Mint) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeUint(2737462367, 32);
        b_0.storeInt(src.amount, 257);
    };
}

export function loadMint(slice: Slice) {
    let sc_0 = slice;
    if (sc_0.loadUint(32) !== 2737462367) { throw Error('Invalid prefix'); }
    let _amount = sc_0.loadIntBig(257);
    return { $$type: 'Mint' as const, amount: _amount };
}

function loadTupleMint(source: TupleReader) {
    const _amount = source.readBigNumber();
    return { $$type: 'Mint' as const, amount: _amount };
}

function storeTupleMint(source: Mint) {
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'int', value: source.amount });
    return __tuple;
}

async function JettonDefaultWallet_init(master: Address, owner: Address) {
    const __code = 'te6ccgECKwEABZEAART/APSkE/S88sgLAQIBYgIDAgLKBAUCASAnKAIBIAYHAgFIEhMCASAICQIBbhARAgFICgsAR7OQ4AOWAuYDlgLgA5YAJZmZk/IBkOQDlgLgA5YAJZQPl/+ToQT1RwIddJwh+VMCDXCx/eAtDTAwFxsMABkX+RcOIB+kAiUGZvBPhhAo4zMO1E0NQB+GKBAQHXAPpAAQH6QAFDMGwTVQLwKcj4QgHMVSBQI4EBAc8AAc8WAc8Wye1U4CCCEA+KfqW64wIgghAXjUUZuuMCghBZXwe8uuMCMIDA0ODwALQgbvLQgIAN4w7UTQ1AH4YoEBAdcA+kABAfpAAUMwbBMD0x8BghAPin6luvLggdM/+gD6QAEB+kAh1wsBwwCRAZIxbeJtAtIAAZRsEtQS3voAUWYWFURANxCJEHhVBfAmyPhCAcxVIFAjgQEBzwABzxYBzxbJ7VQAyjDtRNDUAfhigQEB1wD6QAEB+kABQzBsEwPTHwGCEBeNRRm68uCB0z/6APpAAQH6QCHXCwHDAJEBkjFt4gH6AFFVFRRDMDYQeBBnVQTwJ8j4QgHMVSBQI4EBAc8AAc8WAc8Wye1UALztRNDUAfhigQEB1wD6QAEB+kABQzBsEwPTHwGCEFlfB7y68uCB0z/6APpAAQH6QCHXCwHDAJEBkjFt4hRDMDQQVhBFVQLwKMj4QgHMVSBQI4EBAc8AAc8WAc8Wye1UAAbywIIAAUgAFVlH8BygDgcAHKAIAgEgFBUCAdQlJgIBIBYXAgEgHR4CASAYGQIBIBscAAkcFnwCYAH3MhxAcoBUAfwH3ABygJQBc8WUAP6AnABymgjbrMlbrOxjj1/8B/IcPAfcPAfJG6zmX/wHwTwAlAEzJU0A3DwH+IkbrOZf/AfBPACUATMlTQDcPAf4nDwHwJ/8B8CyVjMljMzAXDwH+IhbrOYf/AfAfACAcyUMXDwH+LJAYBoABPsAACUbDH6ADFx1yH6ADH6ADCnA6sAgACkcAPIzEMTUCOBAQHPAAHPFgHPFsmACASAfIAIBICEiAG8AtD0BDAgggDYrwGAEPQPb6Hy4GRtAoIA2K8BgBD0D2+h8uBkEoIA2K8BAoAQ9BfI9ADJQAPwI4AAPPhCUxLwJDCABpxsIvhBbySBEU1TO8cF8vRRt6GCAPX8IcL/8vRDMFI88CJxJMIAkjBy3oE+uwKoggkxLQCgggiYloCgErzy9PhCVCBk8CRc8CB/UHZwgEArVEw5GICMB7z4QW8kUyrHBbOOEvhCU7jwJAGBEU0C8CAkxwXy9N5RyKCCAPX8IcL/8vQh+CdvECGhggiYloBmtgihggiYloCgoSbCAJYQfVCJXwjjDSVusyLCALCOHXAG8AJwBMgBghDVMnbbWMsfyz/JEEdDMBdtbfAhkjVb4oCQAZMhVUIIQF41FGVAHyx8Vyz9QA/oCAc8WASBulTBwAcsBks8W4gH6AgHPFskQVhA0WfAhAHJQTUMw8CJSMKAaoXBwKEgTUHTIVTCCEHNi0JxQBcsfE8s/AfoCAc8WAc8WySgQRkMTUFVtbfAhUAUA0xb+EFvJIERTVM4xwXy9FGEoYIA9fwhwv/y9EMwUjnwIoE+uwGCCTEtAKCCCJiWgKASvPL0f3ADgEBUM2bIVTCCEHvdl95QBcsfE8s/AfoCAc8WASBulTBwAcsBks8W4slUEwRQM21t8CGAATyAINch0x/TPzH6ADCBNVIighAXjUUZugOCEHvdl966E7ES8vQToAKAAO7/YF2omhqAPwxQICA64B9IACA/SAAoZg2CfgS+A5AICcykqAAms8fgRwABxrejBOC52Hq6WVz2PQnYc6yVCjbNBOE7rGpaVsj5ZkWnXlv74sRzBOE7o8AHy2bAeT+QdWSzWUQnA';
    const __system = 'te6cckECLQEABZsAAQHAAQEFobFfAgEU/wD0pBP0vPLICwMCAWIJBAIBIAgFAgJzBwYAca3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwThO6PAB8tmwHk/kHVks1lEJwAAJrPH4EcAAO7/YF2omhqAPwxQICA64B9IACA/SAAoZg2CfgS+A5AICyiAKAgFIDgsCAdQNDABPIAg1yHTH9M/MfoAMIE1UiKCEBeNRRm6A4IQe92X3roTsRLy9BOgAoADTFv4QW8kgRFNUzjHBfL0UYShggD1/CHC//L0QzBSOfAigT67AYIJMS0AoIIImJaAoBK88vR/cAOAQFQzZshVMIIQe92X3lAFyx8Tyz8B+gIBzxYBIG6VMHABywGSzxbiyVQTBFAzbW3wIYAIBIBgPAgEgFRACASATEQHvPhBbyRTKscFs44S+EJTuPAkAYERTQLwICTHBfL03lHIoIIA9fwhwv/y9CH4J28QIaGCCJiWgGa2CKGCCJiWgKChJsIAlhB9UIlfCOMNJW6zIsIAsI4dcAbwAnAEyAGCENUydttYyx/LP8kQR0MwF21t8CGSNVvigEgByUE1DMPAiUjCgGqFwcChIE1B0yFUwghBzYtCcUAXLHxPLPwH6AgHPFgHPFskoEEZDE1BVbW3wIVAFAacbCL4QW8kgRFNUzvHBfL0UbehggD1/CHC//L0QzBSPPAicSTCAJIwct6BPrsCqIIJMS0AoIIImJaAoBK88vT4QlQgZPAkXPAgf1B2cIBAK1RMORiAUAGTIVVCCEBeNRRlQB8sfFcs/UAP6AgHPFgEgbpUwcAHLAZLPFuIB+gIBzxbJEFYQNFnwIQIBIBcWAA8+EJTEvAkMIABvALQ9AQwIIIA2K8BgBD0D2+h8uBkbQKCANivAYAQ9A9vofLgZBKCANivAQKAEPQXyPQAyUAD8COACASAcGQIBIBsaACkcAPIzEMTUCOBAQHPAAHPFgHPFsmAAJRsMfoAMXHXIfoAMfoAMKcDqwCACASAfHQH3MhxAcoBUAfwH3ABygJQBc8WUAP6AnABymgjbrMlbrOxjj1/8B/IcPAfcPAfJG6zmX/wHwTwAlAEzJU0A3DwH+IkbrOZf/AfBPACUATMlTQDcPAf4nDwHwJ/8B8CyVjMljMzAXDwH+IhbrOYf/AfAfACAcyUMXDwH+LJAYB4ABPsAAAkcFnwCYAIBICQhAgFuIyIAFVlH8BygDgcAHKAIAAFIAgEgJiUAR7OQ4AOWAuYDlgLgA5YAJZmZk/IBkOQDlgLgA5YAJZQPl/+ToQIBSCgnAAtCBu8tCAgE9UcCHXScIflTAg1wsf3gLQ0wMBcbDAAZF/kXDiAfpAIlBmbwT4YQKOMzDtRNDUAfhigQEB1wD6QAEB+kABQzBsE1UC8CnI+EIBzFUgUCOBAQHPAAHPFgHPFsntVOAgghAPin6luuMCIIIQF41FGbrjAoIQWV8HvLrjAjCCwrKikABvLAggC87UTQ1AH4YoEBAdcA+kABAfpAAUMwbBMD0x8BghBZXwe8uvLggdM/+gD6QAEB+kAh1wsBwwCRAZIxbeIUQzA0EFYQRVUC8CjI+EIBzFUgUCOBAQHPAAHPFgHPFsntVADKMO1E0NQB+GKBAQHXAPpAAQH6QAFDMGwTA9MfAYIQF41FGbry4IHTP/oA+kABAfpAIdcLAcMAkQGSMW3iAfoAUVUVFEMwNhB4EGdVBPAnyPhCAcxVIFAjgQEBzwABzxYBzxbJ7VQA3jDtRNDUAfhigQEB1wD6QAEB+kABQzBsEwPTHwGCEA+KfqW68uCB0z/6APpAAQH6QCHXCwHDAJEBkjFt4m0C0gABlGwS1BLe+gBRZhYVREA3EIkQeFUF8CbI+EIBzFUgUCOBAQHPAAHPFgHPFsntVGl13FQ=';
    let systemCell = Cell.fromBase64(__system);
    let __tuple: TupleItem[] = [];
    __tuple.push({ type: 'cell', cell: systemCell });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(master).endCell() });
    __tuple.push({ type: 'slice', cell: beginCell().storeAddress(owner).endCell() });
    let codeCell = Cell.fromBoc(Buffer.from(__code, 'base64'))[0];
    let system = await ContractSystem.create();
    let executor = await ContractExecutor.create({ code: codeCell, data: new Cell() }, system);
    let res = await executor.get('init_JettonDefaultWallet', __tuple);
    if (!res.success) { throw Error(res.error); }
    if (res.exitCode !== 0 && res.exitCode !== 1) {
        if (JettonDefaultWallet_errors[res.exitCode]) {
            throw new ComputeError(JettonDefaultWallet_errors[res.exitCode].message, res.exitCode, { logs: res.vmLogs });
        } else {
            throw new ComputeError('Exit code: ' + res.exitCode, res.exitCode, { logs: res.vmLogs });
        }
    }
    
    let data = res.stack.readCell();
    return { code: codeCell, data };
}

const JettonDefaultWallet_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack undeflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    13: { message: `Out of gas error` },
    32: { message: `Method ID not found` },
    34: { message: `Action is invalid or not supported` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    4429: { message: `Invalid sender` },
    13650: { message: `Invalid bounced message` },
    16059: { message: `Invalid value` },
    62972: { message: `Invalid balance` },
}

export class JettonDefaultWallet implements Contract {
    
    static async init(master: Address, owner: Address) {
        return await JettonDefaultWallet_init(master,owner);
    }
    
    static async fromInit(master: Address, owner: Address) {
        const init = await JettonDefaultWallet_init(master,owner);
        const address = contractAddress(0, init);
        return new JettonDefaultWallet(address, init);
    }
    
    static fromAddress(address: Address) {
        return new JettonDefaultWallet(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        errors: JettonDefaultWallet_errors
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: TokenTransfer | TokenTransferInternal | TokenBurn) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenTransfer') {
            body = beginCell().store(storeTokenTransfer(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenTransferInternal') {
            body = beginCell().store(storeTokenTransferInternal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'TokenBurn') {
            body = beginCell().store(storeTokenBurn(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getGetWalletData(provider: ContractProvider) {
        let __tuple: TupleItem[] = [];
        let result = await provider.get('get_wallet_data', __tuple);
        return loadTupleJettonWalletData(result.stack);
    }
    
}