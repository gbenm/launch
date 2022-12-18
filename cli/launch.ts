// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const __default = "// @ts-check\nimport { homedir } from \"https://deno.land/std@0.168.0/node/os.ts\"\nimport { createHash } from \"https://deno.land/std@0.168.0/node/crypto.ts\"\n\n/**\n * @typedef {{ path: string }} Context\n * @typedef {(c: Context) => string} Builder\n * @typedef {string | Builder} CmdArg\n * @typedef {string | Builder} Cmd\n * @typedef {Cmd[] | { args: string[], cmd: Cmd[] }} BuiltCmd\n * @typedef {{ args: string[] }} CmdBuilderContext\n * @typedef {(_: CmdBuilderContext) => BuiltCmd } CmdBuilder\n * @typedef {{ dir?: string, cmd: Cmd[] | CmdBuilder, desc?: string }} Script\n * @typedef {{ [_: string]: Script }} Scripts\n * @typedef {(_0: TemplateStringsArray, ..._1: CmdArg[]) => Builder} CommandGenerator\n * @type {(_: { cmd: CommandGenerator }) => Scripts}\n*/\nexport default ({ cmd }) => ({\n  hello: {\n    cmd: [ \"echo Hello world!\" ],\n    desc: \"Print Hello world!\"\n  },\n  helloFn: {\n    dir: homedir() || \"\",\n    cmd: [\n      \"echo Hello world from\",\n      cmd`echo ${({ path }) => path}`\n    ],\n    desc: \"Print Hello world with home directory\"\n  },\n  describeArgs: {\n    cmd: ({ args }) => [\n      `echo \"count: ${args.length}\"`,\n      ...args.map((arg, i) => `echo \"${i + 1}. ${arg}\"`),\n      'echo input: '\n    ],\n    desc: \"Describes the arguments of command\"\n  },\n  cryptoArgs: {\n    cmd({ args }) {\n      const input = args.join(\"-\")\n      const algorithm = \"sha256\"\n      const resultArgs = createHash(algorithm)\n        .update(input)\n        .digest(\"hex\")\n        .toString()\n\n      return {\n        args: [resultArgs],\n        cmd: [\n          `echo \"hash algorithm: ${algorithm}\"`,\n          `echo \"input: ${input || \"<empty>\"}\"`,\n          \"echo result:\" // will print resultArgs\n        ]\n      }\n    },\n    desc: \"Prints a hash of the arguments joined with '-'\"\n  }\n})\n";
class DenoStdInternalError extends Error {
    constructor(message){
        super(message);
        this.name = "DenoStdInternalError";
    }
}
function assert(expr, msg = "") {
    if (!expr) {
        throw new DenoStdInternalError(msg);
    }
}
function unreachable() {
    throw new DenoStdInternalError("unreachable");
}
const osType = (()=>{
    const { Deno: Deno1  } = globalThis;
    if (typeof Deno1?.build?.os === "string") {
        return Deno1.build.os;
    }
    const { navigator  } = globalThis;
    if (navigator?.appVersion?.includes?.("Win")) {
        return "windows";
    }
    return "linux";
})();
const isWindows = osType === "windows";
const isLinux = osType === "linux";
function uvTranslateSysError(sysErrno) {
    switch(sysErrno){
        case 5:
            return "EACCES";
        case 998:
            return "EACCES";
        case 10013:
            return "EACCES";
        case 1920:
            return "EACCES";
        case 1227:
            return "EADDRINUSE";
        case 10048:
            return "EADDRINUSE";
        case 10049:
            return "EADDRNOTAVAIL";
        case 10047:
            return "EAFNOSUPPORT";
        case 10035:
            return "EAGAIN";
        case 10037:
            return "EALREADY";
        case 1004:
            return "EBADF";
        case 6:
            return "EBADF";
        case 33:
            return "EBUSY";
        case 231:
            return "EBUSY";
        case 32:
            return "EBUSY";
        case 995:
            return "ECANCELED";
        case 10004:
            return "ECANCELED";
        case 1113:
            return "ECHARSET";
        case 1236:
            return "ECONNABORTED";
        case 10053:
            return "ECONNABORTED";
        case 1225:
            return "ECONNREFUSED";
        case 10061:
            return "ECONNREFUSED";
        case 64:
            return "ECONNRESET";
        case 10054:
            return "ECONNRESET";
        case 183:
            return "EEXIST";
        case 80:
            return "EEXIST";
        case 111:
            return "EFAULT";
        case 10014:
            return "EFAULT";
        case 1232:
            return "EHOSTUNREACH";
        case 10065:
            return "EHOSTUNREACH";
        case 122:
            return "EINVAL";
        case 13:
            return "EINVAL";
        case 123:
            return "EINVAL";
        case 87:
            return "EINVAL";
        case 10022:
            return "EINVAL";
        case 10046:
            return "EINVAL";
        case 1102:
            return "EIO";
        case 1111:
            return "EIO";
        case 23:
            return "EIO";
        case 1166:
            return "EIO";
        case 1165:
            return "EIO";
        case 1393:
            return "EIO";
        case 1129:
            return "EIO";
        case 1101:
            return "EIO";
        case 31:
            return "EIO";
        case 1106:
            return "EIO";
        case 1117:
            return "EIO";
        case 1104:
            return "EIO";
        case 205:
            return "EIO";
        case 110:
            return "EIO";
        case 1103:
            return "EIO";
        case 156:
            return "EIO";
        case 10056:
            return "EISCONN";
        case 1921:
            return "ELOOP";
        case 4:
            return "EMFILE";
        case 10024:
            return "EMFILE";
        case 10040:
            return "EMSGSIZE";
        case 206:
            return "ENAMETOOLONG";
        case 1231:
            return "ENETUNREACH";
        case 10051:
            return "ENETUNREACH";
        case 10055:
            return "ENOBUFS";
        case 161:
            return "ENOENT";
        case 267:
            return "ENOTDIR";
        case 203:
            return "ENOENT";
        case 2:
            return "ENOENT";
        case 15:
            return "ENOENT";
        case 4392:
            return "ENOENT";
        case 126:
            return "ENOENT";
        case 3:
            return "ENOENT";
        case 11001:
            return "ENOENT";
        case 11004:
            return "ENOENT";
        case 8:
            return "ENOMEM";
        case 14:
            return "ENOMEM";
        case 82:
            return "ENOSPC";
        case 112:
            return "ENOSPC";
        case 277:
            return "ENOSPC";
        case 1100:
            return "ENOSPC";
        case 39:
            return "ENOSPC";
        case 2250:
            return "ENOTCONN";
        case 10057:
            return "ENOTCONN";
        case 145:
            return "ENOTEMPTY";
        case 10038:
            return "ENOTSOCK";
        case 50:
            return "ENOTSUP";
        case 109:
            return "EOF";
        case 1314:
            return "EPERM";
        case 230:
            return "EPIPE";
        case 232:
            return "EPIPE";
        case 233:
            return "EPIPE";
        case 10058:
            return "EPIPE";
        case 10043:
            return "EPROTONOSUPPORT";
        case 19:
            return "EROFS";
        case 121:
            return "ETIMEDOUT";
        case 10060:
            return "ETIMEDOUT";
        case 17:
            return "EXDEV";
        case 1:
            return "EISDIR";
        case 208:
            return "E2BIG";
        case 10044:
            return "ESOCKTNOSUPPORT";
        default:
            return "UNKNOWN";
    }
}
const codeToErrorWindows = [
    [
        -4093,
        [
            "E2BIG",
            "argument list too long"
        ]
    ],
    [
        -4092,
        [
            "EACCES",
            "permission denied"
        ]
    ],
    [
        -4091,
        [
            "EADDRINUSE",
            "address already in use"
        ]
    ],
    [
        -4090,
        [
            "EADDRNOTAVAIL",
            "address not available"
        ]
    ],
    [
        -4089,
        [
            "EAFNOSUPPORT",
            "address family not supported"
        ]
    ],
    [
        -4088,
        [
            "EAGAIN",
            "resource temporarily unavailable"
        ]
    ],
    [
        -3000,
        [
            "EAI_ADDRFAMILY",
            "address family not supported"
        ]
    ],
    [
        -3001,
        [
            "EAI_AGAIN",
            "temporary failure"
        ]
    ],
    [
        -3002,
        [
            "EAI_BADFLAGS",
            "bad ai_flags value"
        ]
    ],
    [
        -3013,
        [
            "EAI_BADHINTS",
            "invalid value for hints"
        ]
    ],
    [
        -3003,
        [
            "EAI_CANCELED",
            "request canceled"
        ]
    ],
    [
        -3004,
        [
            "EAI_FAIL",
            "permanent failure"
        ]
    ],
    [
        -3005,
        [
            "EAI_FAMILY",
            "ai_family not supported"
        ]
    ],
    [
        -3006,
        [
            "EAI_MEMORY",
            "out of memory"
        ]
    ],
    [
        -3007,
        [
            "EAI_NODATA",
            "no address"
        ]
    ],
    [
        -3008,
        [
            "EAI_NONAME",
            "unknown node or service"
        ]
    ],
    [
        -3009,
        [
            "EAI_OVERFLOW",
            "argument buffer overflow"
        ]
    ],
    [
        -3014,
        [
            "EAI_PROTOCOL",
            "resolved protocol is unknown"
        ]
    ],
    [
        -3010,
        [
            "EAI_SERVICE",
            "service not available for socket type"
        ]
    ],
    [
        -3011,
        [
            "EAI_SOCKTYPE",
            "socket type not supported"
        ]
    ],
    [
        -4084,
        [
            "EALREADY",
            "connection already in progress"
        ]
    ],
    [
        -4083,
        [
            "EBADF",
            "bad file descriptor"
        ]
    ],
    [
        -4082,
        [
            "EBUSY",
            "resource busy or locked"
        ]
    ],
    [
        -4081,
        [
            "ECANCELED",
            "operation canceled"
        ]
    ],
    [
        -4080,
        [
            "ECHARSET",
            "invalid Unicode character"
        ]
    ],
    [
        -4079,
        [
            "ECONNABORTED",
            "software caused connection abort"
        ]
    ],
    [
        -4078,
        [
            "ECONNREFUSED",
            "connection refused"
        ]
    ],
    [
        -4077,
        [
            "ECONNRESET",
            "connection reset by peer"
        ]
    ],
    [
        -4076,
        [
            "EDESTADDRREQ",
            "destination address required"
        ]
    ],
    [
        -4075,
        [
            "EEXIST",
            "file already exists"
        ]
    ],
    [
        -4074,
        [
            "EFAULT",
            "bad address in system call argument"
        ]
    ],
    [
        -4036,
        [
            "EFBIG",
            "file too large"
        ]
    ],
    [
        -4073,
        [
            "EHOSTUNREACH",
            "host is unreachable"
        ]
    ],
    [
        -4072,
        [
            "EINTR",
            "interrupted system call"
        ]
    ],
    [
        -4071,
        [
            "EINVAL",
            "invalid argument"
        ]
    ],
    [
        -4070,
        [
            "EIO",
            "i/o error"
        ]
    ],
    [
        -4069,
        [
            "EISCONN",
            "socket is already connected"
        ]
    ],
    [
        -4068,
        [
            "EISDIR",
            "illegal operation on a directory"
        ]
    ],
    [
        -4067,
        [
            "ELOOP",
            "too many symbolic links encountered"
        ]
    ],
    [
        -4066,
        [
            "EMFILE",
            "too many open files"
        ]
    ],
    [
        -4065,
        [
            "EMSGSIZE",
            "message too long"
        ]
    ],
    [
        -4064,
        [
            "ENAMETOOLONG",
            "name too long"
        ]
    ],
    [
        -4063,
        [
            "ENETDOWN",
            "network is down"
        ]
    ],
    [
        -4062,
        [
            "ENETUNREACH",
            "network is unreachable"
        ]
    ],
    [
        -4061,
        [
            "ENFILE",
            "file table overflow"
        ]
    ],
    [
        -4060,
        [
            "ENOBUFS",
            "no buffer space available"
        ]
    ],
    [
        -4059,
        [
            "ENODEV",
            "no such device"
        ]
    ],
    [
        -4058,
        [
            "ENOENT",
            "no such file or directory"
        ]
    ],
    [
        -4057,
        [
            "ENOMEM",
            "not enough memory"
        ]
    ],
    [
        -4056,
        [
            "ENONET",
            "machine is not on the network"
        ]
    ],
    [
        -4035,
        [
            "ENOPROTOOPT",
            "protocol not available"
        ]
    ],
    [
        -4055,
        [
            "ENOSPC",
            "no space left on device"
        ]
    ],
    [
        -4054,
        [
            "ENOSYS",
            "function not implemented"
        ]
    ],
    [
        -4053,
        [
            "ENOTCONN",
            "socket is not connected"
        ]
    ],
    [
        -4052,
        [
            "ENOTDIR",
            "not a directory"
        ]
    ],
    [
        -4051,
        [
            "ENOTEMPTY",
            "directory not empty"
        ]
    ],
    [
        -4050,
        [
            "ENOTSOCK",
            "socket operation on non-socket"
        ]
    ],
    [
        -4049,
        [
            "ENOTSUP",
            "operation not supported on socket"
        ]
    ],
    [
        -4048,
        [
            "EPERM",
            "operation not permitted"
        ]
    ],
    [
        -4047,
        [
            "EPIPE",
            "broken pipe"
        ]
    ],
    [
        -4046,
        [
            "EPROTO",
            "protocol error"
        ]
    ],
    [
        -4045,
        [
            "EPROTONOSUPPORT",
            "protocol not supported"
        ]
    ],
    [
        -4044,
        [
            "EPROTOTYPE",
            "protocol wrong type for socket"
        ]
    ],
    [
        -4034,
        [
            "ERANGE",
            "result too large"
        ]
    ],
    [
        -4043,
        [
            "EROFS",
            "read-only file system"
        ]
    ],
    [
        -4042,
        [
            "ESHUTDOWN",
            "cannot send after transport endpoint shutdown"
        ]
    ],
    [
        -4041,
        [
            "ESPIPE",
            "invalid seek"
        ]
    ],
    [
        -4040,
        [
            "ESRCH",
            "no such process"
        ]
    ],
    [
        -4039,
        [
            "ETIMEDOUT",
            "connection timed out"
        ]
    ],
    [
        -4038,
        [
            "ETXTBSY",
            "text file is busy"
        ]
    ],
    [
        -4037,
        [
            "EXDEV",
            "cross-device link not permitted"
        ]
    ],
    [
        -4094,
        [
            "UNKNOWN",
            "unknown error"
        ]
    ],
    [
        -4095,
        [
            "EOF",
            "end of file"
        ]
    ],
    [
        -4033,
        [
            "ENXIO",
            "no such device or address"
        ]
    ],
    [
        -4032,
        [
            "EMLINK",
            "too many links"
        ]
    ],
    [
        -4031,
        [
            "EHOSTDOWN",
            "host is down"
        ]
    ],
    [
        -4030,
        [
            "EREMOTEIO",
            "remote I/O error"
        ]
    ],
    [
        -4029,
        [
            "ENOTTY",
            "inappropriate ioctl for device"
        ]
    ],
    [
        -4028,
        [
            "EFTYPE",
            "inappropriate file type or format"
        ]
    ],
    [
        -4027,
        [
            "EILSEQ",
            "illegal byte sequence"
        ]
    ]
];
const errorToCodeWindows = codeToErrorWindows.map(([status, [error]])=>[
        error,
        status
    ]);
const codeToErrorDarwin = [
    [
        -7,
        [
            "E2BIG",
            "argument list too long"
        ]
    ],
    [
        -13,
        [
            "EACCES",
            "permission denied"
        ]
    ],
    [
        -48,
        [
            "EADDRINUSE",
            "address already in use"
        ]
    ],
    [
        -49,
        [
            "EADDRNOTAVAIL",
            "address not available"
        ]
    ],
    [
        -47,
        [
            "EAFNOSUPPORT",
            "address family not supported"
        ]
    ],
    [
        -35,
        [
            "EAGAIN",
            "resource temporarily unavailable"
        ]
    ],
    [
        -3000,
        [
            "EAI_ADDRFAMILY",
            "address family not supported"
        ]
    ],
    [
        -3001,
        [
            "EAI_AGAIN",
            "temporary failure"
        ]
    ],
    [
        -3002,
        [
            "EAI_BADFLAGS",
            "bad ai_flags value"
        ]
    ],
    [
        -3013,
        [
            "EAI_BADHINTS",
            "invalid value for hints"
        ]
    ],
    [
        -3003,
        [
            "EAI_CANCELED",
            "request canceled"
        ]
    ],
    [
        -3004,
        [
            "EAI_FAIL",
            "permanent failure"
        ]
    ],
    [
        -3005,
        [
            "EAI_FAMILY",
            "ai_family not supported"
        ]
    ],
    [
        -3006,
        [
            "EAI_MEMORY",
            "out of memory"
        ]
    ],
    [
        -3007,
        [
            "EAI_NODATA",
            "no address"
        ]
    ],
    [
        -3008,
        [
            "EAI_NONAME",
            "unknown node or service"
        ]
    ],
    [
        -3009,
        [
            "EAI_OVERFLOW",
            "argument buffer overflow"
        ]
    ],
    [
        -3014,
        [
            "EAI_PROTOCOL",
            "resolved protocol is unknown"
        ]
    ],
    [
        -3010,
        [
            "EAI_SERVICE",
            "service not available for socket type"
        ]
    ],
    [
        -3011,
        [
            "EAI_SOCKTYPE",
            "socket type not supported"
        ]
    ],
    [
        -37,
        [
            "EALREADY",
            "connection already in progress"
        ]
    ],
    [
        -9,
        [
            "EBADF",
            "bad file descriptor"
        ]
    ],
    [
        -16,
        [
            "EBUSY",
            "resource busy or locked"
        ]
    ],
    [
        -89,
        [
            "ECANCELED",
            "operation canceled"
        ]
    ],
    [
        -4080,
        [
            "ECHARSET",
            "invalid Unicode character"
        ]
    ],
    [
        -53,
        [
            "ECONNABORTED",
            "software caused connection abort"
        ]
    ],
    [
        -61,
        [
            "ECONNREFUSED",
            "connection refused"
        ]
    ],
    [
        -54,
        [
            "ECONNRESET",
            "connection reset by peer"
        ]
    ],
    [
        -39,
        [
            "EDESTADDRREQ",
            "destination address required"
        ]
    ],
    [
        -17,
        [
            "EEXIST",
            "file already exists"
        ]
    ],
    [
        -14,
        [
            "EFAULT",
            "bad address in system call argument"
        ]
    ],
    [
        -27,
        [
            "EFBIG",
            "file too large"
        ]
    ],
    [
        -65,
        [
            "EHOSTUNREACH",
            "host is unreachable"
        ]
    ],
    [
        -4,
        [
            "EINTR",
            "interrupted system call"
        ]
    ],
    [
        -22,
        [
            "EINVAL",
            "invalid argument"
        ]
    ],
    [
        -5,
        [
            "EIO",
            "i/o error"
        ]
    ],
    [
        -56,
        [
            "EISCONN",
            "socket is already connected"
        ]
    ],
    [
        -21,
        [
            "EISDIR",
            "illegal operation on a directory"
        ]
    ],
    [
        -62,
        [
            "ELOOP",
            "too many symbolic links encountered"
        ]
    ],
    [
        -24,
        [
            "EMFILE",
            "too many open files"
        ]
    ],
    [
        -40,
        [
            "EMSGSIZE",
            "message too long"
        ]
    ],
    [
        -63,
        [
            "ENAMETOOLONG",
            "name too long"
        ]
    ],
    [
        -50,
        [
            "ENETDOWN",
            "network is down"
        ]
    ],
    [
        -51,
        [
            "ENETUNREACH",
            "network is unreachable"
        ]
    ],
    [
        -23,
        [
            "ENFILE",
            "file table overflow"
        ]
    ],
    [
        -55,
        [
            "ENOBUFS",
            "no buffer space available"
        ]
    ],
    [
        -19,
        [
            "ENODEV",
            "no such device"
        ]
    ],
    [
        -2,
        [
            "ENOENT",
            "no such file or directory"
        ]
    ],
    [
        -12,
        [
            "ENOMEM",
            "not enough memory"
        ]
    ],
    [
        -4056,
        [
            "ENONET",
            "machine is not on the network"
        ]
    ],
    [
        -42,
        [
            "ENOPROTOOPT",
            "protocol not available"
        ]
    ],
    [
        -28,
        [
            "ENOSPC",
            "no space left on device"
        ]
    ],
    [
        -78,
        [
            "ENOSYS",
            "function not implemented"
        ]
    ],
    [
        -57,
        [
            "ENOTCONN",
            "socket is not connected"
        ]
    ],
    [
        -20,
        [
            "ENOTDIR",
            "not a directory"
        ]
    ],
    [
        -66,
        [
            "ENOTEMPTY",
            "directory not empty"
        ]
    ],
    [
        -38,
        [
            "ENOTSOCK",
            "socket operation on non-socket"
        ]
    ],
    [
        -45,
        [
            "ENOTSUP",
            "operation not supported on socket"
        ]
    ],
    [
        -1,
        [
            "EPERM",
            "operation not permitted"
        ]
    ],
    [
        -32,
        [
            "EPIPE",
            "broken pipe"
        ]
    ],
    [
        -100,
        [
            "EPROTO",
            "protocol error"
        ]
    ],
    [
        -43,
        [
            "EPROTONOSUPPORT",
            "protocol not supported"
        ]
    ],
    [
        -41,
        [
            "EPROTOTYPE",
            "protocol wrong type for socket"
        ]
    ],
    [
        -34,
        [
            "ERANGE",
            "result too large"
        ]
    ],
    [
        -30,
        [
            "EROFS",
            "read-only file system"
        ]
    ],
    [
        -58,
        [
            "ESHUTDOWN",
            "cannot send after transport endpoint shutdown"
        ]
    ],
    [
        -29,
        [
            "ESPIPE",
            "invalid seek"
        ]
    ],
    [
        -3,
        [
            "ESRCH",
            "no such process"
        ]
    ],
    [
        -60,
        [
            "ETIMEDOUT",
            "connection timed out"
        ]
    ],
    [
        -26,
        [
            "ETXTBSY",
            "text file is busy"
        ]
    ],
    [
        -18,
        [
            "EXDEV",
            "cross-device link not permitted"
        ]
    ],
    [
        -4094,
        [
            "UNKNOWN",
            "unknown error"
        ]
    ],
    [
        -4095,
        [
            "EOF",
            "end of file"
        ]
    ],
    [
        -6,
        [
            "ENXIO",
            "no such device or address"
        ]
    ],
    [
        -31,
        [
            "EMLINK",
            "too many links"
        ]
    ],
    [
        -64,
        [
            "EHOSTDOWN",
            "host is down"
        ]
    ],
    [
        -4030,
        [
            "EREMOTEIO",
            "remote I/O error"
        ]
    ],
    [
        -25,
        [
            "ENOTTY",
            "inappropriate ioctl for device"
        ]
    ],
    [
        -79,
        [
            "EFTYPE",
            "inappropriate file type or format"
        ]
    ],
    [
        -92,
        [
            "EILSEQ",
            "illegal byte sequence"
        ]
    ]
];
const errorToCodeDarwin = codeToErrorDarwin.map(([status, [code]])=>[
        code,
        status
    ]);
const codeToErrorLinux = [
    [
        -7,
        [
            "E2BIG",
            "argument list too long"
        ]
    ],
    [
        -13,
        [
            "EACCES",
            "permission denied"
        ]
    ],
    [
        -98,
        [
            "EADDRINUSE",
            "address already in use"
        ]
    ],
    [
        -99,
        [
            "EADDRNOTAVAIL",
            "address not available"
        ]
    ],
    [
        -97,
        [
            "EAFNOSUPPORT",
            "address family not supported"
        ]
    ],
    [
        -11,
        [
            "EAGAIN",
            "resource temporarily unavailable"
        ]
    ],
    [
        -3000,
        [
            "EAI_ADDRFAMILY",
            "address family not supported"
        ]
    ],
    [
        -3001,
        [
            "EAI_AGAIN",
            "temporary failure"
        ]
    ],
    [
        -3002,
        [
            "EAI_BADFLAGS",
            "bad ai_flags value"
        ]
    ],
    [
        -3013,
        [
            "EAI_BADHINTS",
            "invalid value for hints"
        ]
    ],
    [
        -3003,
        [
            "EAI_CANCELED",
            "request canceled"
        ]
    ],
    [
        -3004,
        [
            "EAI_FAIL",
            "permanent failure"
        ]
    ],
    [
        -3005,
        [
            "EAI_FAMILY",
            "ai_family not supported"
        ]
    ],
    [
        -3006,
        [
            "EAI_MEMORY",
            "out of memory"
        ]
    ],
    [
        -3007,
        [
            "EAI_NODATA",
            "no address"
        ]
    ],
    [
        -3008,
        [
            "EAI_NONAME",
            "unknown node or service"
        ]
    ],
    [
        -3009,
        [
            "EAI_OVERFLOW",
            "argument buffer overflow"
        ]
    ],
    [
        -3014,
        [
            "EAI_PROTOCOL",
            "resolved protocol is unknown"
        ]
    ],
    [
        -3010,
        [
            "EAI_SERVICE",
            "service not available for socket type"
        ]
    ],
    [
        -3011,
        [
            "EAI_SOCKTYPE",
            "socket type not supported"
        ]
    ],
    [
        -114,
        [
            "EALREADY",
            "connection already in progress"
        ]
    ],
    [
        -9,
        [
            "EBADF",
            "bad file descriptor"
        ]
    ],
    [
        -16,
        [
            "EBUSY",
            "resource busy or locked"
        ]
    ],
    [
        -125,
        [
            "ECANCELED",
            "operation canceled"
        ]
    ],
    [
        -4080,
        [
            "ECHARSET",
            "invalid Unicode character"
        ]
    ],
    [
        -103,
        [
            "ECONNABORTED",
            "software caused connection abort"
        ]
    ],
    [
        -111,
        [
            "ECONNREFUSED",
            "connection refused"
        ]
    ],
    [
        -104,
        [
            "ECONNRESET",
            "connection reset by peer"
        ]
    ],
    [
        -89,
        [
            "EDESTADDRREQ",
            "destination address required"
        ]
    ],
    [
        -17,
        [
            "EEXIST",
            "file already exists"
        ]
    ],
    [
        -14,
        [
            "EFAULT",
            "bad address in system call argument"
        ]
    ],
    [
        -27,
        [
            "EFBIG",
            "file too large"
        ]
    ],
    [
        -113,
        [
            "EHOSTUNREACH",
            "host is unreachable"
        ]
    ],
    [
        -4,
        [
            "EINTR",
            "interrupted system call"
        ]
    ],
    [
        -22,
        [
            "EINVAL",
            "invalid argument"
        ]
    ],
    [
        -5,
        [
            "EIO",
            "i/o error"
        ]
    ],
    [
        -106,
        [
            "EISCONN",
            "socket is already connected"
        ]
    ],
    [
        -21,
        [
            "EISDIR",
            "illegal operation on a directory"
        ]
    ],
    [
        -40,
        [
            "ELOOP",
            "too many symbolic links encountered"
        ]
    ],
    [
        -24,
        [
            "EMFILE",
            "too many open files"
        ]
    ],
    [
        -90,
        [
            "EMSGSIZE",
            "message too long"
        ]
    ],
    [
        -36,
        [
            "ENAMETOOLONG",
            "name too long"
        ]
    ],
    [
        -100,
        [
            "ENETDOWN",
            "network is down"
        ]
    ],
    [
        -101,
        [
            "ENETUNREACH",
            "network is unreachable"
        ]
    ],
    [
        -23,
        [
            "ENFILE",
            "file table overflow"
        ]
    ],
    [
        -105,
        [
            "ENOBUFS",
            "no buffer space available"
        ]
    ],
    [
        -19,
        [
            "ENODEV",
            "no such device"
        ]
    ],
    [
        -2,
        [
            "ENOENT",
            "no such file or directory"
        ]
    ],
    [
        -12,
        [
            "ENOMEM",
            "not enough memory"
        ]
    ],
    [
        -64,
        [
            "ENONET",
            "machine is not on the network"
        ]
    ],
    [
        -92,
        [
            "ENOPROTOOPT",
            "protocol not available"
        ]
    ],
    [
        -28,
        [
            "ENOSPC",
            "no space left on device"
        ]
    ],
    [
        -38,
        [
            "ENOSYS",
            "function not implemented"
        ]
    ],
    [
        -107,
        [
            "ENOTCONN",
            "socket is not connected"
        ]
    ],
    [
        -20,
        [
            "ENOTDIR",
            "not a directory"
        ]
    ],
    [
        -39,
        [
            "ENOTEMPTY",
            "directory not empty"
        ]
    ],
    [
        -88,
        [
            "ENOTSOCK",
            "socket operation on non-socket"
        ]
    ],
    [
        -95,
        [
            "ENOTSUP",
            "operation not supported on socket"
        ]
    ],
    [
        -1,
        [
            "EPERM",
            "operation not permitted"
        ]
    ],
    [
        -32,
        [
            "EPIPE",
            "broken pipe"
        ]
    ],
    [
        -71,
        [
            "EPROTO",
            "protocol error"
        ]
    ],
    [
        -93,
        [
            "EPROTONOSUPPORT",
            "protocol not supported"
        ]
    ],
    [
        -91,
        [
            "EPROTOTYPE",
            "protocol wrong type for socket"
        ]
    ],
    [
        -34,
        [
            "ERANGE",
            "result too large"
        ]
    ],
    [
        -30,
        [
            "EROFS",
            "read-only file system"
        ]
    ],
    [
        -108,
        [
            "ESHUTDOWN",
            "cannot send after transport endpoint shutdown"
        ]
    ],
    [
        -29,
        [
            "ESPIPE",
            "invalid seek"
        ]
    ],
    [
        -3,
        [
            "ESRCH",
            "no such process"
        ]
    ],
    [
        -110,
        [
            "ETIMEDOUT",
            "connection timed out"
        ]
    ],
    [
        -26,
        [
            "ETXTBSY",
            "text file is busy"
        ]
    ],
    [
        -18,
        [
            "EXDEV",
            "cross-device link not permitted"
        ]
    ],
    [
        -4094,
        [
            "UNKNOWN",
            "unknown error"
        ]
    ],
    [
        -4095,
        [
            "EOF",
            "end of file"
        ]
    ],
    [
        -6,
        [
            "ENXIO",
            "no such device or address"
        ]
    ],
    [
        -31,
        [
            "EMLINK",
            "too many links"
        ]
    ],
    [
        -112,
        [
            "EHOSTDOWN",
            "host is down"
        ]
    ],
    [
        -121,
        [
            "EREMOTEIO",
            "remote I/O error"
        ]
    ],
    [
        -25,
        [
            "ENOTTY",
            "inappropriate ioctl for device"
        ]
    ],
    [
        -4028,
        [
            "EFTYPE",
            "inappropriate file type or format"
        ]
    ],
    [
        -84,
        [
            "EILSEQ",
            "illegal byte sequence"
        ]
    ]
];
const errorToCodeLinux = codeToErrorLinux.map(([status, [code]])=>[
        code,
        status
    ]);
const codeToErrorFreebsd = [
    [
        -7,
        [
            "E2BIG",
            "argument list too long"
        ]
    ],
    [
        -13,
        [
            "EACCES",
            "permission denied"
        ]
    ],
    [
        -48,
        [
            "EADDRINUSE",
            "address already in use"
        ]
    ],
    [
        -49,
        [
            "EADDRNOTAVAIL",
            "address not available"
        ]
    ],
    [
        -47,
        [
            "EAFNOSUPPORT",
            "address family not supported"
        ]
    ],
    [
        -35,
        [
            "EAGAIN",
            "resource temporarily unavailable"
        ]
    ],
    [
        -3000,
        [
            "EAI_ADDRFAMILY",
            "address family not supported"
        ]
    ],
    [
        -3001,
        [
            "EAI_AGAIN",
            "temporary failure"
        ]
    ],
    [
        -3002,
        [
            "EAI_BADFLAGS",
            "bad ai_flags value"
        ]
    ],
    [
        -3013,
        [
            "EAI_BADHINTS",
            "invalid value for hints"
        ]
    ],
    [
        -3003,
        [
            "EAI_CANCELED",
            "request canceled"
        ]
    ],
    [
        -3004,
        [
            "EAI_FAIL",
            "permanent failure"
        ]
    ],
    [
        -3005,
        [
            "EAI_FAMILY",
            "ai_family not supported"
        ]
    ],
    [
        -3006,
        [
            "EAI_MEMORY",
            "out of memory"
        ]
    ],
    [
        -3007,
        [
            "EAI_NODATA",
            "no address"
        ]
    ],
    [
        -3008,
        [
            "EAI_NONAME",
            "unknown node or service"
        ]
    ],
    [
        -3009,
        [
            "EAI_OVERFLOW",
            "argument buffer overflow"
        ]
    ],
    [
        -3014,
        [
            "EAI_PROTOCOL",
            "resolved protocol is unknown"
        ]
    ],
    [
        -3010,
        [
            "EAI_SERVICE",
            "service not available for socket type"
        ]
    ],
    [
        -3011,
        [
            "EAI_SOCKTYPE",
            "socket type not supported"
        ]
    ],
    [
        -37,
        [
            "EALREADY",
            "connection already in progress"
        ]
    ],
    [
        -9,
        [
            "EBADF",
            "bad file descriptor"
        ]
    ],
    [
        -16,
        [
            "EBUSY",
            "resource busy or locked"
        ]
    ],
    [
        -85,
        [
            "ECANCELED",
            "operation canceled"
        ]
    ],
    [
        -4080,
        [
            "ECHARSET",
            "invalid Unicode character"
        ]
    ],
    [
        -53,
        [
            "ECONNABORTED",
            "software caused connection abort"
        ]
    ],
    [
        -61,
        [
            "ECONNREFUSED",
            "connection refused"
        ]
    ],
    [
        -54,
        [
            "ECONNRESET",
            "connection reset by peer"
        ]
    ],
    [
        -39,
        [
            "EDESTADDRREQ",
            "destination address required"
        ]
    ],
    [
        -17,
        [
            "EEXIST",
            "file already exists"
        ]
    ],
    [
        -14,
        [
            "EFAULT",
            "bad address in system call argument"
        ]
    ],
    [
        -27,
        [
            "EFBIG",
            "file too large"
        ]
    ],
    [
        -65,
        [
            "EHOSTUNREACH",
            "host is unreachable"
        ]
    ],
    [
        -4,
        [
            "EINTR",
            "interrupted system call"
        ]
    ],
    [
        -22,
        [
            "EINVAL",
            "invalid argument"
        ]
    ],
    [
        -5,
        [
            "EIO",
            "i/o error"
        ]
    ],
    [
        -56,
        [
            "EISCONN",
            "socket is already connected"
        ]
    ],
    [
        -21,
        [
            "EISDIR",
            "illegal operation on a directory"
        ]
    ],
    [
        -62,
        [
            "ELOOP",
            "too many symbolic links encountered"
        ]
    ],
    [
        -24,
        [
            "EMFILE",
            "too many open files"
        ]
    ],
    [
        -40,
        [
            "EMSGSIZE",
            "message too long"
        ]
    ],
    [
        -63,
        [
            "ENAMETOOLONG",
            "name too long"
        ]
    ],
    [
        -50,
        [
            "ENETDOWN",
            "network is down"
        ]
    ],
    [
        -51,
        [
            "ENETUNREACH",
            "network is unreachable"
        ]
    ],
    [
        -23,
        [
            "ENFILE",
            "file table overflow"
        ]
    ],
    [
        -55,
        [
            "ENOBUFS",
            "no buffer space available"
        ]
    ],
    [
        -19,
        [
            "ENODEV",
            "no such device"
        ]
    ],
    [
        -2,
        [
            "ENOENT",
            "no such file or directory"
        ]
    ],
    [
        -12,
        [
            "ENOMEM",
            "not enough memory"
        ]
    ],
    [
        -4056,
        [
            "ENONET",
            "machine is not on the network"
        ]
    ],
    [
        -42,
        [
            "ENOPROTOOPT",
            "protocol not available"
        ]
    ],
    [
        -28,
        [
            "ENOSPC",
            "no space left on device"
        ]
    ],
    [
        -78,
        [
            "ENOSYS",
            "function not implemented"
        ]
    ],
    [
        -57,
        [
            "ENOTCONN",
            "socket is not connected"
        ]
    ],
    [
        -20,
        [
            "ENOTDIR",
            "not a directory"
        ]
    ],
    [
        -66,
        [
            "ENOTEMPTY",
            "directory not empty"
        ]
    ],
    [
        -38,
        [
            "ENOTSOCK",
            "socket operation on non-socket"
        ]
    ],
    [
        -45,
        [
            "ENOTSUP",
            "operation not supported on socket"
        ]
    ],
    [
        -84,
        [
            "EOVERFLOW",
            "value too large for defined data type"
        ]
    ],
    [
        -1,
        [
            "EPERM",
            "operation not permitted"
        ]
    ],
    [
        -32,
        [
            "EPIPE",
            "broken pipe"
        ]
    ],
    [
        -92,
        [
            "EPROTO",
            "protocol error"
        ]
    ],
    [
        -43,
        [
            "EPROTONOSUPPORT",
            "protocol not supported"
        ]
    ],
    [
        -41,
        [
            "EPROTOTYPE",
            "protocol wrong type for socket"
        ]
    ],
    [
        -34,
        [
            "ERANGE",
            "result too large"
        ]
    ],
    [
        -30,
        [
            "EROFS",
            "read-only file system"
        ]
    ],
    [
        -58,
        [
            "ESHUTDOWN",
            "cannot send after transport endpoint shutdown"
        ]
    ],
    [
        -29,
        [
            "ESPIPE",
            "invalid seek"
        ]
    ],
    [
        -3,
        [
            "ESRCH",
            "no such process"
        ]
    ],
    [
        -60,
        [
            "ETIMEDOUT",
            "connection timed out"
        ]
    ],
    [
        -26,
        [
            "ETXTBSY",
            "text file is busy"
        ]
    ],
    [
        -18,
        [
            "EXDEV",
            "cross-device link not permitted"
        ]
    ],
    [
        -4094,
        [
            "UNKNOWN",
            "unknown error"
        ]
    ],
    [
        -4095,
        [
            "EOF",
            "end of file"
        ]
    ],
    [
        -6,
        [
            "ENXIO",
            "no such device or address"
        ]
    ],
    [
        -31,
        [
            "EMLINK",
            "too many links"
        ]
    ],
    [
        -64,
        [
            "EHOSTDOWN",
            "host is down"
        ]
    ],
    [
        -4030,
        [
            "EREMOTEIO",
            "remote I/O error"
        ]
    ],
    [
        -25,
        [
            "ENOTTY",
            "inappropriate ioctl for device"
        ]
    ],
    [
        -79,
        [
            "EFTYPE",
            "inappropriate file type or format"
        ]
    ],
    [
        -86,
        [
            "EILSEQ",
            "illegal byte sequence"
        ]
    ],
    [
        -44,
        [
            "ESOCKTNOSUPPORT",
            "socket type not supported"
        ]
    ]
];
const errorToCodeFreebsd = codeToErrorFreebsd.map(([status, [code]])=>[
        code,
        status
    ]);
const errorMap = new Map(osType === "windows" ? codeToErrorWindows : osType === "darwin" ? codeToErrorDarwin : osType === "linux" ? codeToErrorLinux : osType === "freebsd" ? codeToErrorFreebsd : unreachable());
const codeMap = new Map(osType === "windows" ? errorToCodeWindows : osType === "darwin" ? errorToCodeDarwin : osType === "linux" ? errorToCodeLinux : osType === "freebsd" ? errorToCodeFreebsd : unreachable());
function mapSysErrnoToUvErrno(sysErrno) {
    if (osType === "windows") {
        const code = uvTranslateSysError(sysErrno);
        return codeMap.get(code) ?? -sysErrno;
    } else {
        return -sysErrno;
    }
}
const UV_EAI_MEMORY = codeMap.get("EAI_MEMORY");
const UV_EBADF = codeMap.get("EBADF");
const UV_EEXIST = codeMap.get("EEXIST");
const UV_EINVAL = codeMap.get("EINVAL");
const UV_ENOENT = codeMap.get("ENOENT");
const UV_ENOTSOCK = codeMap.get("ENOTSOCK");
const UV_UNKNOWN = codeMap.get("UNKNOWN");
const mod = {
    errorMap: errorMap,
    codeMap: codeMap,
    mapSysErrnoToUvErrno: mapSysErrnoToUvErrno,
    UV_EAI_MEMORY: UV_EAI_MEMORY,
    UV_EBADF: UV_EBADF,
    UV_EEXIST: UV_EEXIST,
    UV_EINVAL: UV_EINVAL,
    UV_ENOENT: UV_ENOENT,
    UV_ENOTSOCK: UV_ENOTSOCK,
    UV_UNKNOWN: UV_UNKNOWN
};
const codes = {};
function notImplemented(msg) {
    const message = msg ? `Not implemented: ${msg}` : "Not implemented";
    throw new Error(message);
}
function warnNotImplemented(msg) {
    const message = msg ? `Warning: Not implemented: ${msg}` : "Warning: Not implemented";
    console.warn(message);
}
TextDecoder;
TextEncoder;
function spliceOne(list, index) {
    for(; index + 1 < list.length; index++)list[index] = list[index + 1];
    list.pop();
}
function normalizeEncoding(enc) {
    if (enc == null || enc === "utf8" || enc === "utf-8") return "utf8";
    return slowCases(enc);
}
function slowCases(enc) {
    switch(enc.length){
        case 4:
            if (enc === "UTF8") return "utf8";
            if (enc === "ucs2" || enc === "UCS2") return "utf16le";
            enc = `${enc}`.toLowerCase();
            if (enc === "utf8") return "utf8";
            if (enc === "ucs2") return "utf16le";
            break;
        case 3:
            if (enc === "hex" || enc === "HEX" || `${enc}`.toLowerCase() === "hex") {
                return "hex";
            }
            break;
        case 5:
            if (enc === "ascii") return "ascii";
            if (enc === "ucs-2") return "utf16le";
            if (enc === "UTF-8") return "utf8";
            if (enc === "ASCII") return "ascii";
            if (enc === "UCS-2") return "utf16le";
            enc = `${enc}`.toLowerCase();
            if (enc === "utf-8") return "utf8";
            if (enc === "ascii") return "ascii";
            if (enc === "ucs-2") return "utf16le";
            break;
        case 6:
            if (enc === "base64") return "base64";
            if (enc === "latin1" || enc === "binary") return "latin1";
            if (enc === "BASE64") return "base64";
            if (enc === "LATIN1" || enc === "BINARY") return "latin1";
            enc = `${enc}`.toLowerCase();
            if (enc === "base64") return "base64";
            if (enc === "latin1" || enc === "binary") return "latin1";
            break;
        case 7:
            if (enc === "utf16le" || enc === "UTF16LE" || `${enc}`.toLowerCase() === "utf16le") {
                return "utf16le";
            }
            break;
        case 8:
            if (enc === "utf-16le" || enc === "UTF-16LE" || `${enc}`.toLowerCase() === "utf-16le") {
                return "utf16le";
            }
            break;
        default:
            if (enc === "") return "utf8";
    }
}
const NumberIsSafeInteger = Number.isSafeInteger;
function getSystemErrorName(code) {
    if (typeof code !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE("err", "number", code);
    }
    if (code >= 0 || !NumberIsSafeInteger(code)) {
        throw new codes.ERR_OUT_OF_RANGE("err", "a negative integer", code);
    }
    return errorMap.get(code)?.[0];
}
var EOL;
(function(EOL) {
    EOL["LF"] = "\n";
    EOL["CRLF"] = "\r\n";
})(EOL || (EOL = {}));
let core;
const { Deno: Deno1  } = globalThis;
if (Deno1?.core) {
    core = Deno1.core;
} else {
    core = {
        runMicrotasks () {
            throw new Error("Deno.core.runMicrotasks() is not supported in this environment");
        },
        setHasTickScheduled () {
            throw new Error("Deno.core.setHasTickScheduled() is not supported in this environment");
        },
        hasTickScheduled () {
            throw new Error("Deno.core.hasTickScheduled() is not supported in this environment");
        },
        setNextTickCallback: undefined,
        setMacrotaskCallback () {
            throw new Error("Deno.core.setNextTickCallback() is not supported in this environment");
        },
        evalContext (_code, _filename) {
            throw new Error("Deno.core.evalContext is not supported in this environment");
        },
        encode (chunk) {
            return new TextEncoder().encode(chunk);
        },
        eventLoopHasMoreWork () {
            return false;
        },
        isProxy () {
            return false;
        },
        ops: {
            op_napi_open (_filename) {
                throw new Error("Node API is not supported in this environment");
            }
        }
    };
}
const _toString = Object.prototype.toString;
const _isObjectLike = (value)=>value !== null && typeof value === "object";
const _isFunctionLike = (value)=>value !== null && typeof value === "function";
function isAnyArrayBuffer(value) {
    return _isObjectLike(value) && (_toString.call(value) === "[object ArrayBuffer]" || _toString.call(value) === "[object SharedArrayBuffer]");
}
function isArgumentsObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Arguments]";
}
function isArrayBuffer(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object ArrayBuffer]";
}
function isAsyncFunction(value) {
    return _isFunctionLike(value) && _toString.call(value) === "[object AsyncFunction]";
}
function isBooleanObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Boolean]";
}
function isBoxedPrimitive(value) {
    return isBooleanObject(value) || isStringObject(value) || isNumberObject(value) || isSymbolObject(value) || isBigIntObject(value);
}
function isDataView(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object DataView]";
}
function isDate(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Date]";
}
function isGeneratorFunction(value) {
    return _isFunctionLike(value) && _toString.call(value) === "[object GeneratorFunction]";
}
function isGeneratorObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Generator]";
}
function isMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Map]";
}
function isMapIterator(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Map Iterator]";
}
function isModuleNamespaceObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Module]";
}
function isNativeError(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Error]";
}
function isNumberObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Number]";
}
function isBigIntObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object BigInt]";
}
function isPromise(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Promise]";
}
function isProxy(value) {
    return core.isProxy(value);
}
function isRegExp(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object RegExp]";
}
function isSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Set]";
}
function isSetIterator(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Set Iterator]";
}
function isSharedArrayBuffer(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object SharedArrayBuffer]";
}
function isStringObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object String]";
}
function isSymbolObject(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object Symbol]";
}
function isWeakMap(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakMap]";
}
function isWeakSet(value) {
    return _isObjectLike(value) && _toString.call(value) === "[object WeakSet]";
}
const __default1 = {
    isAsyncFunction,
    isGeneratorFunction,
    isAnyArrayBuffer,
    isArrayBuffer,
    isArgumentsObject,
    isBoxedPrimitive,
    isDataView,
    isMap,
    isMapIterator,
    isModuleNamespaceObject,
    isNativeError,
    isPromise,
    isSet,
    isSetIterator,
    isWeakMap,
    isWeakSet,
    isRegExp,
    isDate,
    isStringObject,
    isNumberObject,
    isBooleanObject,
    isBigIntObject
};
const mod1 = {
    isAnyArrayBuffer: isAnyArrayBuffer,
    isArgumentsObject: isArgumentsObject,
    isArrayBuffer: isArrayBuffer,
    isAsyncFunction: isAsyncFunction,
    isBooleanObject: isBooleanObject,
    isBoxedPrimitive: isBoxedPrimitive,
    isDataView: isDataView,
    isDate: isDate,
    isGeneratorFunction: isGeneratorFunction,
    isGeneratorObject: isGeneratorObject,
    isMap: isMap,
    isMapIterator: isMapIterator,
    isModuleNamespaceObject: isModuleNamespaceObject,
    isNativeError: isNativeError,
    isNumberObject: isNumberObject,
    isBigIntObject: isBigIntObject,
    isPromise: isPromise,
    isProxy: isProxy,
    isRegExp: isRegExp,
    isSet: isSet,
    isSetIterator: isSetIterator,
    isSharedArrayBuffer: isSharedArrayBuffer,
    isStringObject: isStringObject,
    isSymbolObject: isSymbolObject,
    isWeakMap: isWeakMap,
    isWeakSet: isWeakSet,
    default: __default1
};
Symbol("kHandle");
const kKeyObject = Symbol("kKeyObject");
const kKeyType = Symbol("kKeyType");
function isKeyObject(obj) {
    return obj != null && obj[kKeyType] !== undefined;
}
function isCryptoKey(obj) {
    return obj != null && obj[kKeyObject] !== undefined;
}
const _getTypedArrayToStringTag = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array).prototype, Symbol.toStringTag).get;
function isArrayBufferView(value) {
    return ArrayBuffer.isView(value);
}
function isBigInt64Array(value) {
    return _getTypedArrayToStringTag.call(value) === "BigInt64Array";
}
function isBigUint64Array(value) {
    return _getTypedArrayToStringTag.call(value) === "BigUint64Array";
}
function isFloat32Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Float32Array";
}
function isFloat64Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Float64Array";
}
function isInt8Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Int8Array";
}
function isInt16Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Int16Array";
}
function isInt32Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Int32Array";
}
function isTypedArray(value) {
    return _getTypedArrayToStringTag.call(value) !== undefined;
}
function isUint8Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Uint8Array";
}
function isUint8ClampedArray(value) {
    return _getTypedArrayToStringTag.call(value) === "Uint8ClampedArray";
}
function isUint16Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Uint16Array";
}
function isUint32Array(value) {
    return _getTypedArrayToStringTag.call(value) === "Uint32Array";
}
const { isDate: isDate1 , isArgumentsObject: isArgumentsObject1 , isBigIntObject: isBigIntObject1 , isBooleanObject: isBooleanObject1 , isNumberObject: isNumberObject1 , isStringObject: isStringObject1 , isSymbolObject: isSymbolObject1 , isNativeError: isNativeError1 , isRegExp: isRegExp1 , isAsyncFunction: isAsyncFunction1 , isGeneratorFunction: isGeneratorFunction1 , isGeneratorObject: isGeneratorObject1 , isPromise: isPromise1 , isMap: isMap1 , isSet: isSet1 , isMapIterator: isMapIterator1 , isSetIterator: isSetIterator1 , isWeakMap: isWeakMap1 , isWeakSet: isWeakSet1 , isArrayBuffer: isArrayBuffer1 , isDataView: isDataView1 , isSharedArrayBuffer: isSharedArrayBuffer1 , isProxy: isProxy1 , isModuleNamespaceObject: isModuleNamespaceObject1 , isAnyArrayBuffer: isAnyArrayBuffer1 , isBoxedPrimitive: isBoxedPrimitive1  } = mod1;
const mod2 = {
    isCryptoKey: isCryptoKey,
    isKeyObject: isKeyObject,
    isArrayBufferView: isArrayBufferView,
    isBigInt64Array: isBigInt64Array,
    isBigUint64Array: isBigUint64Array,
    isFloat32Array: isFloat32Array,
    isFloat64Array: isFloat64Array,
    isInt8Array: isInt8Array,
    isInt16Array: isInt16Array,
    isInt32Array: isInt32Array,
    isTypedArray: isTypedArray,
    isUint8Array: isUint8Array,
    isUint8ClampedArray: isUint8ClampedArray,
    isUint16Array: isUint16Array,
    isUint32Array: isUint32Array,
    isDate: isDate1,
    isArgumentsObject: isArgumentsObject1,
    isBigIntObject: isBigIntObject1,
    isBooleanObject: isBooleanObject1,
    isNumberObject: isNumberObject1,
    isStringObject: isStringObject1,
    isSymbolObject: isSymbolObject1,
    isNativeError: isNativeError1,
    isRegExp: isRegExp1,
    isAsyncFunction: isAsyncFunction1,
    isGeneratorFunction: isGeneratorFunction1,
    isGeneratorObject: isGeneratorObject1,
    isPromise: isPromise1,
    isMap: isMap1,
    isSet: isSet1,
    isMapIterator: isMapIterator1,
    isSetIterator: isSetIterator1,
    isWeakMap: isWeakMap1,
    isWeakSet: isWeakSet1,
    isArrayBuffer: isArrayBuffer1,
    isDataView: isDataView1,
    isSharedArrayBuffer: isSharedArrayBuffer1,
    isProxy: isProxy1,
    isModuleNamespaceObject: isModuleNamespaceObject1,
    isAnyArrayBuffer: isAnyArrayBuffer1,
    isBoxedPrimitive: isBoxedPrimitive1
};
function hideStackFrames(fn) {
    const hidden = "__node_internal_" + fn.name;
    Object.defineProperty(fn, "name", {
        value: hidden
    });
    return fn;
}
function normalizeEncoding1(enc) {
    if (enc == null || enc === "utf8" || enc === "utf-8") return "utf8";
    return slowCases1(enc);
}
function slowCases1(enc) {
    switch(enc.length){
        case 4:
            if (enc === "UTF8") return "utf8";
            if (enc === "ucs2" || enc === "UCS2") return "utf16le";
            enc = `${enc}`.toLowerCase();
            if (enc === "utf8") return "utf8";
            if (enc === "ucs2") return "utf16le";
            break;
        case 3:
            if (enc === "hex" || enc === "HEX" || `${enc}`.toLowerCase() === "hex") {
                return "hex";
            }
            break;
        case 5:
            if (enc === "ascii") return "ascii";
            if (enc === "ucs-2") return "utf16le";
            if (enc === "UTF-8") return "utf8";
            if (enc === "ASCII") return "ascii";
            if (enc === "UCS-2") return "utf16le";
            enc = `${enc}`.toLowerCase();
            if (enc === "utf-8") return "utf8";
            if (enc === "ascii") return "ascii";
            if (enc === "ucs-2") return "utf16le";
            break;
        case 6:
            if (enc === "base64") return "base64";
            if (enc === "latin1" || enc === "binary") return "latin1";
            if (enc === "BASE64") return "base64";
            if (enc === "LATIN1" || enc === "BINARY") return "latin1";
            enc = `${enc}`.toLowerCase();
            if (enc === "base64") return "base64";
            if (enc === "latin1" || enc === "binary") return "latin1";
            break;
        case 7:
            if (enc === "utf16le" || enc === "UTF16LE" || `${enc}`.toLowerCase() === "utf16le") {
                return "utf16le";
            }
            break;
        case 8:
            if (enc === "utf-16le" || enc === "UTF-16LE" || `${enc}`.toLowerCase() === "utf-16le") {
                return "utf16le";
            }
            break;
        case 9:
            if (enc === "base64url" || enc === "BASE64URL" || `${enc}`.toLowerCase() === "base64url") {
                return "base64url";
            }
            break;
        default:
            if (enc === "") return "utf8";
    }
}
function isInt32(value) {
    return value === (value | 0);
}
function isUint32(value) {
    return value === value >>> 0;
}
const validateBuffer = hideStackFrames((buffer, name = "buffer")=>{
    if (!isArrayBufferView(buffer)) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, [
            "Buffer",
            "TypedArray",
            "DataView"
        ], buffer);
    }
});
const validateInteger = hideStackFrames((value, name, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER)=>{
    if (typeof value !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
    if (!Number.isInteger(value)) {
        throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value);
    }
    if (value < min || value > max) {
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    }
});
const validateObject = hideStackFrames((value, name, options)=>{
    const useDefaultOptions = options == null;
    const allowArray = useDefaultOptions ? false : options.allowArray;
    const allowFunction = useDefaultOptions ? false : options.allowFunction;
    const nullable = useDefaultOptions ? false : options.nullable;
    if (!nullable && value === null || !allowArray && Array.isArray(value) || typeof value !== "object" && (!allowFunction || typeof value !== "function")) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "Object", value);
    }
});
const validateInt32 = hideStackFrames((value, name, min = -2147483648, max = 2147483647)=>{
    if (!isInt32(value)) {
        if (typeof value !== "number") {
            throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
        if (!Number.isInteger(value)) {
            throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value);
        }
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    }
    if (value < min || value > max) {
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    }
});
const validateUint32 = hideStackFrames((value, name, positive)=>{
    if (!isUint32(value)) {
        if (typeof value !== "number") {
            throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
        if (!Number.isInteger(value)) {
            throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value);
        }
        const min = positive ? 1 : 0;
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && < 4294967296`, value);
    }
    if (positive && value === 0) {
        throw new codes.ERR_OUT_OF_RANGE(name, ">= 1 && < 4294967296", value);
    }
});
function validateString(value, name) {
    if (typeof value !== "string") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "string", value);
    }
}
function validateBoolean(value, name) {
    if (typeof value !== "boolean") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "boolean", value);
    }
}
hideStackFrames((value, name, oneOf)=>{
    if (!Array.prototype.includes.call(oneOf, value)) {
        const allowed = Array.prototype.join.call(Array.prototype.map.call(oneOf, (v)=>typeof v === "string" ? `'${v}'` : String(v)), ", ");
        const reason = "must be one of: " + allowed;
        throw new codes.ERR_INVALID_ARG_VALUE(name, value, reason);
    }
});
const validateAbortSignal = hideStackFrames((signal, name)=>{
    if (signal !== undefined && (signal === null || typeof signal !== "object" || !("aborted" in signal))) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "AbortSignal", signal);
    }
});
const validateFunction = hideStackFrames((value, name)=>{
    if (typeof value !== "function") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "Function", value);
    }
});
hideStackFrames((value, name, minLength = 0)=>{
    if (!Array.isArray(value)) {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "Array", value);
    }
    if (value.length < minLength) {
        const reason = `must be longer than ${minLength}`;
        throw new codes.ERR_INVALID_ARG_VALUE(name, value, reason);
    }
});
function guessHandleType(_fd) {
    notImplemented("util.guessHandleType");
}
const isNumericLookup = {};
function isArrayIndex(value) {
    switch(typeof value){
        case "number":
            return value >= 0 && (value | 0) === value;
        case "string":
            {
                const result = isNumericLookup[value];
                if (result !== void 0) {
                    return result;
                }
                const length = value.length;
                if (length === 0) {
                    return isNumericLookup[value] = false;
                }
                let ch = 0;
                let i = 0;
                for(; i < length; ++i){
                    ch = value.charCodeAt(i);
                    if (i === 0 && ch === 0x30 && length > 1 || ch < 0x30 || ch > 0x39) {
                        return isNumericLookup[value] = false;
                    }
                }
                return isNumericLookup[value] = true;
            }
        default:
            return false;
    }
}
function getOwnNonIndexProperties(obj, filter) {
    let allProperties = [
        ...Object.getOwnPropertyNames(obj),
        ...Object.getOwnPropertySymbols(obj)
    ];
    if (Array.isArray(obj)) {
        allProperties = allProperties.filter((k)=>!isArrayIndex(k));
    }
    if (filter === 0) {
        return allProperties;
    }
    const result = [];
    for (const key of allProperties){
        const desc = Object.getOwnPropertyDescriptor(obj, key);
        if (desc === undefined) {
            continue;
        }
        if (filter & 1 && !desc.writable) {
            continue;
        }
        if (filter & 2 && !desc.enumerable) {
            continue;
        }
        if (filter & 4 && !desc.configurable) {
            continue;
        }
        if (filter & 8 && typeof key === "string") {
            continue;
        }
        if (filter & 16 && typeof key === "symbol") {
            continue;
        }
        result.push(key);
    }
    return result;
}
const mod3 = function() {
    return {
        guessHandleType: guessHandleType,
        ALL_PROPERTIES: 0,
        ONLY_WRITABLE: 1,
        ONLY_ENUMERABLE: 2,
        ONLY_CONFIGURABLE: 4,
        ONLY_ENUM_WRITABLE: 6,
        SKIP_STRINGS: 8,
        SKIP_SYMBOLS: 16,
        isArrayIndex: isArrayIndex,
        getOwnNonIndexProperties: getOwnNonIndexProperties
    };
}();
const kObjectType = 0;
const kArrayExtrasType = 2;
const kRejected = 2;
const meta = [
    '\\x00',
    '\\x01',
    '\\x02',
    '\\x03',
    '\\x04',
    '\\x05',
    '\\x06',
    '\\x07',
    '\\b',
    '\\t',
    '\\n',
    '\\x0B',
    '\\f',
    '\\r',
    '\\x0E',
    '\\x0F',
    '\\x10',
    '\\x11',
    '\\x12',
    '\\x13',
    '\\x14',
    '\\x15',
    '\\x16',
    '\\x17',
    '\\x18',
    '\\x19',
    '\\x1A',
    '\\x1B',
    '\\x1C',
    '\\x1D',
    '\\x1E',
    '\\x1F',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    "\\'",
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\x7F',
    '\\x80',
    '\\x81',
    '\\x82',
    '\\x83',
    '\\x84',
    '\\x85',
    '\\x86',
    '\\x87',
    '\\x88',
    '\\x89',
    '\\x8A',
    '\\x8B',
    '\\x8C',
    '\\x8D',
    '\\x8E',
    '\\x8F',
    '\\x90',
    '\\x91',
    '\\x92',
    '\\x93',
    '\\x94',
    '\\x95',
    '\\x96',
    '\\x97',
    '\\x98',
    '\\x99',
    '\\x9A',
    '\\x9B',
    '\\x9C',
    '\\x9D',
    '\\x9E',
    '\\x9F'
];
const isUndetectableObject = (v)=>typeof v === "undefined" && v !== undefined;
const strEscapeSequencesRegExp = /[\x00-\x1f\x27\x5c\x7f-\x9f]/;
const strEscapeSequencesReplacer = /[\x00-\x1f\x27\x5c\x7f-\x9f]/g;
const strEscapeSequencesRegExpSingle = /[\x00-\x1f\x5c\x7f-\x9f]/;
const strEscapeSequencesReplacerSingle = /[\x00-\x1f\x5c\x7f-\x9f]/g;
const keyStrRegExp = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
const numberRegExp = /^(0|[1-9][0-9]*)$/;
const nodeModulesRegExp = /[/\\]node_modules[/\\](.+?)(?=[/\\])/g;
const classRegExp = /^(\s+[^(]*?)\s*{/;
const stripCommentsRegExp = /(\/\/.*?\n)|(\/\*(.|\n)*?\*\/)/g;
const inspectDefaultOptions = {
    showHidden: false,
    depth: 2,
    colors: false,
    customInspect: true,
    showProxy: false,
    maxArrayLength: 100,
    maxStringLength: 10000,
    breakLength: 80,
    compact: 3,
    sorted: false,
    getters: false
};
function getUserOptions(ctx, isCrossContext) {
    const ret = {
        stylize: ctx.stylize,
        showHidden: ctx.showHidden,
        depth: ctx.depth,
        colors: ctx.colors,
        customInspect: ctx.customInspect,
        showProxy: ctx.showProxy,
        maxArrayLength: ctx.maxArrayLength,
        maxStringLength: ctx.maxStringLength,
        breakLength: ctx.breakLength,
        compact: ctx.compact,
        sorted: ctx.sorted,
        getters: ctx.getters,
        ...ctx.userOptions
    };
    if (isCrossContext) {
        Object.setPrototypeOf(ret, null);
        for (const key of Object.keys(ret)){
            if ((typeof ret[key] === "object" || typeof ret[key] === "function") && ret[key] !== null) {
                delete ret[key];
            }
        }
        ret.stylize = Object.setPrototypeOf((value, flavour)=>{
            let stylized;
            try {
                stylized = `${ctx.stylize(value, flavour)}`;
            } catch  {}
            if (typeof stylized !== "string") return value;
            return stylized;
        }, null);
    }
    return ret;
}
function inspect(value, opts) {
    const ctx = {
        budget: {},
        indentationLvl: 0,
        seen: [],
        currentDepth: 0,
        stylize: stylizeNoColor,
        showHidden: inspectDefaultOptions.showHidden,
        depth: inspectDefaultOptions.depth,
        colors: inspectDefaultOptions.colors,
        customInspect: inspectDefaultOptions.customInspect,
        showProxy: inspectDefaultOptions.showProxy,
        maxArrayLength: inspectDefaultOptions.maxArrayLength,
        maxStringLength: inspectDefaultOptions.maxStringLength,
        breakLength: inspectDefaultOptions.breakLength,
        compact: inspectDefaultOptions.compact,
        sorted: inspectDefaultOptions.sorted,
        getters: inspectDefaultOptions.getters
    };
    if (arguments.length > 1) {
        if (arguments.length > 2) {
            if (arguments[2] !== undefined) {
                ctx.depth = arguments[2];
            }
            if (arguments.length > 3 && arguments[3] !== undefined) {
                ctx.colors = arguments[3];
            }
        }
        if (typeof opts === "boolean") {
            ctx.showHidden = opts;
        } else if (opts) {
            const optKeys = Object.keys(opts);
            for(let i = 0; i < optKeys.length; ++i){
                const key = optKeys[i];
                if (inspectDefaultOptions.hasOwnProperty(key) || key === "stylize") {
                    ctx[key] = opts[key];
                } else if (ctx.userOptions === undefined) {
                    ctx.userOptions = opts;
                }
            }
        }
    }
    if (ctx.colors) ctx.stylize = stylizeWithColor;
    if (ctx.maxArrayLength === null) ctx.maxArrayLength = Infinity;
    if (ctx.maxStringLength === null) ctx.maxStringLength = Infinity;
    return formatValue(ctx, value, 0);
}
const customInspectSymbol = Symbol.for("nodejs.util.inspect.custom");
inspect.custom = customInspectSymbol;
Object.defineProperty(inspect, "defaultOptions", {
    get () {
        return inspectDefaultOptions;
    },
    set (options) {
        validateObject(options, "options");
        return Object.assign(inspectDefaultOptions, options);
    }
});
const defaultFG = 39;
const defaultBG = 49;
inspect.colors = Object.assign(Object.create(null), {
    reset: [
        0,
        0
    ],
    bold: [
        1,
        22
    ],
    dim: [
        2,
        22
    ],
    italic: [
        3,
        23
    ],
    underline: [
        4,
        24
    ],
    blink: [
        5,
        25
    ],
    inverse: [
        7,
        27
    ],
    hidden: [
        8,
        28
    ],
    strikethrough: [
        9,
        29
    ],
    doubleunderline: [
        21,
        24
    ],
    black: [
        30,
        defaultFG
    ],
    red: [
        31,
        defaultFG
    ],
    green: [
        32,
        defaultFG
    ],
    yellow: [
        33,
        defaultFG
    ],
    blue: [
        34,
        defaultFG
    ],
    magenta: [
        35,
        defaultFG
    ],
    cyan: [
        36,
        defaultFG
    ],
    white: [
        37,
        defaultFG
    ],
    bgBlack: [
        40,
        defaultBG
    ],
    bgRed: [
        41,
        defaultBG
    ],
    bgGreen: [
        42,
        defaultBG
    ],
    bgYellow: [
        43,
        defaultBG
    ],
    bgBlue: [
        44,
        defaultBG
    ],
    bgMagenta: [
        45,
        defaultBG
    ],
    bgCyan: [
        46,
        defaultBG
    ],
    bgWhite: [
        47,
        defaultBG
    ],
    framed: [
        51,
        54
    ],
    overlined: [
        53,
        55
    ],
    gray: [
        90,
        defaultFG
    ],
    redBright: [
        91,
        defaultFG
    ],
    greenBright: [
        92,
        defaultFG
    ],
    yellowBright: [
        93,
        defaultFG
    ],
    blueBright: [
        94,
        defaultFG
    ],
    magentaBright: [
        95,
        defaultFG
    ],
    cyanBright: [
        96,
        defaultFG
    ],
    whiteBright: [
        97,
        defaultFG
    ],
    bgGray: [
        100,
        defaultBG
    ],
    bgRedBright: [
        101,
        defaultBG
    ],
    bgGreenBright: [
        102,
        defaultBG
    ],
    bgYellowBright: [
        103,
        defaultBG
    ],
    bgBlueBright: [
        104,
        defaultBG
    ],
    bgMagentaBright: [
        105,
        defaultBG
    ],
    bgCyanBright: [
        106,
        defaultBG
    ],
    bgWhiteBright: [
        107,
        defaultBG
    ]
});
function defineColorAlias(target, alias) {
    Object.defineProperty(inspect.colors, alias, {
        get () {
            return this[target];
        },
        set (value) {
            this[target] = value;
        },
        configurable: true,
        enumerable: false
    });
}
defineColorAlias("gray", "grey");
defineColorAlias("gray", "blackBright");
defineColorAlias("bgGray", "bgGrey");
defineColorAlias("bgGray", "bgBlackBright");
defineColorAlias("dim", "faint");
defineColorAlias("strikethrough", "crossedout");
defineColorAlias("strikethrough", "strikeThrough");
defineColorAlias("strikethrough", "crossedOut");
defineColorAlias("hidden", "conceal");
defineColorAlias("inverse", "swapColors");
defineColorAlias("inverse", "swapcolors");
defineColorAlias("doubleunderline", "doubleUnderline");
inspect.styles = Object.assign(Object.create(null), {
    special: "cyan",
    number: "yellow",
    bigint: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    symbol: "green",
    date: "magenta",
    regexp: "red",
    module: "underline"
});
function addQuotes(str, quotes) {
    if (quotes === -1) {
        return `"${str}"`;
    }
    if (quotes === -2) {
        return `\`${str}\``;
    }
    return `'${str}'`;
}
const escapeFn = (str)=>meta[str.charCodeAt(0)];
function strEscape(str) {
    let escapeTest = strEscapeSequencesRegExp;
    let escapeReplace = strEscapeSequencesReplacer;
    let singleQuote = 39;
    if (str.includes("'")) {
        if (!str.includes('"')) {
            singleQuote = -1;
        } else if (!str.includes("`") && !str.includes("${")) {
            singleQuote = -2;
        }
        if (singleQuote !== 39) {
            escapeTest = strEscapeSequencesRegExpSingle;
            escapeReplace = strEscapeSequencesReplacerSingle;
        }
    }
    if (str.length < 5000 && !escapeTest.test(str)) {
        return addQuotes(str, singleQuote);
    }
    if (str.length > 100) {
        str = str.replace(escapeReplace, escapeFn);
        return addQuotes(str, singleQuote);
    }
    let result = "";
    let last = 0;
    const lastIndex = str.length;
    for(let i = 0; i < lastIndex; i++){
        const point = str.charCodeAt(i);
        if (point === singleQuote || point === 92 || point < 32 || point > 126 && point < 160) {
            if (last === i) {
                result += meta[point];
            } else {
                result += `${str.slice(last, i)}${meta[point]}`;
            }
            last = i + 1;
        }
    }
    if (last !== lastIndex) {
        result += str.slice(last);
    }
    return addQuotes(result, singleQuote);
}
function stylizeWithColor(str, styleType) {
    const style = inspect.styles[styleType];
    if (style !== undefined) {
        const color = inspect.colors[style];
        if (color !== undefined) {
            return `\u001b[${color[0]}m${str}\u001b[${color[1]}m`;
        }
    }
    return str;
}
function stylizeNoColor(str) {
    return str;
}
function formatValue(ctx, value, recurseTimes, typedArray) {
    if (typeof value !== "object" && typeof value !== "function" && !isUndetectableObject(value)) {
        return formatPrimitive(ctx.stylize, value, ctx);
    }
    if (value === null) {
        return ctx.stylize("null", "null");
    }
    const context = value;
    const proxy = undefined;
    if (ctx.customInspect) {
        const maybeCustom = value[customInspectSymbol];
        if (typeof maybeCustom === "function" && maybeCustom !== inspect && !(value.constructor && value.constructor.prototype === value)) {
            const depth = ctx.depth === null ? null : ctx.depth - recurseTimes;
            const isCrossContext = proxy !== undefined || !(context instanceof Object);
            const ret = maybeCustom.call(context, depth, getUserOptions(ctx, isCrossContext));
            if (ret !== context) {
                if (typeof ret !== "string") {
                    return formatValue(ctx, ret, recurseTimes);
                }
                return ret.replace(/\n/g, `\n${" ".repeat(ctx.indentationLvl)}`);
            }
        }
    }
    if (ctx.seen.includes(value)) {
        let index = 1;
        if (ctx.circular === undefined) {
            ctx.circular = new Map();
            ctx.circular.set(value, index);
        } else {
            index = ctx.circular.get(value);
            if (index === undefined) {
                index = ctx.circular.size + 1;
                ctx.circular.set(value, index);
            }
        }
        return ctx.stylize(`[Circular *${index}]`, "special");
    }
    return formatRaw(ctx, value, recurseTimes, typedArray);
}
function formatRaw(ctx, value, recurseTimes, typedArray) {
    let keys;
    let protoProps;
    if (ctx.showHidden && (recurseTimes <= ctx.depth || ctx.depth === null)) {
        protoProps = [];
    }
    const constructor = getConstructorName(value, ctx, recurseTimes, protoProps);
    if (protoProps !== undefined && protoProps.length === 0) {
        protoProps = undefined;
    }
    let tag = value[Symbol.toStringTag];
    if (typeof tag !== "string") {
        tag = "";
    }
    let base = "";
    let formatter = getEmptyFormatArray;
    let braces;
    let noIterator = true;
    let i = 0;
    const filter = ctx.showHidden ? 0 : 2;
    let extrasType = 0;
    if (value[Symbol.iterator] || constructor === null) {
        noIterator = false;
        if (Array.isArray(value)) {
            const prefix = constructor !== "Array" || tag !== "" ? getPrefix(constructor, tag, "Array", `(${value.length})`) : "";
            keys = getOwnNonIndexProperties(value, filter);
            braces = [
                `${prefix}[`,
                "]"
            ];
            if (value.length === 0 && keys.length === 0 && protoProps === undefined) {
                return `${braces[0]}]`;
            }
            extrasType = kArrayExtrasType;
            formatter = formatArray;
        } else if (isSet1(value)) {
            const size = value.size;
            const prefix1 = getPrefix(constructor, tag, "Set", `(${size})`);
            keys = getKeys(value, ctx.showHidden);
            formatter = constructor !== null ? formatSet.bind(null, value) : formatSet.bind(null, value.values());
            if (size === 0 && keys.length === 0 && protoProps === undefined) {
                return `${prefix1}{}`;
            }
            braces = [
                `${prefix1}{`,
                "}"
            ];
        } else if (isMap1(value)) {
            const size1 = value.size;
            const prefix2 = getPrefix(constructor, tag, "Map", `(${size1})`);
            keys = getKeys(value, ctx.showHidden);
            formatter = constructor !== null ? formatMap.bind(null, value) : formatMap.bind(null, value.entries());
            if (size1 === 0 && keys.length === 0 && protoProps === undefined) {
                return `${prefix2}{}`;
            }
            braces = [
                `${prefix2}{`,
                "}"
            ];
        } else if (isTypedArray(value)) {
            keys = getOwnNonIndexProperties(value, filter);
            const bound = value;
            const fallback = "";
            if (constructor === null) {}
            const size2 = value.length;
            const prefix3 = getPrefix(constructor, tag, fallback, `(${size2})`);
            braces = [
                `${prefix3}[`,
                "]"
            ];
            if (value.length === 0 && keys.length === 0 && !ctx.showHidden) {
                return `${braces[0]}]`;
            }
            formatter = formatTypedArray.bind(null, bound, size2);
            extrasType = kArrayExtrasType;
        } else if (isMapIterator1(value)) {
            keys = getKeys(value, ctx.showHidden);
            braces = getIteratorBraces("Map", tag);
            formatter = formatIterator.bind(null, braces);
        } else if (isSetIterator1(value)) {
            keys = getKeys(value, ctx.showHidden);
            braces = getIteratorBraces("Set", tag);
            formatter = formatIterator.bind(null, braces);
        } else {
            noIterator = true;
        }
    }
    if (noIterator) {
        keys = getKeys(value, ctx.showHidden);
        braces = [
            "{",
            "}"
        ];
        if (constructor === "Object") {
            if (isArgumentsObject1(value)) {
                braces[0] = "[Arguments] {";
            } else if (tag !== "") {
                braces[0] = `${getPrefix(constructor, tag, "Object")}{`;
            }
            if (keys.length === 0 && protoProps === undefined) {
                return `${braces[0]}}`;
            }
        } else if (typeof value === "function") {
            base = getFunctionBase(value, constructor, tag);
            if (keys.length === 0 && protoProps === undefined) {
                return ctx.stylize(base, "special");
            }
        } else if (isRegExp1(value)) {
            base = RegExp(constructor !== null ? value : new RegExp(value)).toString();
            const prefix4 = getPrefix(constructor, tag, "RegExp");
            if (prefix4 !== "RegExp ") {
                base = `${prefix4}${base}`;
            }
            if (keys.length === 0 && protoProps === undefined || recurseTimes > ctx.depth && ctx.depth !== null) {
                return ctx.stylize(base, "regexp");
            }
        } else if (isDate1(value)) {
            base = Number.isNaN(value.getTime()) ? value.toString() : value.toISOString();
            const prefix5 = getPrefix(constructor, tag, "Date");
            if (prefix5 !== "Date ") {
                base = `${prefix5}${base}`;
            }
            if (keys.length === 0 && protoProps === undefined) {
                return ctx.stylize(base, "date");
            }
        } else if (value instanceof Error) {
            base = formatError(value, constructor, tag, ctx, keys);
            if (keys.length === 0 && protoProps === undefined) {
                return base;
            }
        } else if (isAnyArrayBuffer1(value)) {
            const arrayType = isArrayBuffer1(value) ? "ArrayBuffer" : "SharedArrayBuffer";
            const prefix6 = getPrefix(constructor, tag, arrayType);
            if (typedArray === undefined) {
                formatter = formatArrayBuffer;
            } else if (keys.length === 0 && protoProps === undefined) {
                return prefix6 + `{ byteLength: ${formatNumber(ctx.stylize, value.byteLength)} }`;
            }
            braces[0] = `${prefix6}{`;
            Array.prototype.unshift.call(keys, "byteLength");
        } else if (isDataView1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "DataView")}{`;
            Array.prototype.unshift.call(keys, "byteLength", "byteOffset", "buffer");
        } else if (isPromise1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "Promise")}{`;
            formatter = formatPromise;
        } else if (isWeakSet1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "WeakSet")}{`;
            formatter = ctx.showHidden ? formatWeakSet : formatWeakCollection;
        } else if (isWeakMap1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "WeakMap")}{`;
            formatter = ctx.showHidden ? formatWeakMap : formatWeakCollection;
        } else if (isModuleNamespaceObject1(value)) {
            braces[0] = `${getPrefix(constructor, tag, "Module")}{`;
            formatter = formatNamespaceObject.bind(null, keys);
        } else if (isBoxedPrimitive1(value)) {
            base = getBoxedBase(value, ctx, keys, constructor, tag);
            if (keys.length === 0 && protoProps === undefined) {
                return base;
            }
        } else {
            if (keys.length === 0 && protoProps === undefined) {
                return `${getCtxStyle(value, constructor, tag)}{}`;
            }
            braces[0] = `${getCtxStyle(value, constructor, tag)}{`;
        }
    }
    if (recurseTimes > ctx.depth && ctx.depth !== null) {
        let constructorName = getCtxStyle(value, constructor, tag).slice(0, -1);
        if (constructor !== null) {
            constructorName = `[${constructorName}]`;
        }
        return ctx.stylize(constructorName, "special");
    }
    recurseTimes += 1;
    ctx.seen.push(value);
    ctx.currentDepth = recurseTimes;
    let output;
    const indentationLvl = ctx.indentationLvl;
    try {
        output = formatter(ctx, value, recurseTimes);
        for(i = 0; i < keys.length; i++){
            output.push(formatProperty(ctx, value, recurseTimes, keys[i], extrasType));
        }
        if (protoProps !== undefined) {
            output.push(...protoProps);
        }
    } catch (err) {
        const constructorName1 = getCtxStyle(value, constructor, tag).slice(0, -1);
        return handleMaxCallStackSize(ctx, err, constructorName1, indentationLvl);
    }
    if (ctx.circular !== undefined) {
        const index = ctx.circular.get(value);
        if (index !== undefined) {
            const reference = ctx.stylize(`<ref *${index}>`, "special");
            if (ctx.compact !== true) {
                base = base === "" ? reference : `${reference} ${base}`;
            } else {
                braces[0] = `${reference} ${braces[0]}`;
            }
        }
    }
    ctx.seen.pop();
    if (ctx.sorted) {
        const comparator = ctx.sorted === true ? undefined : ctx.sorted;
        if (extrasType === 0) {
            output = output.sort(comparator);
        } else if (keys.length > 1) {
            const sorted = output.slice(output.length - keys.length).sort(comparator);
            output.splice(output.length - keys.length, keys.length, ...sorted);
        }
    }
    const res = reduceToSingleString(ctx, output, base, braces, extrasType, recurseTimes, value);
    const budget = ctx.budget[ctx.indentationLvl] || 0;
    const newLength = budget + res.length;
    ctx.budget[ctx.indentationLvl] = newLength;
    if (newLength > 2 ** 27) {
        ctx.depth = -1;
    }
    return res;
}
const builtInObjects = new Set(Object.getOwnPropertyNames(globalThis).filter((e)=>/^[A-Z][a-zA-Z0-9]+$/.test(e)));
function addPrototypeProperties(ctx, main, obj, recurseTimes, output) {
    let depth = 0;
    let keys;
    let keySet;
    do {
        if (depth !== 0 || main === obj) {
            obj = Object.getPrototypeOf(obj);
            if (obj === null) {
                return;
            }
            const descriptor = Object.getOwnPropertyDescriptor(obj, "constructor");
            if (descriptor !== undefined && typeof descriptor.value === "function" && builtInObjects.has(descriptor.value.name)) {
                return;
            }
        }
        if (depth === 0) {
            keySet = new Set();
        } else {
            Array.prototype.forEach.call(keys, (key)=>keySet.add(key));
        }
        keys = Reflect.ownKeys(obj);
        Array.prototype.push.call(ctx.seen, main);
        for (const key of keys){
            if (key === "constructor" || main.hasOwnProperty(key) || depth !== 0 && keySet.has(key)) {
                continue;
            }
            const desc = Object.getOwnPropertyDescriptor(obj, key);
            if (typeof desc.value === "function") {
                continue;
            }
            const value = formatProperty(ctx, obj, recurseTimes, key, 0, desc, main);
            if (ctx.colors) {
                Array.prototype.push.call(output, `\u001b[2m${value}\u001b[22m`);
            } else {
                Array.prototype.push.call(output, value);
            }
        }
        Array.prototype.pop.call(ctx.seen);
    }while (++depth !== 3)
}
function getConstructorName(obj, ctx, recurseTimes, protoProps) {
    let firstProto;
    const tmp = obj;
    while(obj || isUndetectableObject(obj)){
        const descriptor = Object.getOwnPropertyDescriptor(obj, "constructor");
        if (descriptor !== undefined && typeof descriptor.value === "function" && descriptor.value.name !== "" && isInstanceof(tmp, descriptor.value)) {
            if (protoProps !== undefined && (firstProto !== obj || !builtInObjects.has(descriptor.value.name))) {
                addPrototypeProperties(ctx, tmp, firstProto || tmp, recurseTimes, protoProps);
            }
            return descriptor.value.name;
        }
        obj = Object.getPrototypeOf(obj);
        if (firstProto === undefined) {
            firstProto = obj;
        }
    }
    if (firstProto === null) {
        return null;
    }
    const res = undefined;
    if (recurseTimes > ctx.depth && ctx.depth !== null) {
        return `${res} <Complex prototype>`;
    }
    const protoConstr = getConstructorName(firstProto, ctx, recurseTimes + 1, protoProps);
    if (protoConstr === null) {
        return `${res} <${inspect(firstProto, {
            ...ctx,
            customInspect: false,
            depth: -1
        })}>`;
    }
    return `${res} <${protoConstr}>`;
}
function formatPrimitive(fn, value, ctx) {
    if (typeof value === "string") {
        let trailer = "";
        if (value.length > ctx.maxStringLength) {
            const remaining = value.length - ctx.maxStringLength;
            value = value.slice(0, ctx.maxStringLength);
            trailer = `... ${remaining} more character${remaining > 1 ? "s" : ""}`;
        }
        if (ctx.compact !== true && value.length > 16 && value.length > ctx.breakLength - ctx.indentationLvl - 4) {
            return value.split(/(?<=\n)/).map((line)=>fn(strEscape(line), "string")).join(` +\n${" ".repeat(ctx.indentationLvl + 2)}`) + trailer;
        }
        return fn(strEscape(value), "string") + trailer;
    }
    if (typeof value === "number") {
        return formatNumber(fn, value);
    }
    if (typeof value === "bigint") {
        return formatBigInt(fn, value);
    }
    if (typeof value === "boolean") {
        return fn(`${value}`, "boolean");
    }
    if (typeof value === "undefined") {
        return fn("undefined", "undefined");
    }
    return fn(value.toString(), "symbol");
}
function getEmptyFormatArray() {
    return [];
}
function isInstanceof(object, proto) {
    try {
        return object instanceof proto;
    } catch  {
        return false;
    }
}
function getPrefix(constructor, tag, fallback, size = "") {
    if (constructor === null) {
        if (tag !== "" && fallback !== tag) {
            return `[${fallback}${size}: null prototype] [${tag}] `;
        }
        return `[${fallback}${size}: null prototype] `;
    }
    if (tag !== "" && constructor !== tag) {
        return `${constructor}${size} [${tag}] `;
    }
    return `${constructor}${size} `;
}
function formatArray(ctx, value, recurseTimes) {
    const valLen = value.length;
    const len = Math.min(Math.max(0, ctx.maxArrayLength), valLen);
    const remaining = valLen - len;
    const output = [];
    for(let i = 0; i < len; i++){
        if (!value.hasOwnProperty(i)) {
            return formatSpecialArray(ctx, value, recurseTimes, len, output, i);
        }
        output.push(formatProperty(ctx, value, recurseTimes, i, 1));
    }
    if (remaining > 0) {
        output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`);
    }
    return output;
}
function getCtxStyle(_value, constructor, tag) {
    let fallback = "";
    if (constructor === null) {
        if (fallback === tag) {
            fallback = "Object";
        }
    }
    return getPrefix(constructor, tag, fallback);
}
function getKeys(value, showHidden) {
    let keys;
    const symbols = Object.getOwnPropertySymbols(value);
    if (showHidden) {
        keys = Object.getOwnPropertyNames(value);
        if (symbols.length !== 0) {
            Array.prototype.push.apply(keys, symbols);
        }
    } else {
        try {
            keys = Object.keys(value);
        } catch (_err) {
            keys = Object.getOwnPropertyNames(value);
        }
        if (symbols.length !== 0) {}
    }
    return keys;
}
function formatSet(value, ctx, _ignored, recurseTimes) {
    const output = [];
    ctx.indentationLvl += 2;
    for (const v of value){
        Array.prototype.push.call(output, formatValue(ctx, v, recurseTimes));
    }
    ctx.indentationLvl -= 2;
    return output;
}
function formatMap(value, ctx, _gnored, recurseTimes) {
    const output = [];
    ctx.indentationLvl += 2;
    for (const { 0: k , 1: v  } of value){
        output.push(`${formatValue(ctx, k, recurseTimes)} => ${formatValue(ctx, v, recurseTimes)}`);
    }
    ctx.indentationLvl -= 2;
    return output;
}
function formatTypedArray(value, length, ctx, _ignored, recurseTimes) {
    const maxLength = Math.min(Math.max(0, ctx.maxArrayLength), length);
    const remaining = value.length - maxLength;
    const output = new Array(maxLength);
    const elementFormatter = value.length > 0 && typeof value[0] === "number" ? formatNumber : formatBigInt;
    for(let i = 0; i < maxLength; ++i){
        output[i] = elementFormatter(ctx.stylize, value[i]);
    }
    if (remaining > 0) {
        output[maxLength] = `... ${remaining} more item${remaining > 1 ? "s" : ""}`;
    }
    if (ctx.showHidden) {
        ctx.indentationLvl += 2;
        for (const key of [
            "BYTES_PER_ELEMENT",
            "length",
            "byteLength",
            "byteOffset",
            "buffer"
        ]){
            const str = formatValue(ctx, value[key], recurseTimes, true);
            Array.prototype.push.call(output, `[${key}]: ${str}`);
        }
        ctx.indentationLvl -= 2;
    }
    return output;
}
function getIteratorBraces(type, tag) {
    if (tag !== `${type} Iterator`) {
        if (tag !== "") {
            tag += "] [";
        }
        tag += `${type} Iterator`;
    }
    return [
        `[${tag}] {`,
        "}"
    ];
}
function formatIterator(braces, ctx, value, recurseTimes) {
    const { 0: entries , 1: isKeyValue  } = value;
    if (isKeyValue) {
        braces[0] = braces[0].replace(/ Iterator] {$/, " Entries] {");
        return formatMapIterInner(ctx, recurseTimes, entries, 2);
    }
    return formatSetIterInner(ctx, recurseTimes, entries, 1);
}
function getFunctionBase(value, constructor, tag) {
    const stringified = Function.prototype.toString.call(value);
    if (stringified.slice(0, 5) === "class" && stringified.endsWith("}")) {
        const slice = stringified.slice(5, -1);
        const bracketIndex = slice.indexOf("{");
        if (bracketIndex !== -1 && (!slice.slice(0, bracketIndex).includes("(") || classRegExp.test(slice.replace(stripCommentsRegExp)))) {
            return getClassBase(value, constructor, tag);
        }
    }
    let type = "Function";
    if (isGeneratorFunction1(value)) {
        type = `Generator${type}`;
    }
    if (isAsyncFunction1(value)) {
        type = `Async${type}`;
    }
    let base = `[${type}`;
    if (constructor === null) {
        base += " (null prototype)";
    }
    if (value.name === "") {
        base += " (anonymous)";
    } else {
        base += `: ${value.name}`;
    }
    base += "]";
    if (constructor !== type && constructor !== null) {
        base += ` ${constructor}`;
    }
    if (tag !== "" && constructor !== tag) {
        base += ` [${tag}]`;
    }
    return base;
}
function formatError(err, constructor, tag, ctx, keys) {
    const name = err.name != null ? String(err.name) : "Error";
    let len = name.length;
    let stack = err.stack ? String(err.stack) : err.toString();
    if (!ctx.showHidden && keys.length !== 0) {
        for (const name1 of [
            "name",
            "message",
            "stack"
        ]){
            const index = keys.indexOf(name1);
            if (index !== -1 && stack.includes(err[name1])) {
                keys.splice(index, 1);
            }
        }
    }
    if (constructor === null || name.endsWith("Error") && stack.startsWith(name) && (stack.length === len || stack[len] === ":" || stack[len] === "\n")) {
        let fallback = "Error";
        if (constructor === null) {
            const start = stack.match(/^([A-Z][a-z_ A-Z0-9[\]()-]+)(?::|\n {4}at)/) || stack.match(/^([a-z_A-Z0-9-]*Error)$/);
            fallback = start && start[1] || "";
            len = fallback.length;
            fallback = fallback || "Error";
        }
        const prefix = getPrefix(constructor, tag, fallback).slice(0, -1);
        if (name !== prefix) {
            if (prefix.includes(name)) {
                if (len === 0) {
                    stack = `${prefix}: ${stack}`;
                } else {
                    stack = `${prefix}${stack.slice(len)}`;
                }
            } else {
                stack = `${prefix} [${name}]${stack.slice(len)}`;
            }
        }
    }
    let pos = err.message && stack.indexOf(err.message) || -1;
    if (pos !== -1) {
        pos += err.message.length;
    }
    const stackStart = stack.indexOf("\n    at", pos);
    if (stackStart === -1) {
        stack = `[${stack}]`;
    } else if (ctx.colors) {
        let newStack = stack.slice(0, stackStart);
        const lines = stack.slice(stackStart + 1).split("\n");
        for (const line of lines){
            let nodeModule;
            newStack += "\n";
            let pos1 = 0;
            while(nodeModule = nodeModulesRegExp.exec(line)){
                newStack += line.slice(pos1, nodeModule.index + 14);
                newStack += ctx.stylize(nodeModule[1], "module");
                pos1 = nodeModule.index + nodeModule[0].length;
            }
            newStack += pos1 === 0 ? line : line.slice(pos1);
        }
        stack = newStack;
    }
    if (ctx.indentationLvl !== 0) {
        const indentation = " ".repeat(ctx.indentationLvl);
        stack = stack.replace(/\n/g, `\n${indentation}`);
    }
    return stack;
}
let hexSlice;
function formatArrayBuffer(ctx, value) {
    let buffer;
    try {
        buffer = new Uint8Array(value);
    } catch  {
        return [
            ctx.stylize("(detached)", "special")
        ];
    }
    let str = hexSlice(buffer, 0, Math.min(ctx.maxArrayLength, buffer.length)).replace(/(.{2})/g, "$1 ").trim();
    const remaining = buffer.length - ctx.maxArrayLength;
    if (remaining > 0) {
        str += ` ... ${remaining} more byte${remaining > 1 ? "s" : ""}`;
    }
    return [
        `${ctx.stylize("[Uint8Contents]", "special")}: <${str}>`
    ];
}
function formatNumber(fn, value) {
    return fn(Object.is(value, -0) ? "-0" : `${value}`, "number");
}
function formatPromise(ctx, value, recurseTimes) {
    let output;
    const { 0: state , 1: result  } = value;
    if (state === 0) {
        output = [
            ctx.stylize("<pending>", "special")
        ];
    } else {
        ctx.indentationLvl += 2;
        const str = formatValue(ctx, result, recurseTimes);
        ctx.indentationLvl -= 2;
        output = [
            state === kRejected ? `${ctx.stylize("<rejected>", "special")} ${str}` : str
        ];
    }
    return output;
}
function formatWeakCollection(ctx) {
    return [
        ctx.stylize("<items unknown>", "special")
    ];
}
function formatWeakSet(ctx, value, recurseTimes) {
    const entries = value;
    return formatSetIterInner(ctx, recurseTimes, entries, 0);
}
function formatWeakMap(ctx, value, recurseTimes) {
    const entries = value;
    return formatMapIterInner(ctx, recurseTimes, entries, 0);
}
function formatProperty(ctx, value, recurseTimes, key, type, desc, original = value) {
    let name, str;
    let extra = " ";
    desc = desc || Object.getOwnPropertyDescriptor(value, key) || {
        value: value[key],
        enumerable: true
    };
    if (desc.value !== undefined) {
        const diff = ctx.compact !== true || type !== 0 ? 2 : 3;
        ctx.indentationLvl += diff;
        str = formatValue(ctx, desc.value, recurseTimes);
        if (diff === 3 && ctx.breakLength < getStringWidth(str, ctx.colors)) {
            extra = `\n${" ".repeat(ctx.indentationLvl)}`;
        }
        ctx.indentationLvl -= diff;
    } else if (desc.get !== undefined) {
        const label = desc.set !== undefined ? "Getter/Setter" : "Getter";
        const s = ctx.stylize;
        const sp = "special";
        if (ctx.getters && (ctx.getters === true || ctx.getters === "get" && desc.set === undefined || ctx.getters === "set" && desc.set !== undefined)) {
            try {
                const tmp = desc.get.call(original);
                ctx.indentationLvl += 2;
                if (tmp === null) {
                    str = `${s(`[${label}:`, sp)} ${s("null", "null")}${s("]", sp)}`;
                } else if (typeof tmp === "object") {
                    str = `${s(`[${label}]`, sp)} ${formatValue(ctx, tmp, recurseTimes)}`;
                } else {
                    const primitive = formatPrimitive(s, tmp, ctx);
                    str = `${s(`[${label}:`, sp)} ${primitive}${s("]", sp)}`;
                }
                ctx.indentationLvl -= 2;
            } catch (err) {
                const message = `<Inspection threw (${err.message})>`;
                str = `${s(`[${label}:`, sp)} ${message}${s("]", sp)}`;
            }
        } else {
            str = ctx.stylize(`[${label}]`, sp);
        }
    } else if (desc.set !== undefined) {
        str = ctx.stylize("[Setter]", "special");
    } else {
        str = ctx.stylize("undefined", "undefined");
    }
    if (type === 1) {
        return str;
    }
    if (typeof key === "symbol") {
        const tmp1 = key.toString().replace(strEscapeSequencesReplacer, escapeFn);
        name = `[${ctx.stylize(tmp1, "symbol")}]`;
    } else if (key === "__proto__") {
        name = "['__proto__']";
    } else if (desc.enumerable === false) {
        const tmp2 = key.replace(strEscapeSequencesReplacer, escapeFn);
        name = `[${tmp2}]`;
    } else if (keyStrRegExp.test(key)) {
        name = ctx.stylize(key, "name");
    } else {
        name = ctx.stylize(strEscape(key), "string");
    }
    return `${name}:${extra}${str}`;
}
function handleMaxCallStackSize(_ctx, _err, _constructorName, _indentationLvl) {}
const colorRegExp = /\u001b\[\d\d?m/g;
function removeColors(str) {
    return str.replace(colorRegExp, "");
}
function isBelowBreakLength(ctx, output, start, base) {
    let totalLength = output.length + start;
    if (totalLength + output.length > ctx.breakLength) {
        return false;
    }
    for(let i = 0; i < output.length; i++){
        if (ctx.colors) {
            totalLength += removeColors(output[i]).length;
        } else {
            totalLength += output[i].length;
        }
        if (totalLength > ctx.breakLength) {
            return false;
        }
    }
    return base === "" || !base.includes("\n");
}
function formatBigInt(fn, value) {
    return fn(`${value}n`, "bigint");
}
function formatNamespaceObject(keys, ctx, value, recurseTimes) {
    const output = new Array(keys.length);
    for(let i = 0; i < keys.length; i++){
        try {
            output[i] = formatProperty(ctx, value, recurseTimes, keys[i], kObjectType);
        } catch (_err) {
            const tmp = {
                [keys[i]]: ""
            };
            output[i] = formatProperty(ctx, tmp, recurseTimes, keys[i], kObjectType);
            const pos = output[i].lastIndexOf(" ");
            output[i] = output[i].slice(0, pos + 1) + ctx.stylize("<uninitialized>", "special");
        }
    }
    keys.length = 0;
    return output;
}
function formatSpecialArray(ctx, value, recurseTimes, maxLength, output, i) {
    const keys = Object.keys(value);
    let index = i;
    for(; i < keys.length && output.length < maxLength; i++){
        const key = keys[i];
        const tmp = +key;
        if (tmp > 2 ** 32 - 2) {
            break;
        }
        if (`${index}` !== key) {
            if (!numberRegExp.test(key)) {
                break;
            }
            const emptyItems = tmp - index;
            const ending = emptyItems > 1 ? "s" : "";
            const message = `<${emptyItems} empty item${ending}>`;
            output.push(ctx.stylize(message, "undefined"));
            index = tmp;
            if (output.length === maxLength) {
                break;
            }
        }
        output.push(formatProperty(ctx, value, recurseTimes, key, 1));
        index++;
    }
    const remaining = value.length - index;
    if (output.length !== maxLength) {
        if (remaining > 0) {
            const ending1 = remaining > 1 ? "s" : "";
            const message1 = `<${remaining} empty item${ending1}>`;
            output.push(ctx.stylize(message1, "undefined"));
        }
    } else if (remaining > 0) {
        output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`);
    }
    return output;
}
function getBoxedBase(value, ctx, keys, constructor, tag) {
    let type;
    if (isNumberObject1(value)) {
        type = "Number";
    } else if (isStringObject1(value)) {
        type = "String";
        keys.splice(0, value.length);
    } else if (isBooleanObject1(value)) {
        type = "Boolean";
    } else if (isBigIntObject1(value)) {
        type = "BigInt";
    } else {
        type = "Symbol";
    }
    let base = `[${type}`;
    if (type !== constructor) {
        if (constructor === null) {
            base += " (null prototype)";
        } else {
            base += ` (${constructor})`;
        }
    }
    base += `: ${formatPrimitive(stylizeNoColor, value.valueOf(), ctx)}]`;
    if (tag !== "" && tag !== constructor) {
        base += ` [${tag}]`;
    }
    if (keys.length !== 0 || ctx.stylize === stylizeNoColor) {
        return base;
    }
    return ctx.stylize(base, type.toLowerCase());
}
function getClassBase(value, constructor, tag) {
    const hasName = value.hasOwnProperty("name");
    const name = hasName && value.name || "(anonymous)";
    let base = `class ${name}`;
    if (constructor !== "Function" && constructor !== null) {
        base += ` [${constructor}]`;
    }
    if (tag !== "" && constructor !== tag) {
        base += ` [${tag}]`;
    }
    if (constructor !== null) {
        const superName = Object.getPrototypeOf(value).name;
        if (superName) {
            base += ` extends ${superName}`;
        }
    } else {
        base += " extends [null prototype]";
    }
    return `[${base}]`;
}
function reduceToSingleString(ctx, output, base, braces, extrasType, recurseTimes, value) {
    if (ctx.compact !== true) {
        if (typeof ctx.compact === "number" && ctx.compact >= 1) {
            const entries = output.length;
            if (extrasType === 2 && entries > 6) {
                output = groupArrayElements(ctx, output, value);
            }
            if (ctx.currentDepth - recurseTimes < ctx.compact && entries === output.length) {
                const start = output.length + ctx.indentationLvl + braces[0].length + base.length + 10;
                if (isBelowBreakLength(ctx, output, start, base)) {
                    return `${base ? `${base} ` : ""}${braces[0]} ${join(output, ", ")}` + ` ${braces[1]}`;
                }
            }
        }
        const indentation = `\n${" ".repeat(ctx.indentationLvl)}`;
        return `${base ? `${base} ` : ""}${braces[0]}${indentation}  ` + `${join(output, `,${indentation}  `)}${indentation}${braces[1]}`;
    }
    if (isBelowBreakLength(ctx, output, 0, base)) {
        return `${braces[0]}${base ? ` ${base}` : ""} ${join(output, ", ")} ` + braces[1];
    }
    const indentation1 = " ".repeat(ctx.indentationLvl);
    const ln = base === "" && braces[0].length === 1 ? " " : `${base ? ` ${base}` : ""}\n${indentation1}  `;
    return `${braces[0]}${ln}${join(output, `,\n${indentation1}  `)} ${braces[1]}`;
}
function join(output, separator) {
    let str = "";
    if (output.length !== 0) {
        const lastIndex = output.length - 1;
        for(let i = 0; i < lastIndex; i++){
            str += output[i];
            str += separator;
        }
        str += output[lastIndex];
    }
    return str;
}
function groupArrayElements(ctx, output, value) {
    let totalLength = 0;
    let maxLength = 0;
    let i = 0;
    let outputLength = output.length;
    if (ctx.maxArrayLength < output.length) {
        outputLength--;
    }
    const separatorSpace = 2;
    const dataLen = new Array(outputLength);
    for(; i < outputLength; i++){
        const len = getStringWidth(output[i], ctx.colors);
        dataLen[i] = len;
        totalLength += len + separatorSpace;
        if (maxLength < len) {
            maxLength = len;
        }
    }
    const actualMax = maxLength + 2;
    if (actualMax * 3 + ctx.indentationLvl < ctx.breakLength && (totalLength / actualMax > 5 || maxLength <= 6)) {
        const averageBias = Math.sqrt(actualMax - totalLength / output.length);
        const biasedMax = Math.max(actualMax - 3 - averageBias, 1);
        const columns = Math.min(Math.round(Math.sqrt(2.5 * biasedMax * outputLength) / biasedMax), Math.floor((ctx.breakLength - ctx.indentationLvl) / actualMax), ctx.compact * 4, 15);
        if (columns <= 1) {
            return output;
        }
        const tmp = [];
        const maxLineLength = [];
        for(let i1 = 0; i1 < columns; i1++){
            let lineMaxLength = 0;
            for(let j = i1; j < output.length; j += columns){
                if (dataLen[j] > lineMaxLength) {
                    lineMaxLength = dataLen[j];
                }
            }
            lineMaxLength += separatorSpace;
            maxLineLength[i1] = lineMaxLength;
        }
        let order = String.prototype.padStart;
        if (value !== undefined) {
            for(let i2 = 0; i2 < output.length; i2++){
                if (typeof value[i2] !== "number" && typeof value[i2] !== "bigint") {
                    order = String.prototype.padEnd;
                    break;
                }
            }
        }
        for(let i3 = 0; i3 < outputLength; i3 += columns){
            const max = Math.min(i3 + columns, outputLength);
            let str = "";
            let j1 = i3;
            for(; j1 < max - 1; j1++){
                const padding = maxLineLength[j1 - i3] + output[j1].length - dataLen[j1];
                str += `${output[j1]}, `.padStart(padding, " ");
            }
            if (order === String.prototype.padStart) {
                const padding1 = maxLineLength[j1 - i3] + output[j1].length - dataLen[j1] - 2;
                str += output[j1].padStart(padding1, " ");
            } else {
                str += output[j1];
            }
            Array.prototype.push.call(tmp, str);
        }
        if (ctx.maxArrayLength < output.length) {
            Array.prototype.push.call(tmp, output[outputLength]);
        }
        output = tmp;
    }
    return output;
}
function formatMapIterInner(ctx, recurseTimes, entries, state) {
    const maxArrayLength = Math.max(ctx.maxArrayLength, 0);
    const len = entries.length / 2;
    const remaining = len - maxArrayLength;
    const maxLength = Math.min(maxArrayLength, len);
    let output = new Array(maxLength);
    let i = 0;
    ctx.indentationLvl += 2;
    if (state === 0) {
        for(; i < maxLength; i++){
            const pos = i * 2;
            output[i] = `${formatValue(ctx, entries[pos], recurseTimes)} => ${formatValue(ctx, entries[pos + 1], recurseTimes)}`;
        }
        if (!ctx.sorted) {
            output = output.sort();
        }
    } else {
        for(; i < maxLength; i++){
            const pos1 = i * 2;
            const res = [
                formatValue(ctx, entries[pos1], recurseTimes),
                formatValue(ctx, entries[pos1 + 1], recurseTimes)
            ];
            output[i] = reduceToSingleString(ctx, res, "", [
                "[",
                "]"
            ], kArrayExtrasType, recurseTimes);
        }
    }
    ctx.indentationLvl -= 2;
    if (remaining > 0) {
        output.push(`... ${remaining} more item${remaining > 1 ? "s" : ""}`);
    }
    return output;
}
function formatSetIterInner(ctx, recurseTimes, entries, state) {
    const maxArrayLength = Math.max(ctx.maxArrayLength, 0);
    const maxLength = Math.min(maxArrayLength, entries.length);
    const output = new Array(maxLength);
    ctx.indentationLvl += 2;
    for(let i = 0; i < maxLength; i++){
        output[i] = formatValue(ctx, entries[i], recurseTimes);
    }
    ctx.indentationLvl -= 2;
    if (state === 0 && !ctx.sorted) {
        output.sort();
    }
    const remaining = entries.length - maxLength;
    if (remaining > 0) {
        Array.prototype.push.call(output, `... ${remaining} more item${remaining > 1 ? "s" : ""}`);
    }
    return output;
}
const ansiPattern = "[\\u001B\\u009B][[\\]()#;?]*" + "(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*" + "|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)" + "|(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))";
const ansi = new RegExp(ansiPattern, "g");
function getStringWidth(str, removeControlChars = true) {
    let width = 0;
    if (removeControlChars) {
        str = stripVTControlCharacters(str);
    }
    str = str.normalize("NFC");
    for (const __char of str[Symbol.iterator]()){
        const code = __char.codePointAt(0);
        if (isFullWidthCodePoint(code)) {
            width += 2;
        } else if (!isZeroWidthCodePoint(code)) {
            width++;
        }
    }
    return width;
}
const isFullWidthCodePoint = (code)=>{
    return code >= 0x1100 && (code <= 0x115f || code === 0x2329 || code === 0x232a || code >= 0x2e80 && code <= 0x3247 && code !== 0x303f || code >= 0x3250 && code <= 0x4dbf || code >= 0x4e00 && code <= 0xa4c6 || code >= 0xa960 && code <= 0xa97c || code >= 0xac00 && code <= 0xd7a3 || code >= 0xf900 && code <= 0xfaff || code >= 0xfe10 && code <= 0xfe19 || code >= 0xfe30 && code <= 0xfe6b || code >= 0xff01 && code <= 0xff60 || code >= 0xffe0 && code <= 0xffe6 || code >= 0x1b000 && code <= 0x1b001 || code >= 0x1f200 && code <= 0x1f251 || code >= 0x1f300 && code <= 0x1f64f || code >= 0x20000 && code <= 0x3fffd);
};
const isZeroWidthCodePoint = (code)=>{
    return code <= 0x1F || code >= 0x7F && code <= 0x9F || code >= 0x300 && code <= 0x36F || code >= 0x200B && code <= 0x200F || code >= 0x20D0 && code <= 0x20FF || code >= 0xFE00 && code <= 0xFE0F || code >= 0xFE20 && code <= 0xFE2F || code >= 0xE0100 && code <= 0xE01EF;
};
function stripVTControlCharacters(str) {
    validateString(str, "str");
    return str.replace(ansi, "");
}
let os;
if (Deno.build.os === "darwin") {
    os = {
        UV_UDP_REUSEADDR: 4,
        dlopen: {
            RTLD_LAZY: 1,
            RTLD_NOW: 2,
            RTLD_GLOBAL: 8,
            RTLD_LOCAL: 4
        },
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 48,
            EADDRNOTAVAIL: 49,
            EAFNOSUPPORT: 47,
            EAGAIN: 35,
            EALREADY: 37,
            EBADF: 9,
            EBADMSG: 94,
            EBUSY: 16,
            ECANCELED: 89,
            ECHILD: 10,
            ECONNABORTED: 53,
            ECONNREFUSED: 61,
            ECONNRESET: 54,
            EDEADLK: 11,
            EDESTADDRREQ: 39,
            EDOM: 33,
            EDQUOT: 69,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 65,
            EIDRM: 90,
            EILSEQ: 92,
            EINPROGRESS: 36,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 56,
            EISDIR: 21,
            ELOOP: 62,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 40,
            EMULTIHOP: 95,
            ENAMETOOLONG: 63,
            ENETDOWN: 50,
            ENETRESET: 52,
            ENETUNREACH: 51,
            ENFILE: 23,
            ENOBUFS: 55,
            ENODATA: 96,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 77,
            ENOLINK: 97,
            ENOMEM: 12,
            ENOMSG: 91,
            ENOPROTOOPT: 42,
            ENOSPC: 28,
            ENOSR: 98,
            ENOSTR: 99,
            ENOSYS: 78,
            ENOTCONN: 57,
            ENOTDIR: 20,
            ENOTEMPTY: 66,
            ENOTSOCK: 38,
            ENOTSUP: 45,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 102,
            EOVERFLOW: 84,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 100,
            EPROTONOSUPPORT: 43,
            EPROTOTYPE: 41,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 70,
            ETIME: 101,
            ETIMEDOUT: 60,
            ETXTBSY: 26,
            EWOULDBLOCK: 35,
            EXDEV: 18
        },
        signals: {
            SIGHUP: 1,
            SIGINT: 2,
            SIGQUIT: 3,
            SIGILL: 4,
            SIGTRAP: 5,
            SIGABRT: 6,
            SIGIOT: 6,
            SIGBUS: 10,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGUSR1: 30,
            SIGSEGV: 11,
            SIGUSR2: 31,
            SIGPIPE: 13,
            SIGALRM: 14,
            SIGTERM: 15,
            SIGCHLD: 20,
            SIGCONT: 19,
            SIGSTOP: 17,
            SIGTSTP: 18,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 16,
            SIGXCPU: 24,
            SIGXFSZ: 25,
            SIGVTALRM: 26,
            SIGPROF: 27,
            SIGWINCH: 28,
            SIGIO: 23,
            SIGINFO: 29,
            SIGSYS: 12
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20
        }
    };
} else if (Deno.build.os === "linux") {
    os = {
        UV_UDP_REUSEADDR: 4,
        dlopen: {
            RTLD_LAZY: 1,
            RTLD_NOW: 2,
            RTLD_GLOBAL: 256,
            RTLD_LOCAL: 0,
            RTLD_DEEPBIND: 8
        },
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 98,
            EADDRNOTAVAIL: 99,
            EAFNOSUPPORT: 97,
            EAGAIN: 11,
            EALREADY: 114,
            EBADF: 9,
            EBADMSG: 74,
            EBUSY: 16,
            ECANCELED: 125,
            ECHILD: 10,
            ECONNABORTED: 103,
            ECONNREFUSED: 111,
            ECONNRESET: 104,
            EDEADLK: 35,
            EDESTADDRREQ: 89,
            EDOM: 33,
            EDQUOT: 122,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 113,
            EIDRM: 43,
            EILSEQ: 84,
            EINPROGRESS: 115,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 106,
            EISDIR: 21,
            ELOOP: 40,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 90,
            EMULTIHOP: 72,
            ENAMETOOLONG: 36,
            ENETDOWN: 100,
            ENETRESET: 102,
            ENETUNREACH: 101,
            ENFILE: 23,
            ENOBUFS: 105,
            ENODATA: 61,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 37,
            ENOLINK: 67,
            ENOMEM: 12,
            ENOMSG: 42,
            ENOPROTOOPT: 92,
            ENOSPC: 28,
            ENOSR: 63,
            ENOSTR: 60,
            ENOSYS: 38,
            ENOTCONN: 107,
            ENOTDIR: 20,
            ENOTEMPTY: 39,
            ENOTSOCK: 88,
            ENOTSUP: 95,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 95,
            EOVERFLOW: 75,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 71,
            EPROTONOSUPPORT: 93,
            EPROTOTYPE: 91,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ESTALE: 116,
            ETIME: 62,
            ETIMEDOUT: 110,
            ETXTBSY: 26,
            EWOULDBLOCK: 11,
            EXDEV: 18
        },
        signals: {
            SIGHUP: 1,
            SIGINT: 2,
            SIGQUIT: 3,
            SIGILL: 4,
            SIGTRAP: 5,
            SIGABRT: 6,
            SIGIOT: 6,
            SIGBUS: 7,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGUSR1: 10,
            SIGSEGV: 11,
            SIGUSR2: 12,
            SIGPIPE: 13,
            SIGALRM: 14,
            SIGTERM: 15,
            SIGCHLD: 17,
            SIGSTKFLT: 16,
            SIGCONT: 18,
            SIGSTOP: 19,
            SIGTSTP: 20,
            SIGTTIN: 21,
            SIGTTOU: 22,
            SIGURG: 23,
            SIGXCPU: 24,
            SIGXFSZ: 25,
            SIGVTALRM: 26,
            SIGPROF: 27,
            SIGWINCH: 28,
            SIGIO: 29,
            SIGPOLL: 29,
            SIGPWR: 30,
            SIGSYS: 31,
            SIGUNUSED: 31
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20
        }
    };
} else {
    os = {
        UV_UDP_REUSEADDR: 4,
        dlopen: {},
        errno: {
            E2BIG: 7,
            EACCES: 13,
            EADDRINUSE: 100,
            EADDRNOTAVAIL: 101,
            EAFNOSUPPORT: 102,
            EAGAIN: 11,
            EALREADY: 103,
            EBADF: 9,
            EBADMSG: 104,
            EBUSY: 16,
            ECANCELED: 105,
            ECHILD: 10,
            ECONNABORTED: 106,
            ECONNREFUSED: 107,
            ECONNRESET: 108,
            EDEADLK: 36,
            EDESTADDRREQ: 109,
            EDOM: 33,
            EEXIST: 17,
            EFAULT: 14,
            EFBIG: 27,
            EHOSTUNREACH: 110,
            EIDRM: 111,
            EILSEQ: 42,
            EINPROGRESS: 112,
            EINTR: 4,
            EINVAL: 22,
            EIO: 5,
            EISCONN: 113,
            EISDIR: 21,
            ELOOP: 114,
            EMFILE: 24,
            EMLINK: 31,
            EMSGSIZE: 115,
            ENAMETOOLONG: 38,
            ENETDOWN: 116,
            ENETRESET: 117,
            ENETUNREACH: 118,
            ENFILE: 23,
            ENOBUFS: 119,
            ENODATA: 120,
            ENODEV: 19,
            ENOENT: 2,
            ENOEXEC: 8,
            ENOLCK: 39,
            ENOLINK: 121,
            ENOMEM: 12,
            ENOMSG: 122,
            ENOPROTOOPT: 123,
            ENOSPC: 28,
            ENOSR: 124,
            ENOSTR: 125,
            ENOSYS: 40,
            ENOTCONN: 126,
            ENOTDIR: 20,
            ENOTEMPTY: 41,
            ENOTSOCK: 128,
            ENOTSUP: 129,
            ENOTTY: 25,
            ENXIO: 6,
            EOPNOTSUPP: 130,
            EOVERFLOW: 132,
            EPERM: 1,
            EPIPE: 32,
            EPROTO: 134,
            EPROTONOSUPPORT: 135,
            EPROTOTYPE: 136,
            ERANGE: 34,
            EROFS: 30,
            ESPIPE: 29,
            ESRCH: 3,
            ETIME: 137,
            ETIMEDOUT: 138,
            ETXTBSY: 139,
            EWOULDBLOCK: 140,
            EXDEV: 18,
            WSAEINTR: 10004,
            WSAEBADF: 10009,
            WSAEACCES: 10013,
            WSAEFAULT: 10014,
            WSAEINVAL: 10022,
            WSAEMFILE: 10024,
            WSAEWOULDBLOCK: 10035,
            WSAEINPROGRESS: 10036,
            WSAEALREADY: 10037,
            WSAENOTSOCK: 10038,
            WSAEDESTADDRREQ: 10039,
            WSAEMSGSIZE: 10040,
            WSAEPROTOTYPE: 10041,
            WSAENOPROTOOPT: 10042,
            WSAEPROTONOSUPPORT: 10043,
            WSAESOCKTNOSUPPORT: 10044,
            WSAEOPNOTSUPP: 10045,
            WSAEPFNOSUPPORT: 10046,
            WSAEAFNOSUPPORT: 10047,
            WSAEADDRINUSE: 10048,
            WSAEADDRNOTAVAIL: 10049,
            WSAENETDOWN: 10050,
            WSAENETUNREACH: 10051,
            WSAENETRESET: 10052,
            WSAECONNABORTED: 10053,
            WSAECONNRESET: 10054,
            WSAENOBUFS: 10055,
            WSAEISCONN: 10056,
            WSAENOTCONN: 10057,
            WSAESHUTDOWN: 10058,
            WSAETOOMANYREFS: 10059,
            WSAETIMEDOUT: 10060,
            WSAECONNREFUSED: 10061,
            WSAELOOP: 10062,
            WSAENAMETOOLONG: 10063,
            WSAEHOSTDOWN: 10064,
            WSAEHOSTUNREACH: 10065,
            WSAENOTEMPTY: 10066,
            WSAEPROCLIM: 10067,
            WSAEUSERS: 10068,
            WSAEDQUOT: 10069,
            WSAESTALE: 10070,
            WSAEREMOTE: 10071,
            WSASYSNOTREADY: 10091,
            WSAVERNOTSUPPORTED: 10092,
            WSANOTINITIALISED: 10093,
            WSAEDISCON: 10101,
            WSAENOMORE: 10102,
            WSAECANCELLED: 10103,
            WSAEINVALIDPROCTABLE: 10104,
            WSAEINVALIDPROVIDER: 10105,
            WSAEPROVIDERFAILEDINIT: 10106,
            WSASYSCALLFAILURE: 10107,
            WSASERVICE_NOT_FOUND: 10108,
            WSATYPE_NOT_FOUND: 10109,
            WSA_E_NO_MORE: 10110,
            WSA_E_CANCELLED: 10111,
            WSAEREFUSED: 10112
        },
        signals: {
            SIGHUP: 1,
            SIGINT: 2,
            SIGILL: 4,
            SIGABRT: 22,
            SIGFPE: 8,
            SIGKILL: 9,
            SIGSEGV: 11,
            SIGTERM: 15,
            SIGBREAK: 21,
            SIGWINCH: 28
        },
        priority: {
            PRIORITY_LOW: 19,
            PRIORITY_BELOW_NORMAL: 10,
            PRIORITY_NORMAL: 0,
            PRIORITY_ABOVE_NORMAL: -7,
            PRIORITY_HIGH: -14,
            PRIORITY_HIGHEST: -20
        }
    };
}
const fs = {
    UV_FS_SYMLINK_DIR: 1,
    UV_FS_SYMLINK_JUNCTION: 2,
    O_RDONLY: 0,
    O_WRONLY: 1,
    O_RDWR: 2,
    UV_DIRENT_UNKNOWN: 0,
    UV_DIRENT_FILE: 1,
    UV_DIRENT_DIR: 2,
    UV_DIRENT_LINK: 3,
    UV_DIRENT_FIFO: 4,
    UV_DIRENT_SOCKET: 5,
    UV_DIRENT_CHAR: 6,
    UV_DIRENT_BLOCK: 7,
    S_IFMT: 61440,
    S_IFREG: 32768,
    S_IFDIR: 16384,
    S_IFCHR: 8192,
    S_IFBLK: 24576,
    S_IFIFO: 4096,
    S_IFLNK: 40960,
    S_IFSOCK: 49152,
    O_CREAT: 512,
    O_EXCL: 2048,
    UV_FS_O_FILEMAP: 0,
    O_NOCTTY: 131072,
    O_TRUNC: 1024,
    O_APPEND: 8,
    O_DIRECTORY: 1048576,
    O_NOFOLLOW: 256,
    O_SYNC: 128,
    O_DSYNC: 4194304,
    O_SYMLINK: 2097152,
    O_NONBLOCK: 4,
    S_IRWXU: 448,
    S_IRUSR: 256,
    S_IWUSR: 128,
    S_IXUSR: 64,
    S_IRWXG: 56,
    S_IRGRP: 32,
    S_IWGRP: 16,
    S_IXGRP: 8,
    S_IRWXO: 7,
    S_IROTH: 4,
    S_IWOTH: 2,
    S_IXOTH: 1,
    F_OK: 0,
    R_OK: 4,
    W_OK: 2,
    X_OK: 1,
    UV_FS_COPYFILE_EXCL: 1,
    COPYFILE_EXCL: 1,
    UV_FS_COPYFILE_FICLONE: 2,
    COPYFILE_FICLONE: 2,
    UV_FS_COPYFILE_FICLONE_FORCE: 4,
    COPYFILE_FICLONE_FORCE: 4
};
const crypto = {
    OPENSSL_VERSION_NUMBER: 269488319,
    SSL_OP_ALL: 2147485780,
    SSL_OP_ALLOW_NO_DHE_KEX: 1024,
    SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
    SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
    SSL_OP_CISCO_ANYCONNECT: 32768,
    SSL_OP_COOKIE_EXCHANGE: 8192,
    SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
    SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
    SSL_OP_EPHEMERAL_RSA: 0,
    SSL_OP_LEGACY_SERVER_CONNECT: 4,
    SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 0,
    SSL_OP_MICROSOFT_SESS_ID_BUG: 0,
    SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
    SSL_OP_NETSCAPE_CA_DN_BUG: 0,
    SSL_OP_NETSCAPE_CHALLENGE_BUG: 0,
    SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 0,
    SSL_OP_NO_COMPRESSION: 131072,
    SSL_OP_NO_ENCRYPT_THEN_MAC: 524288,
    SSL_OP_NO_QUERY_MTU: 4096,
    SSL_OP_NO_RENEGOTIATION: 1073741824,
    SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
    SSL_OP_NO_SSLv2: 0,
    SSL_OP_NO_SSLv3: 33554432,
    SSL_OP_NO_TICKET: 16384,
    SSL_OP_NO_TLSv1: 67108864,
    SSL_OP_NO_TLSv1_1: 268435456,
    SSL_OP_NO_TLSv1_2: 134217728,
    SSL_OP_NO_TLSv1_3: 536870912,
    SSL_OP_PKCS1_CHECK_1: 0,
    SSL_OP_PKCS1_CHECK_2: 0,
    SSL_OP_PRIORITIZE_CHACHA: 2097152,
    SSL_OP_SINGLE_DH_USE: 0,
    SSL_OP_SINGLE_ECDH_USE: 0,
    SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 0,
    SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
    SSL_OP_TLS_BLOCK_PADDING_BUG: 0,
    SSL_OP_TLS_D5_BUG: 0,
    SSL_OP_TLS_ROLLBACK_BUG: 8388608,
    ENGINE_METHOD_RSA: 1,
    ENGINE_METHOD_DSA: 2,
    ENGINE_METHOD_DH: 4,
    ENGINE_METHOD_RAND: 8,
    ENGINE_METHOD_EC: 2048,
    ENGINE_METHOD_CIPHERS: 64,
    ENGINE_METHOD_DIGESTS: 128,
    ENGINE_METHOD_PKEY_METHS: 512,
    ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
    ENGINE_METHOD_ALL: 65535,
    ENGINE_METHOD_NONE: 0,
    DH_CHECK_P_NOT_SAFE_PRIME: 2,
    DH_CHECK_P_NOT_PRIME: 1,
    DH_UNABLE_TO_CHECK_GENERATOR: 4,
    DH_NOT_SUITABLE_GENERATOR: 8,
    ALPN_ENABLED: 1,
    RSA_PKCS1_PADDING: 1,
    RSA_SSLV23_PADDING: 2,
    RSA_NO_PADDING: 3,
    RSA_PKCS1_OAEP_PADDING: 4,
    RSA_X931_PADDING: 5,
    RSA_PKCS1_PSS_PADDING: 6,
    RSA_PSS_SALTLEN_DIGEST: -1,
    RSA_PSS_SALTLEN_MAX_SIGN: -2,
    RSA_PSS_SALTLEN_AUTO: -2,
    defaultCoreCipherList: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
    TLS1_VERSION: 769,
    TLS1_1_VERSION: 770,
    TLS1_2_VERSION: 771,
    TLS1_3_VERSION: 772,
    POINT_CONVERSION_COMPRESSED: 2,
    POINT_CONVERSION_UNCOMPRESSED: 4,
    POINT_CONVERSION_HYBRID: 6
};
const zlib = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    Z_VERSION_ERROR: -6,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    ZLIB_VERNUM: 4784,
    DEFLATE: 1,
    INFLATE: 2,
    GZIP: 3,
    GUNZIP: 4,
    DEFLATERAW: 5,
    INFLATERAW: 6,
    UNZIP: 7,
    BROTLI_DECODE: 8,
    BROTLI_ENCODE: 9,
    Z_MIN_WINDOWBITS: 8,
    Z_MAX_WINDOWBITS: 15,
    Z_DEFAULT_WINDOWBITS: 15,
    Z_MIN_CHUNK: 64,
    Z_MAX_CHUNK: Infinity,
    Z_DEFAULT_CHUNK: 16384,
    Z_MIN_MEMLEVEL: 1,
    Z_MAX_MEMLEVEL: 9,
    Z_DEFAULT_MEMLEVEL: 8,
    Z_MIN_LEVEL: -1,
    Z_MAX_LEVEL: 9,
    Z_DEFAULT_LEVEL: -1,
    BROTLI_OPERATION_PROCESS: 0,
    BROTLI_OPERATION_FLUSH: 1,
    BROTLI_OPERATION_FINISH: 2,
    BROTLI_OPERATION_EMIT_METADATA: 3,
    BROTLI_PARAM_MODE: 0,
    BROTLI_MODE_GENERIC: 0,
    BROTLI_MODE_TEXT: 1,
    BROTLI_MODE_FONT: 2,
    BROTLI_DEFAULT_MODE: 0,
    BROTLI_PARAM_QUALITY: 1,
    BROTLI_MIN_QUALITY: 0,
    BROTLI_MAX_QUALITY: 11,
    BROTLI_DEFAULT_QUALITY: 11,
    BROTLI_PARAM_LGWIN: 2,
    BROTLI_MIN_WINDOW_BITS: 10,
    BROTLI_MAX_WINDOW_BITS: 24,
    BROTLI_LARGE_MAX_WINDOW_BITS: 30,
    BROTLI_DEFAULT_WINDOW: 22,
    BROTLI_PARAM_LGBLOCK: 3,
    BROTLI_MIN_INPUT_BLOCK_BITS: 16,
    BROTLI_MAX_INPUT_BLOCK_BITS: 24,
    BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4,
    BROTLI_PARAM_SIZE_HINT: 5,
    BROTLI_PARAM_LARGE_WINDOW: 6,
    BROTLI_PARAM_NPOSTFIX: 7,
    BROTLI_PARAM_NDIRECT: 8,
    BROTLI_DECODER_RESULT_ERROR: 0,
    BROTLI_DECODER_RESULT_SUCCESS: 1,
    BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0,
    BROTLI_DECODER_PARAM_LARGE_WINDOW: 1,
    BROTLI_DECODER_NO_ERROR: 0,
    BROTLI_DECODER_SUCCESS: 1,
    BROTLI_DECODER_NEEDS_MORE_INPUT: 2,
    BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1,
    BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2,
    BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4,
    BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5,
    BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6,
    BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7,
    BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9,
    BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10,
    BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11,
    BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12,
    BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14,
    BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15,
    BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16,
    BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19,
    BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21,
    BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22,
    BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26,
    BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27,
    BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30,
    BROTLI_DECODER_ERROR_UNREACHABLE: -31
};
const trace = {
    TRACE_EVENT_PHASE_BEGIN: 66,
    TRACE_EVENT_PHASE_END: 69,
    TRACE_EVENT_PHASE_COMPLETE: 88,
    TRACE_EVENT_PHASE_INSTANT: 73,
    TRACE_EVENT_PHASE_ASYNC_BEGIN: 83,
    TRACE_EVENT_PHASE_ASYNC_STEP_INTO: 84,
    TRACE_EVENT_PHASE_ASYNC_STEP_PAST: 112,
    TRACE_EVENT_PHASE_ASYNC_END: 70,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_BEGIN: 98,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_END: 101,
    TRACE_EVENT_PHASE_NESTABLE_ASYNC_INSTANT: 110,
    TRACE_EVENT_PHASE_FLOW_BEGIN: 115,
    TRACE_EVENT_PHASE_FLOW_STEP: 116,
    TRACE_EVENT_PHASE_FLOW_END: 102,
    TRACE_EVENT_PHASE_METADATA: 77,
    TRACE_EVENT_PHASE_COUNTER: 67,
    TRACE_EVENT_PHASE_SAMPLE: 80,
    TRACE_EVENT_PHASE_CREATE_OBJECT: 78,
    TRACE_EVENT_PHASE_SNAPSHOT_OBJECT: 79,
    TRACE_EVENT_PHASE_DELETE_OBJECT: 68,
    TRACE_EVENT_PHASE_MEMORY_DUMP: 118,
    TRACE_EVENT_PHASE_MARK: 82,
    TRACE_EVENT_PHASE_CLOCK_SYNC: 99,
    TRACE_EVENT_PHASE_ENTER_CONTEXT: 40,
    TRACE_EVENT_PHASE_LEAVE_CONTEXT: 41,
    TRACE_EVENT_PHASE_LINK_IDS: 61
};
const mod4 = {
    os: os,
    fs: fs,
    crypto: crypto,
    zlib: zlib,
    trace: trace
};
const { errno: { ENOTDIR , ENOENT  }  } = os;
const kIsNodeError = Symbol("kIsNodeError");
const classRegExp1 = /^([A-Z][a-z0-9]*)+$/;
const kTypes = [
    "string",
    "function",
    "number",
    "object",
    "Function",
    "Object",
    "boolean",
    "bigint",
    "symbol"
];
class AbortError extends Error {
    code;
    constructor(message = "The operation was aborted", options){
        if (options !== undefined && typeof options !== "object") {
            throw new codes.ERR_INVALID_ARG_TYPE("options", "Object", options);
        }
        super(message, options);
        this.code = "ABORT_ERR";
        this.name = "AbortError";
    }
}
function addNumericalSeparator(val) {
    let res = "";
    let i = val.length;
    const start = val[0] === "-" ? 1 : 0;
    for(; i >= start + 4; i -= 3){
        res = `_${val.slice(i - 3, i)}${res}`;
    }
    return `${val.slice(0, i)}${res}`;
}
const captureLargerStackTrace = hideStackFrames(function captureLargerStackTrace(err) {
    Error.captureStackTrace(err);
    return err;
});
hideStackFrames(function uvExceptionWithHostPort(err, syscall, address, port) {
    const { 0: code , 1: uvmsg  } = uvErrmapGet(err) || uvUnmappedError;
    const message = `${syscall} ${code}: ${uvmsg}`;
    let details = "";
    if (port && port > 0) {
        details = ` ${address}:${port}`;
    } else if (address) {
        details = ` ${address}`;
    }
    const ex = new Error(`${message}${details}`);
    ex.code = code;
    ex.errno = err;
    ex.syscall = syscall;
    ex.address = address;
    if (port) {
        ex.port = port;
    }
    return captureLargerStackTrace(ex);
});
const errnoException = hideStackFrames(function errnoException(err, syscall, original) {
    const code = getSystemErrorName(err);
    const message = original ? `${syscall} ${code} ${original}` : `${syscall} ${code}`;
    const ex = new Error(message);
    ex.errno = err;
    ex.code = code;
    ex.syscall = syscall;
    return captureLargerStackTrace(ex);
});
function uvErrmapGet(name) {
    return errorMap.get(name);
}
const uvUnmappedError = [
    "UNKNOWN",
    "unknown error"
];
const uvException = hideStackFrames(function uvException(ctx) {
    const { 0: code , 1: uvmsg  } = uvErrmapGet(ctx.errno) || uvUnmappedError;
    let message = `${code}: ${ctx.message || uvmsg}, ${ctx.syscall}`;
    let path;
    let dest;
    if (ctx.path) {
        path = ctx.path.toString();
        message += ` '${path}'`;
    }
    if (ctx.dest) {
        dest = ctx.dest.toString();
        message += ` -> '${dest}'`;
    }
    const err = new Error(message);
    for (const prop of Object.keys(ctx)){
        if (prop === "message" || prop === "path" || prop === "dest") {
            continue;
        }
        err[prop] = ctx[prop];
    }
    err.code = code;
    if (path) {
        err.path = path;
    }
    if (dest) {
        err.dest = dest;
    }
    return captureLargerStackTrace(err);
});
hideStackFrames(function exceptionWithHostPort(err, syscall, address, port, additional) {
    const code = getSystemErrorName(err);
    let details = "";
    if (port && port > 0) {
        details = ` ${address}:${port}`;
    } else if (address) {
        details = ` ${address}`;
    }
    if (additional) {
        details += ` - Local (${additional})`;
    }
    const ex = new Error(`${syscall} ${code}${details}`);
    ex.errno = err;
    ex.code = code;
    ex.syscall = syscall;
    ex.address = address;
    if (port) {
        ex.port = port;
    }
    return captureLargerStackTrace(ex);
});
hideStackFrames(function(code, syscall, hostname) {
    let errno;
    if (typeof code === "number") {
        errno = code;
        if (code === codeMap.get("EAI_NODATA") || code === codeMap.get("EAI_NONAME")) {
            code = "ENOTFOUND";
        } else {
            code = getSystemErrorName(code);
        }
    }
    const message = `${syscall} ${code}${hostname ? ` ${hostname}` : ""}`;
    const ex = new Error(message);
    ex.errno = errno;
    ex.code = code;
    ex.syscall = syscall;
    if (hostname) {
        ex.hostname = hostname;
    }
    return captureLargerStackTrace(ex);
});
class NodeErrorAbstraction extends Error {
    code;
    constructor(name, code, message){
        super(message);
        this.code = code;
        this.name = name;
        this.stack = this.stack && `${name} [${this.code}]${this.stack.slice(20)}`;
    }
    toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
    }
}
class NodeError extends NodeErrorAbstraction {
    constructor(code, message){
        super(Error.prototype.name, code, message);
    }
}
class NodeRangeError extends NodeErrorAbstraction {
    constructor(code, message){
        super(RangeError.prototype.name, code, message);
        Object.setPrototypeOf(this, RangeError.prototype);
        this.toString = function() {
            return `${this.name} [${this.code}]: ${this.message}`;
        };
    }
}
class NodeTypeError extends NodeErrorAbstraction {
    constructor(code, message){
        super(TypeError.prototype.name, code, message);
        Object.setPrototypeOf(this, TypeError.prototype);
        this.toString = function() {
            return `${this.name} [${this.code}]: ${this.message}`;
        };
    }
}
class NodeSystemError extends NodeErrorAbstraction {
    constructor(key, context, msgPrefix){
        let message = `${msgPrefix}: ${context.syscall} returned ` + `${context.code} (${context.message})`;
        if (context.path !== undefined) {
            message += ` ${context.path}`;
        }
        if (context.dest !== undefined) {
            message += ` => ${context.dest}`;
        }
        super("SystemError", key, message);
        captureLargerStackTrace(this);
        Object.defineProperties(this, {
            [kIsNodeError]: {
                value: true,
                enumerable: false,
                writable: false,
                configurable: true
            },
            info: {
                value: context,
                enumerable: true,
                configurable: true,
                writable: false
            },
            errno: {
                get () {
                    return context.errno;
                },
                set: (value)=>{
                    context.errno = value;
                },
                enumerable: true,
                configurable: true
            },
            syscall: {
                get () {
                    return context.syscall;
                },
                set: (value)=>{
                    context.syscall = value;
                },
                enumerable: true,
                configurable: true
            }
        });
        if (context.path !== undefined) {
            Object.defineProperty(this, "path", {
                get () {
                    return context.path;
                },
                set: (value)=>{
                    context.path = value;
                },
                enumerable: true,
                configurable: true
            });
        }
        if (context.dest !== undefined) {
            Object.defineProperty(this, "dest", {
                get () {
                    return context.dest;
                },
                set: (value)=>{
                    context.dest = value;
                },
                enumerable: true,
                configurable: true
            });
        }
    }
    toString() {
        return `${this.name} [${this.code}]: ${this.message}`;
    }
}
function makeSystemErrorWithCode(key, msgPrfix) {
    return class NodeError extends NodeSystemError {
        constructor(ctx){
            super(key, ctx, msgPrfix);
        }
    };
}
const ERR_FS_EISDIR = makeSystemErrorWithCode("ERR_FS_EISDIR", "Path is a directory");
function createInvalidArgType(name, expected) {
    expected = Array.isArray(expected) ? expected : [
        expected
    ];
    let msg = "The ";
    if (name.endsWith(" argument")) {
        msg += `${name} `;
    } else {
        const type = name.includes(".") ? "property" : "argument";
        msg += `"${name}" ${type} `;
    }
    msg += "must be ";
    const types = [];
    const instances = [];
    const other = [];
    for (const value of expected){
        if (kTypes.includes(value)) {
            types.push(value.toLocaleLowerCase());
        } else if (classRegExp1.test(value)) {
            instances.push(value);
        } else {
            other.push(value);
        }
    }
    if (instances.length > 0) {
        const pos = types.indexOf("object");
        if (pos !== -1) {
            types.splice(pos, 1);
            instances.push("Object");
        }
    }
    if (types.length > 0) {
        if (types.length > 2) {
            const last = types.pop();
            msg += `one of type ${types.join(", ")}, or ${last}`;
        } else if (types.length === 2) {
            msg += `one of type ${types[0]} or ${types[1]}`;
        } else {
            msg += `of type ${types[0]}`;
        }
        if (instances.length > 0 || other.length > 0) {
            msg += " or ";
        }
    }
    if (instances.length > 0) {
        if (instances.length > 2) {
            const last1 = instances.pop();
            msg += `an instance of ${instances.join(", ")}, or ${last1}`;
        } else {
            msg += `an instance of ${instances[0]}`;
            if (instances.length === 2) {
                msg += ` or ${instances[1]}`;
            }
        }
        if (other.length > 0) {
            msg += " or ";
        }
    }
    if (other.length > 0) {
        if (other.length > 2) {
            const last2 = other.pop();
            msg += `one of ${other.join(", ")}, or ${last2}`;
        } else if (other.length === 2) {
            msg += `one of ${other[0]} or ${other[1]}`;
        } else {
            if (other[0].toLowerCase() !== other[0]) {
                msg += "an ";
            }
            msg += `${other[0]}`;
        }
    }
    return msg;
}
class ERR_INVALID_ARG_TYPE_RANGE extends NodeRangeError {
    constructor(name, expected, actual){
        const msg = createInvalidArgType(name, expected);
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper(actual)}`);
    }
}
class ERR_INVALID_ARG_TYPE extends NodeTypeError {
    constructor(name, expected, actual){
        const msg = createInvalidArgType(name, expected);
        super("ERR_INVALID_ARG_TYPE", `${msg}.${invalidArgTypeHelper(actual)}`);
    }
    static RangeError = ERR_INVALID_ARG_TYPE_RANGE;
}
class ERR_INVALID_ARG_VALUE_RANGE extends NodeRangeError {
    constructor(name, value, reason = "is invalid"){
        const type = name.includes(".") ? "property" : "argument";
        const inspected = inspect(value);
        super("ERR_INVALID_ARG_VALUE", `The ${type} '${name}' ${reason}. Received ${inspected}`);
    }
}
class ERR_INVALID_ARG_VALUE extends NodeTypeError {
    constructor(name, value, reason = "is invalid"){
        const type = name.includes(".") ? "property" : "argument";
        const inspected = inspect(value);
        super("ERR_INVALID_ARG_VALUE", `The ${type} '${name}' ${reason}. Received ${inspected}`);
    }
    static RangeError = ERR_INVALID_ARG_VALUE_RANGE;
}
function invalidArgTypeHelper(input) {
    if (input == null) {
        return ` Received ${input}`;
    }
    if (typeof input === "function" && input.name) {
        return ` Received function ${input.name}`;
    }
    if (typeof input === "object") {
        if (input.constructor && input.constructor.name) {
            return ` Received an instance of ${input.constructor.name}`;
        }
        return ` Received ${inspect(input, {
            depth: -1
        })}`;
    }
    let inspected = inspect(input, {
        colors: false
    });
    if (inspected.length > 25) {
        inspected = `${inspected.slice(0, 25)}...`;
    }
    return ` Received type ${typeof input} (${inspected})`;
}
class ERR_OUT_OF_RANGE extends RangeError {
    code = "ERR_OUT_OF_RANGE";
    constructor(str, range, input, replaceDefaultBoolean = false){
        assert(range, 'Missing "range" argument');
        let msg = replaceDefaultBoolean ? str : `The value of "${str}" is out of range.`;
        let received;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
            received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
            received = String(input);
            if (input > 2n ** 32n || input < -(2n ** 32n)) {
                received = addNumericalSeparator(received);
            }
            received += "n";
        } else {
            received = inspect(input);
        }
        msg += ` It must be ${range}. Received ${received}`;
        super(msg);
        const { name  } = this;
        this.name = `${name} [${this.code}]`;
        this.stack;
        this.name = name;
    }
}
class ERR_BUFFER_OUT_OF_BOUNDS extends NodeRangeError {
    constructor(name){
        super("ERR_BUFFER_OUT_OF_BOUNDS", name ? `"${name}" is outside of buffer bounds` : "Attempt to access memory outside buffer bounds");
    }
}
class ERR_CHILD_PROCESS_STDIO_MAXBUFFER extends NodeRangeError {
    constructor(x){
        super("ERR_CHILD_PROCESS_STDIO_MAXBUFFER", `${x} maxBuffer length exceeded`);
    }
}
class ERR_FS_INVALID_SYMLINK_TYPE extends NodeError {
    constructor(x){
        super("ERR_FS_INVALID_SYMLINK_TYPE", `Symlink type must be one of "dir", "file", or "junction". Received "${x}"`);
    }
}
class ERR_INVALID_CURSOR_POS extends NodeTypeError {
    constructor(){
        super("ERR_INVALID_CURSOR_POS", `Cannot set cursor row without setting its column`);
    }
}
class ERR_INVALID_FILE_URL_HOST extends NodeTypeError {
    constructor(x){
        super("ERR_INVALID_FILE_URL_HOST", `File URL host must be "localhost" or empty on ${x}`);
    }
}
class ERR_INVALID_FILE_URL_PATH extends NodeTypeError {
    constructor(x){
        super("ERR_INVALID_FILE_URL_PATH", `File URL path ${x}`);
    }
}
class ERR_IPC_CHANNEL_CLOSED extends NodeError {
    constructor(){
        super("ERR_IPC_CHANNEL_CLOSED", `Channel closed`);
    }
}
class ERR_SOCKET_BAD_PORT extends NodeRangeError {
    constructor(name, port, allowZero = true){
        assert(typeof allowZero === "boolean", "The 'allowZero' argument must be of type boolean.");
        const operator = allowZero ? ">=" : ">";
        super("ERR_SOCKET_BAD_PORT", `${name} should be ${operator} 0 and < 65536. Received ${port}.`);
    }
}
class ERR_STREAM_PREMATURE_CLOSE extends NodeError {
    constructor(){
        super("ERR_STREAM_PREMATURE_CLOSE", `Premature close`);
    }
}
class ERR_UNHANDLED_ERROR extends NodeError {
    constructor(x){
        super("ERR_UNHANDLED_ERROR", `Unhandled error. (${x})`);
    }
}
class ERR_UNKNOWN_ENCODING extends NodeTypeError {
    constructor(x){
        super("ERR_UNKNOWN_ENCODING", `Unknown encoding: ${x}`);
    }
}
class ERR_UNKNOWN_SIGNAL extends NodeTypeError {
    constructor(x){
        super("ERR_UNKNOWN_SIGNAL", `Unknown signal: ${x}`);
    }
}
class ERR_INVALID_URL_SCHEME extends NodeTypeError {
    constructor(expected){
        expected = Array.isArray(expected) ? expected : [
            expected
        ];
        const res = expected.length === 2 ? `one of scheme ${expected[0]} or ${expected[1]}` : `of scheme ${expected[0]}`;
        super("ERR_INVALID_URL_SCHEME", `The URL must be ${res}`);
    }
}
class ERR_INTERNAL_ASSERTION extends NodeError {
    constructor(message){
        const suffix = "This is caused by either a bug in Node.js " + "or incorrect usage of Node.js internals.\n" + "Please open an issue with this stack trace at " + "https://github.com/nodejs/node/issues\n";
        super("ERR_INTERNAL_ASSERTION", message === undefined ? suffix : `${message}\n${suffix}`);
    }
}
function denoErrorToNodeError(e, ctx) {
    const errno = extractOsErrorNumberFromErrorMessage(e);
    if (typeof errno === "undefined") {
        return e;
    }
    const ex = uvException({
        errno: mapSysErrnoToUvErrno(errno),
        ...ctx
    });
    return ex;
}
function extractOsErrorNumberFromErrorMessage(e) {
    const match = e instanceof Error ? e.message.match(/\(os error (\d+)\)/) : false;
    if (match) {
        return +match[1];
    }
    return undefined;
}
function aggregateTwoErrors(innerError, outerError) {
    if (innerError && outerError && innerError !== outerError) {
        if (Array.isArray(outerError.errors)) {
            outerError.errors.push(innerError);
            return outerError;
        }
        const err = new AggregateError([
            outerError,
            innerError
        ], outerError.message);
        err.code = outerError.code;
        return err;
    }
    return innerError || outerError;
}
codes.ERR_IPC_CHANNEL_CLOSED = ERR_IPC_CHANNEL_CLOSED;
codes.ERR_INVALID_ARG_TYPE = ERR_INVALID_ARG_TYPE;
codes.ERR_INVALID_ARG_VALUE = ERR_INVALID_ARG_VALUE;
codes.ERR_OUT_OF_RANGE = ERR_OUT_OF_RANGE;
codes.ERR_SOCKET_BAD_PORT = ERR_SOCKET_BAD_PORT;
codes.ERR_BUFFER_OUT_OF_BOUNDS = ERR_BUFFER_OUT_OF_BOUNDS;
codes.ERR_UNKNOWN_ENCODING = ERR_UNKNOWN_ENCODING;
hideStackFrames(function genericNodeError(message, errorProperties) {
    const err = new Error(message);
    Object.assign(err, errorProperties);
    return err;
});
"use strict";
const kRejection = Symbol.for("nodejs.rejection");
const kCapture = Symbol("kCapture");
const kErrorMonitor = Symbol("events.errorMonitor");
const kMaxEventTargetListeners = Symbol("events.maxEventTargetListeners");
const kMaxEventTargetListenersWarned = Symbol("events.maxEventTargetListenersWarned");
function EventEmitter(opts) {
    EventEmitter.init.call(this, opts);
}
EventEmitter.on = on;
EventEmitter.once = once;
EventEmitter.getEventListeners = getEventListeners;
EventEmitter.setMaxListeners = setMaxListeners;
EventEmitter.listenerCount = listenerCount;
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.usingDomains = false;
EventEmitter.captureRejectionSymbol = kRejection;
EventEmitter.captureRejectionSymbol;
EventEmitter.errorMonitor;
Object.defineProperty(EventEmitter, "captureRejections", {
    get () {
        return EventEmitter.prototype[kCapture];
    },
    set (value) {
        validateBoolean(value, "EventEmitter.captureRejections");
        EventEmitter.prototype[kCapture] = value;
    },
    enumerable: true
});
EventEmitter.errorMonitor = kErrorMonitor;
Object.defineProperty(EventEmitter.prototype, kCapture, {
    value: false,
    writable: true,
    enumerable: false
});
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;
let defaultMaxListeners = 10;
function checkListener(listener) {
    validateFunction(listener, "listener");
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
    enumerable: true,
    get: function() {
        return defaultMaxListeners;
    },
    set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
            throw new ERR_OUT_OF_RANGE("defaultMaxListeners", "a non-negative number", arg);
        }
        defaultMaxListeners = arg;
    }
});
Object.defineProperties(EventEmitter, {
    kMaxEventTargetListeners: {
        value: kMaxEventTargetListeners,
        enumerable: false,
        configurable: false,
        writable: false
    },
    kMaxEventTargetListenersWarned: {
        value: kMaxEventTargetListenersWarned,
        enumerable: false,
        configurable: false,
        writable: false
    }
});
function setMaxListeners(n = defaultMaxListeners, ...eventTargets) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
        throw new ERR_OUT_OF_RANGE("n", "a non-negative number", n);
    }
    if (eventTargets.length === 0) {
        defaultMaxListeners = n;
    } else {
        for(let i = 0; i < eventTargets.length; i++){
            const target = eventTargets[i];
            if (target instanceof EventTarget) {
                target[kMaxEventTargetListeners] = n;
                target[kMaxEventTargetListenersWarned] = false;
            } else if (typeof target.setMaxListeners === "function") {
                target.setMaxListeners(n);
            } else {
                throw new ERR_INVALID_ARG_TYPE("eventTargets", [
                    "EventEmitter",
                    "EventTarget"
                ], target);
            }
        }
    }
}
EventEmitter.init = function(opts) {
    if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
        this._events = Object.create(null);
        this._eventsCount = 0;
    }
    this._maxListeners = this._maxListeners || undefined;
    if (opts?.captureRejections) {
        validateBoolean(opts.captureRejections, "options.captureRejections");
        this[kCapture] = Boolean(opts.captureRejections);
    } else {
        this[kCapture] = EventEmitter.prototype[kCapture];
    }
};
function addCatch(that, promise, type, args) {
    if (!that[kCapture]) {
        return;
    }
    try {
        const then = promise.then;
        if (typeof then === "function") {
            then.call(promise, undefined, function(err) {
                process.nextTick(emitUnhandledRejectionOrErr, that, err, type, args);
            });
        }
    } catch (err) {
        that.emit("error", err);
    }
}
function emitUnhandledRejectionOrErr(ee, err, type, args) {
    if (typeof ee[kRejection] === "function") {
        ee[kRejection](err, type, ...args);
    } else {
        const prev = ee[kCapture];
        try {
            ee[kCapture] = false;
            ee.emit("error", err);
        } finally{
            ee[kCapture] = prev;
        }
    }
}
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
        throw new ERR_OUT_OF_RANGE("n", "a non-negative number", n);
    }
    this._maxListeners = n;
    return this;
};
function _getMaxListeners(that) {
    if (that._maxListeners === undefined) {
        return EventEmitter.defaultMaxListeners;
    }
    return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
    return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type, ...args) {
    let doError = type === "error";
    const events = this._events;
    if (events !== undefined) {
        if (doError && events[kErrorMonitor] !== undefined) {
            this.emit(kErrorMonitor, ...args);
        }
        doError = doError && events.error === undefined;
    } else if (!doError) {
        return false;
    }
    if (doError) {
        let er;
        if (args.length > 0) {
            er = args[0];
        }
        if (er instanceof Error) {
            try {
                const capture = {};
                Error.captureStackTrace(capture, EventEmitter.prototype.emit);
            } catch  {}
            throw er;
        }
        let stringifiedEr;
        try {
            stringifiedEr = inspect(er);
        } catch  {
            stringifiedEr = er;
        }
        const err = new ERR_UNHANDLED_ERROR(stringifiedEr);
        err.context = er;
        throw err;
    }
    const handler = events[type];
    if (handler === undefined) {
        return false;
    }
    if (typeof handler === "function") {
        const result = handler.apply(this, args);
        if (result !== undefined && result !== null) {
            addCatch(this, result, type, args);
        }
    } else {
        const len = handler.length;
        const listeners = arrayClone(handler);
        for(let i = 0; i < len; ++i){
            const result1 = listeners[i].apply(this, args);
            if (result1 !== undefined && result1 !== null) {
                addCatch(this, result1, type, args);
            }
        }
    }
    return true;
};
function _addListener(target, type, listener, prepend) {
    let m;
    let events;
    let existing;
    checkListener(listener);
    events = target._events;
    if (events === undefined) {
        events = target._events = Object.create(null);
        target._eventsCount = 0;
    } else {
        if (events.newListener !== undefined) {
            target.emit("newListener", type, listener.listener ?? listener);
            events = target._events;
        }
        existing = events[type];
    }
    if (existing === undefined) {
        events[type] = listener;
        ++target._eventsCount;
    } else {
        if (typeof existing === "function") {
            existing = events[type] = prepend ? [
                listener,
                existing
            ] : [
                existing,
                listener
            ];
        } else if (prepend) {
            existing.unshift(listener);
        } else {
            existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
            existing.warned = true;
            const w = new Error("Possible EventEmitter memory leak detected. " + `${existing.length} ${String(type)} listeners ` + `added to ${inspect(target, {
                depth: -1
            })}. Use ` + "emitter.setMaxListeners() to increase limit");
            w.name = "MaxListenersExceededWarning";
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            process.emitWarning(w);
        }
    }
    return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
    return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
    return _addListener(this, type, listener, true);
};
function onceWrapper() {
    if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0) {
            return this.listener.call(this.target);
        }
        return this.listener.apply(this.target, arguments);
    }
}
function _onceWrap(target, type, listener) {
    const state = {
        fired: false,
        wrapFn: undefined,
        target,
        type,
        listener
    };
    const wrapped = onceWrapper.bind(state);
    wrapped.listener = listener;
    state.wrapFn = wrapped;
    return wrapped;
}
EventEmitter.prototype.once = function once(type, listener) {
    checkListener(listener);
    this.on(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
    checkListener(listener);
    this.prependListener(type, _onceWrap(this, type, listener));
    return this;
};
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
    checkListener(listener);
    const events = this._events;
    if (events === undefined) {
        return this;
    }
    const list = events[type];
    if (list === undefined) {
        return this;
    }
    if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0) {
            this._events = Object.create(null);
        } else {
            delete events[type];
            if (events.removeListener) {
                this.emit("removeListener", type, list.listener || listener);
            }
        }
    } else if (typeof list !== "function") {
        let position = -1;
        for(let i = list.length - 1; i >= 0; i--){
            if (list[i] === listener || list[i].listener === listener) {
                position = i;
                break;
            }
        }
        if (position < 0) {
            return this;
        }
        if (position === 0) {
            list.shift();
        } else {
            spliceOne(list, position);
        }
        if (list.length === 1) {
            events[type] = list[0];
        }
        if (events.removeListener !== undefined) {
            this.emit("removeListener", type, listener);
        }
    }
    return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
    const events = this._events;
    if (events === undefined) {
        return this;
    }
    if (events.removeListener === undefined) {
        if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
        } else if (events[type] !== undefined) {
            if (--this._eventsCount === 0) {
                this._events = Object.create(null);
            } else {
                delete events[type];
            }
        }
        return this;
    }
    if (arguments.length === 0) {
        for (const key of Reflect.ownKeys(events)){
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
    }
    const listeners = events[type];
    if (typeof listeners === "function") {
        this.removeListener(type, listeners);
    } else if (listeners !== undefined) {
        for(let i = listeners.length - 1; i >= 0; i--){
            this.removeListener(type, listeners[i]);
        }
    }
    return this;
};
function _listeners(target, type, unwrap) {
    const events = target._events;
    if (events === undefined) {
        return [];
    }
    const evlistener = events[type];
    if (evlistener === undefined) {
        return [];
    }
    if (typeof evlistener === "function") {
        return unwrap ? [
            evlistener.listener || evlistener
        ] : [
            evlistener
        ];
    }
    return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener);
}
EventEmitter.prototype.listeners = function listeners(type) {
    return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
    return _listeners(this, type, false);
};
const _listenerCount = function listenerCount(type) {
    const events = this._events;
    if (events !== undefined) {
        const evlistener = events[type];
        if (typeof evlistener === "function") {
            return 1;
        } else if (evlistener !== undefined) {
            return evlistener.length;
        }
    }
    return 0;
};
EventEmitter.prototype.listenerCount = _listenerCount;
function listenerCount(emitter, type) {
    if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
    }
    return _listenerCount.call(emitter, type);
}
EventEmitter.prototype.eventNames = function eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
function arrayClone(arr) {
    switch(arr.length){
        case 2:
            return [
                arr[0],
                arr[1]
            ];
        case 3:
            return [
                arr[0],
                arr[1],
                arr[2]
            ];
        case 4:
            return [
                arr[0],
                arr[1],
                arr[2],
                arr[3]
            ];
        case 5:
            return [
                arr[0],
                arr[1],
                arr[2],
                arr[3],
                arr[4]
            ];
        case 6:
            return [
                arr[0],
                arr[1],
                arr[2],
                arr[3],
                arr[4],
                arr[5]
            ];
    }
    return arr.slice();
}
function unwrapListeners(arr) {
    const ret = arrayClone(arr);
    for(let i = 0; i < ret.length; ++i){
        const orig = ret[i].listener;
        if (typeof orig === "function") {
            ret[i] = orig;
        }
    }
    return ret;
}
function getEventListeners(emitterOrTarget, type) {
    if (typeof emitterOrTarget.listeners === "function") {
        return emitterOrTarget.listeners(type);
    }
    if (emitterOrTarget instanceof EventTarget) {
        const root = emitterOrTarget[kEvents].get(type);
        const listeners = [];
        let handler = root?.next;
        while(handler?.listener !== undefined){
            const listener = handler.listener?.deref ? handler.listener.deref() : handler.listener;
            listeners.push(listener);
            handler = handler.next;
        }
        return listeners;
    }
    throw new ERR_INVALID_ARG_TYPE("emitter", [
        "EventEmitter",
        "EventTarget"
    ], emitterOrTarget);
}
async function once(emitter, name, options = {}) {
    const signal = options?.signal;
    validateAbortSignal(signal, "options.signal");
    if (signal?.aborted) {
        throw new AbortError();
    }
    return new Promise((resolve, reject)=>{
        const errorListener = (err)=>{
            emitter.removeListener(name, resolver);
            if (signal != null) {
                eventTargetAgnosticRemoveListener(signal, "abort", abortListener);
            }
            reject(err);
        };
        const resolver = (...args)=>{
            if (typeof emitter.removeListener === "function") {
                emitter.removeListener("error", errorListener);
            }
            if (signal != null) {
                eventTargetAgnosticRemoveListener(signal, "abort", abortListener);
            }
            resolve(args);
        };
        eventTargetAgnosticAddListener(emitter, name, resolver, {
            once: true
        });
        if (name !== "error" && typeof emitter.once === "function") {
            emitter.once("error", errorListener);
        }
        function abortListener() {
            eventTargetAgnosticRemoveListener(emitter, name, resolver);
            eventTargetAgnosticRemoveListener(emitter, "error", errorListener);
            reject(new AbortError());
        }
        if (signal != null) {
            eventTargetAgnosticAddListener(signal, "abort", abortListener, {
                once: true
            });
        }
    });
}
const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function*() {}).prototype);
function createIterResult(value, done) {
    return {
        value,
        done
    };
}
function eventTargetAgnosticRemoveListener(emitter, name, listener, flags) {
    if (typeof emitter.removeListener === "function") {
        emitter.removeListener(name, listener);
    } else if (typeof emitter.removeEventListener === "function") {
        emitter.removeEventListener(name, listener, flags);
    } else {
        throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter);
    }
}
function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
    if (typeof emitter.on === "function") {
        if (flags?.once) {
            emitter.once(name, listener);
        } else {
            emitter.on(name, listener);
        }
    } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, (arg)=>{
            listener(arg);
        }, flags);
    } else {
        throw new ERR_INVALID_ARG_TYPE("emitter", "EventEmitter", emitter);
    }
}
function on(emitter, event, options) {
    const signal = options?.signal;
    validateAbortSignal(signal, "options.signal");
    if (signal?.aborted) {
        throw new AbortError();
    }
    const unconsumedEvents = [];
    const unconsumedPromises = [];
    let error = null;
    let finished = false;
    const iterator = Object.setPrototypeOf({
        next () {
            const value = unconsumedEvents.shift();
            if (value) {
                return Promise.resolve(createIterResult(value, false));
            }
            if (error) {
                const p = Promise.reject(error);
                error = null;
                return p;
            }
            if (finished) {
                return Promise.resolve(createIterResult(undefined, true));
            }
            return new Promise(function(resolve, reject) {
                unconsumedPromises.push({
                    resolve,
                    reject
                });
            });
        },
        return () {
            eventTargetAgnosticRemoveListener(emitter, event, eventHandler);
            eventTargetAgnosticRemoveListener(emitter, "error", errorHandler);
            if (signal) {
                eventTargetAgnosticRemoveListener(signal, "abort", abortListener, {
                    once: true
                });
            }
            finished = true;
            for (const promise of unconsumedPromises){
                promise.resolve(createIterResult(undefined, true));
            }
            return Promise.resolve(createIterResult(undefined, true));
        },
        throw (err) {
            if (!err || !(err instanceof Error)) {
                throw new ERR_INVALID_ARG_TYPE("EventEmitter.AsyncIterator", "Error", err);
            }
            error = err;
            eventTargetAgnosticRemoveListener(emitter, event, eventHandler);
            eventTargetAgnosticRemoveListener(emitter, "error", errorHandler);
        },
        [Symbol.asyncIterator] () {
            return this;
        }
    }, AsyncIteratorPrototype);
    eventTargetAgnosticAddListener(emitter, event, eventHandler);
    if (event !== "error" && typeof emitter.on === "function") {
        emitter.on("error", errorHandler);
    }
    if (signal) {
        eventTargetAgnosticAddListener(signal, "abort", abortListener, {
            once: true
        });
    }
    return iterator;
    function abortListener() {
        errorHandler(new AbortError());
    }
    function eventHandler(...args) {
        const promise = unconsumedPromises.shift();
        if (promise) {
            promise.resolve(createIterResult(args, false));
        } else {
            unconsumedEvents.push(args);
        }
    }
    function errorHandler(err) {
        finished = true;
        const toError = unconsumedPromises.shift();
        if (toError) {
            toError.reject(err);
        } else {
            error = err;
        }
        iterator.return();
    }
}
const { hasOwn  } = Object;
function get(obj, key) {
    if (hasOwn(obj, key)) {
        return obj[key];
    }
}
function getForce(obj, key) {
    const v = get(obj, key);
    assert(v != null);
    return v;
}
function isNumber(x) {
    if (typeof x === "number") return true;
    if (/^0x[0-9a-f]+$/i.test(String(x))) return true;
    return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(String(x));
}
function hasKey(obj, keys) {
    let o = obj;
    keys.slice(0, -1).forEach((key)=>{
        o = get(o, key) ?? {};
    });
    const key = keys[keys.length - 1];
    return hasOwn(o, key);
}
function parse(args, { "--": doubleDash = false , alias ={} , boolean: __boolean = false , default: defaults = {} , stopEarly =false , string =[] , collect =[] , negatable =[] , unknown =(i)=>i  } = {}) {
    const aliases = {};
    const flags = {
        bools: {},
        strings: {},
        unknownFn: unknown,
        allBools: false,
        collect: {},
        negatable: {}
    };
    if (alias !== undefined) {
        for(const key in alias){
            const val = getForce(alias, key);
            if (typeof val === "string") {
                aliases[key] = [
                    val
                ];
            } else {
                aliases[key] = val;
            }
            for (const alias1 of getForce(aliases, key)){
                aliases[alias1] = [
                    key
                ].concat(aliases[key].filter((y)=>alias1 !== y));
            }
        }
    }
    if (__boolean !== undefined) {
        if (typeof __boolean === "boolean") {
            flags.allBools = !!__boolean;
        } else {
            const booleanArgs = typeof __boolean === "string" ? [
                __boolean
            ] : __boolean;
            for (const key1 of booleanArgs.filter(Boolean)){
                flags.bools[key1] = true;
                const alias2 = get(aliases, key1);
                if (alias2) {
                    for (const al of alias2){
                        flags.bools[al] = true;
                    }
                }
            }
        }
    }
    if (string !== undefined) {
        const stringArgs = typeof string === "string" ? [
            string
        ] : string;
        for (const key2 of stringArgs.filter(Boolean)){
            flags.strings[key2] = true;
            const alias3 = get(aliases, key2);
            if (alias3) {
                for (const al1 of alias3){
                    flags.strings[al1] = true;
                }
            }
        }
    }
    if (collect !== undefined) {
        const collectArgs = typeof collect === "string" ? [
            collect
        ] : collect;
        for (const key3 of collectArgs.filter(Boolean)){
            flags.collect[key3] = true;
            const alias4 = get(aliases, key3);
            if (alias4) {
                for (const al2 of alias4){
                    flags.collect[al2] = true;
                }
            }
        }
    }
    if (negatable !== undefined) {
        const negatableArgs = typeof negatable === "string" ? [
            negatable
        ] : negatable;
        for (const key4 of negatableArgs.filter(Boolean)){
            flags.negatable[key4] = true;
            const alias5 = get(aliases, key4);
            if (alias5) {
                for (const al3 of alias5){
                    flags.negatable[al3] = true;
                }
            }
        }
    }
    const argv = {
        _: []
    };
    function argDefined(key, arg) {
        return flags.allBools && /^--[^=]+$/.test(arg) || get(flags.bools, key) || !!get(flags.strings, key) || !!get(aliases, key);
    }
    function setKey(obj, name, value, collect = true) {
        let o = obj;
        const keys = name.split(".");
        keys.slice(0, -1).forEach(function(key) {
            if (get(o, key) === undefined) {
                o[key] = {};
            }
            o = get(o, key);
        });
        const key = keys[keys.length - 1];
        const collectable = collect && !!get(flags.collect, name);
        if (!collectable) {
            o[key] = value;
        } else if (get(o, key) === undefined) {
            o[key] = [
                value
            ];
        } else if (Array.isArray(get(o, key))) {
            o[key].push(value);
        } else {
            o[key] = [
                get(o, key),
                value
            ];
        }
    }
    function setArg(key, val, arg = undefined, collect) {
        if (arg && flags.unknownFn && !argDefined(key, arg)) {
            if (flags.unknownFn(arg, key, val) === false) return;
        }
        const value = !get(flags.strings, key) && isNumber(val) ? Number(val) : val;
        setKey(argv, key, value, collect);
        const alias = get(aliases, key);
        if (alias) {
            for (const x of alias){
                setKey(argv, x, value, collect);
            }
        }
    }
    function aliasIsBoolean(key) {
        return getForce(aliases, key).some((x)=>typeof get(flags.bools, x) === "boolean");
    }
    let notFlags = [];
    if (args.includes("--")) {
        notFlags = args.slice(args.indexOf("--") + 1);
        args = args.slice(0, args.indexOf("--"));
    }
    for(let i = 0; i < args.length; i++){
        const arg = args[i];
        if (/^--.+=/.test(arg)) {
            const m = arg.match(/^--([^=]+)=(.*)$/s);
            assert(m != null);
            const [, key5, value] = m;
            if (flags.bools[key5]) {
                const booleanValue = value !== "false";
                setArg(key5, booleanValue, arg);
            } else {
                setArg(key5, value, arg);
            }
        } else if (/^--no-.+/.test(arg) && get(flags.negatable, arg.replace(/^--no-/, ""))) {
            const m1 = arg.match(/^--no-(.+)/);
            assert(m1 != null);
            setArg(m1[1], false, arg, false);
        } else if (/^--.+/.test(arg)) {
            const m2 = arg.match(/^--(.+)/);
            assert(m2 != null);
            const [, key6] = m2;
            const next = args[i + 1];
            if (next !== undefined && !/^-/.test(next) && !get(flags.bools, key6) && !flags.allBools && (get(aliases, key6) ? !aliasIsBoolean(key6) : true)) {
                setArg(key6, next, arg);
                i++;
            } else if (/^(true|false)$/.test(next)) {
                setArg(key6, next === "true", arg);
                i++;
            } else {
                setArg(key6, get(flags.strings, key6) ? "" : true, arg);
            }
        } else if (/^-[^-]+/.test(arg)) {
            const letters = arg.slice(1, -1).split("");
            let broken = false;
            for(let j = 0; j < letters.length; j++){
                const next1 = arg.slice(j + 2);
                if (next1 === "-") {
                    setArg(letters[j], next1, arg);
                    continue;
                }
                if (/[A-Za-z]/.test(letters[j]) && /=/.test(next1)) {
                    setArg(letters[j], next1.split(/=(.+)/)[1], arg);
                    broken = true;
                    break;
                }
                if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next1)) {
                    setArg(letters[j], next1, arg);
                    broken = true;
                    break;
                }
                if (letters[j + 1] && letters[j + 1].match(/\W/)) {
                    setArg(letters[j], arg.slice(j + 2), arg);
                    broken = true;
                    break;
                } else {
                    setArg(letters[j], get(flags.strings, letters[j]) ? "" : true, arg);
                }
            }
            const [key7] = arg.slice(-1);
            if (!broken && key7 !== "-") {
                if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !get(flags.bools, key7) && (get(aliases, key7) ? !aliasIsBoolean(key7) : true)) {
                    setArg(key7, args[i + 1], arg);
                    i++;
                } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
                    setArg(key7, args[i + 1] === "true", arg);
                    i++;
                } else {
                    setArg(key7, get(flags.strings, key7) ? "" : true, arg);
                }
            }
        } else {
            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
                argv._.push(flags.strings["_"] ?? !isNumber(arg) ? arg : Number(arg));
            }
            if (stopEarly) {
                argv._.push(...args.slice(i + 1));
                break;
            }
        }
    }
    for (const [key8, value1] of Object.entries(defaults)){
        if (!hasKey(argv, key8.split("."))) {
            setKey(argv, key8, value1);
            if (aliases[key8]) {
                for (const x of aliases[key8]){
                    setKey(argv, x, value1);
                }
            }
        }
    }
    for (const key9 of Object.keys(flags.bools)){
        if (!hasKey(argv, key9.split("."))) {
            const value2 = get(flags.collect, key9) ? [] : false;
            setKey(argv, key9, value2, false);
        }
    }
    for (const key10 of Object.keys(flags.strings)){
        if (!hasKey(argv, key10.split(".")) && get(flags.collect, key10)) {
            setKey(argv, key10, [], false);
        }
    }
    if (doubleDash) {
        argv["--"] = [];
        for (const key11 of notFlags){
            argv["--"].push(key11);
        }
    } else {
        for (const key12 of notFlags){
            argv._.push(key12);
        }
    }
    return argv;
}
function getOptions() {
    const { Deno: Deno1  } = globalThis;
    const args = parse(Deno1?.args ?? []);
    const options = new Map(Object.entries(args).map(([key, value])=>[
            key,
            {
                value
            }
        ]));
    return {
        options
    };
}
let optionsMap;
function getOptionsFromBinding() {
    if (!optionsMap) {
        ({ options: optionsMap  } = getOptions());
    }
    return optionsMap;
}
function getOptionValue(optionName) {
    const options = getOptionsFromBinding();
    if (optionName.startsWith("--no-")) {
        const option = options.get("--" + optionName.slice(5));
        return option && !option.value;
    }
    return options.get(optionName)?.value;
}
const CHAR_FORWARD_SLASH = 47;
function assertPath(path) {
    if (typeof path !== "string") {
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(path)}`);
    }
}
function isPosixPathSeparator(code) {
    return code === 47;
}
function isPathSeparator(code) {
    return isPosixPathSeparator(code) || code === 92;
}
function isWindowsDeviceRoot(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code;
    for(let i = 0, len = path.length; i <= len; ++i){
        if (i < len) code = path.charCodeAt(i);
        else if (isPathSeparator(code)) break;
        else code = CHAR_FORWARD_SLASH;
        if (isPathSeparator(code)) {
            if (lastSlash === i - 1 || dots === 1) {} else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf(separator);
                        if (lastSlashIndex === -1) {
                            res = "";
                            lastSegmentLength = 0;
                        } else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                        }
                        lastSlash = i;
                        dots = 0;
                        continue;
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += `${separator}..`;
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += separator + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 && dots !== -1) {
            ++dots;
        } else {
            dots = -1;
        }
    }
    return res;
}
function _format(sep, pathObject) {
    const dir = pathObject.dir || pathObject.root;
    const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
const WHITESPACE_ENCODINGS = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20"
};
function encodeWhitespace(string) {
    return string.replaceAll(/[\s]/g, (c)=>{
        return WHITESPACE_ENCODINGS[c] ?? c;
    });
}
const sep = "\\";
const delimiter = ";";
function resolve(...pathSegments) {
    let resolvedDevice = "";
    let resolvedTail = "";
    let resolvedAbsolute = false;
    for(let i = pathSegments.length - 1; i >= -1; i--){
        let path;
        const { Deno: Deno1  } = globalThis;
        if (i >= 0) {
            path = pathSegments[i];
        } else if (!resolvedDevice) {
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a drive-letter-less path without a CWD.");
            }
            path = Deno1.cwd();
        } else {
            if (typeof Deno1?.env?.get !== "function" || typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path = Deno1.cwd();
            if (path === undefined || path.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
                path = `${resolvedDevice}\\`;
            }
        }
        assertPath(path);
        const len = path.length;
        if (len === 0) continue;
        let rootEnd = 0;
        let device = "";
        let isAbsolute = false;
        const code = path.charCodeAt(0);
        if (len > 1) {
            if (isPathSeparator(code)) {
                isAbsolute = true;
                if (isPathSeparator(path.charCodeAt(1))) {
                    let j = 2;
                    let last = j;
                    for(; j < len; ++j){
                        if (isPathSeparator(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        const firstPart = path.slice(last, j);
                        last = j;
                        for(; j < len; ++j){
                            if (!isPathSeparator(path.charCodeAt(j))) break;
                        }
                        if (j < len && j !== last) {
                            last = j;
                            for(; j < len; ++j){
                                if (isPathSeparator(path.charCodeAt(j))) break;
                            }
                            if (j === len) {
                                device = `\\\\${firstPart}\\${path.slice(last)}`;
                                rootEnd = j;
                            } else if (j !== last) {
                                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                                rootEnd = j;
                            }
                        }
                    }
                } else {
                    rootEnd = 1;
                }
            } else if (isWindowsDeviceRoot(code)) {
                if (path.charCodeAt(1) === 58) {
                    device = path.slice(0, 2);
                    rootEnd = 2;
                    if (len > 2) {
                        if (isPathSeparator(path.charCodeAt(2))) {
                            isAbsolute = true;
                            rootEnd = 3;
                        }
                    }
                }
            }
        } else if (isPathSeparator(code)) {
            rootEnd = 1;
            isAbsolute = true;
        }
        if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            continue;
        }
        if (resolvedDevice.length === 0 && device.length > 0) {
            resolvedDevice = device;
        }
        if (!resolvedAbsolute) {
            resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
            resolvedAbsolute = isAbsolute;
        }
        if (resolvedAbsolute && resolvedDevice.length > 0) break;
    }
    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
    return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize(path) {
    assertPath(path);
    const len = path.length;
    if (len === 0) return ".";
    let rootEnd = 0;
    let device;
    let isAbsolute = false;
    const code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code)) {
            isAbsolute = true;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    const firstPart = path.slice(last, j);
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            return `\\\\${firstPart}\\${path.slice(last)}\\`;
                        } else if (j !== last) {
                            device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                            rootEnd = j;
                        }
                    }
                }
            } else {
                rootEnd = 1;
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                device = path.slice(0, 2);
                rootEnd = 2;
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) {
                        isAbsolute = true;
                        rootEnd = 3;
                    }
                }
            }
        }
    } else if (isPathSeparator(code)) {
        return "\\";
    }
    let tail;
    if (rootEnd < len) {
        tail = normalizeString(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator);
    } else {
        tail = "";
    }
    if (tail.length === 0 && !isAbsolute) tail = ".";
    if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
        tail += "\\";
    }
    if (device === undefined) {
        if (isAbsolute) {
            if (tail.length > 0) return `\\${tail}`;
            else return "\\";
        } else if (tail.length > 0) {
            return tail;
        } else {
            return "";
        }
    } else if (isAbsolute) {
        if (tail.length > 0) return `${device}\\${tail}`;
        else return `${device}\\`;
    } else if (tail.length > 0) {
        return device + tail;
    } else {
        return device;
    }
}
function isAbsolute(path) {
    assertPath(path);
    const len = path.length;
    if (len === 0) return false;
    const code = path.charCodeAt(0);
    if (isPathSeparator(code)) {
        return true;
    } else if (isWindowsDeviceRoot(code)) {
        if (len > 2 && path.charCodeAt(1) === 58) {
            if (isPathSeparator(path.charCodeAt(2))) return true;
        }
    }
    return false;
}
function join1(...paths) {
    const pathsCount = paths.length;
    if (pathsCount === 0) return ".";
    let joined;
    let firstPart = null;
    for(let i = 0; i < pathsCount; ++i){
        const path = paths[i];
        assertPath(path);
        if (path.length > 0) {
            if (joined === undefined) joined = firstPart = path;
            else joined += `\\${path}`;
        }
    }
    if (joined === undefined) return ".";
    let needsReplace = true;
    let slashCount = 0;
    assert(firstPart != null);
    if (isPathSeparator(firstPart.charCodeAt(0))) {
        ++slashCount;
        const firstLen = firstPart.length;
        if (firstLen > 1) {
            if (isPathSeparator(firstPart.charCodeAt(1))) {
                ++slashCount;
                if (firstLen > 2) {
                    if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
                    else {
                        needsReplace = false;
                    }
                }
            }
        }
    }
    if (needsReplace) {
        for(; slashCount < joined.length; ++slashCount){
            if (!isPathSeparator(joined.charCodeAt(slashCount))) break;
        }
        if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
    }
    return normalize(joined);
}
function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return "";
    const fromOrig = resolve(from);
    const toOrig = resolve(to);
    if (fromOrig === toOrig) return "";
    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();
    if (from === to) return "";
    let fromStart = 0;
    let fromEnd = from.length;
    for(; fromStart < fromEnd; ++fromStart){
        if (from.charCodeAt(fromStart) !== 92) break;
    }
    for(; fromEnd - 1 > fromStart; --fromEnd){
        if (from.charCodeAt(fromEnd - 1) !== 92) break;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 0;
    let toEnd = to.length;
    for(; toStart < toEnd; ++toStart){
        if (to.charCodeAt(toStart) !== 92) break;
    }
    for(; toEnd - 1 > toStart; --toEnd){
        if (to.charCodeAt(toEnd - 1) !== 92) break;
    }
    const toLen = toEnd - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for(; i <= length; ++i){
        if (i === length) {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === 92) {
                    return toOrig.slice(toStart + i + 1);
                } else if (i === 2) {
                    return toOrig.slice(toStart + i);
                }
            }
            if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === 92) {
                    lastCommonSep = i;
                } else if (i === 2) {
                    lastCommonSep = 3;
                }
            }
            break;
        }
        const fromCode = from.charCodeAt(fromStart + i);
        const toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode) break;
        else if (fromCode === 92) lastCommonSep = i;
    }
    if (i !== length && lastCommonSep === -1) {
        return toOrig;
    }
    let out = "";
    if (lastCommonSep === -1) lastCommonSep = 0;
    for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i){
        if (i === fromEnd || from.charCodeAt(i) === 92) {
            if (out.length === 0) out += "..";
            else out += "\\..";
        }
    }
    if (out.length > 0) {
        return out + toOrig.slice(toStart + lastCommonSep, toEnd);
    } else {
        toStart += lastCommonSep;
        if (toOrig.charCodeAt(toStart) === 92) ++toStart;
        return toOrig.slice(toStart, toEnd);
    }
}
function toNamespacedPath(path) {
    if (typeof path !== "string") return path;
    if (path.length === 0) return "";
    const resolvedPath = resolve(path);
    if (resolvedPath.length >= 3) {
        if (resolvedPath.charCodeAt(0) === 92) {
            if (resolvedPath.charCodeAt(1) === 92) {
                const code = resolvedPath.charCodeAt(2);
                if (code !== 63 && code !== 46) {
                    return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
                }
            }
        } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
            if (resolvedPath.charCodeAt(1) === 58 && resolvedPath.charCodeAt(2) === 92) {
                return `\\\\?\\${resolvedPath}`;
            }
        }
    }
    return path;
}
function dirname(path) {
    assertPath(path);
    const len = path.length;
    if (len === 0) return ".";
    let rootEnd = -1;
    let end = -1;
    let matchedSlash = true;
    let offset = 0;
    const code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code)) {
            rootEnd = offset = 1;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            return path;
                        }
                        if (j !== last) {
                            rootEnd = offset = j + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                rootEnd = offset = 2;
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) rootEnd = offset = 3;
                }
            }
        }
    } else if (isPathSeparator(code)) {
        return path;
    }
    for(let i = len - 1; i >= offset; --i){
        if (isPathSeparator(path.charCodeAt(i))) {
            if (!matchedSlash) {
                end = i;
                break;
            }
        } else {
            matchedSlash = false;
        }
    }
    if (end === -1) {
        if (rootEnd === -1) return ".";
        else end = rootEnd;
    }
    return path.slice(0, end);
}
function basename(path, ext = "") {
    if (ext !== undefined && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path);
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (path.length >= 2) {
        const drive = path.charCodeAt(0);
        if (isWindowsDeviceRoot(drive)) {
            if (path.charCodeAt(1) === 58) start = 2;
        }
    }
    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
        if (ext.length === path.length && ext === path) return "";
        let extIdx = ext.length - 1;
        let firstNonSlashEnd = -1;
        for(i = path.length - 1; i >= start; --i){
            const code = path.charCodeAt(i);
            if (isPathSeparator(code)) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd === -1) {
                    matchedSlash = false;
                    firstNonSlashEnd = i + 1;
                }
                if (extIdx >= 0) {
                    if (code === ext.charCodeAt(extIdx)) {
                        if (--extIdx === -1) {
                            end = i;
                        }
                    } else {
                        extIdx = -1;
                        end = firstNonSlashEnd;
                    }
                }
            }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path.length;
        return path.slice(start, end);
    } else {
        for(i = path.length - 1; i >= start; --i){
            if (isPathSeparator(path.charCodeAt(i))) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) return "";
        return path.slice(start, end);
    }
}
function extname(path) {
    assertPath(path);
    let start = 0;
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    if (path.length >= 2 && path.charCodeAt(1) === 58 && isWindowsDeviceRoot(path.charCodeAt(0))) {
        start = startPart = 2;
    }
    for(let i = path.length - 1; i >= start; --i){
        const code = path.charCodeAt(i);
        if (isPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path.slice(startDot, end);
}
function format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
    }
    return _format("\\", pathObject);
}
function parse1(path) {
    assertPath(path);
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    const len = path.length;
    if (len === 0) return ret;
    let rootEnd = 0;
    let code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator(code)) {
            rootEnd = 1;
            if (isPathSeparator(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            rootEnd = j;
                        } else if (j !== last) {
                            rootEnd = j + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot(code)) {
            if (path.charCodeAt(1) === 58) {
                rootEnd = 2;
                if (len > 2) {
                    if (isPathSeparator(path.charCodeAt(2))) {
                        if (len === 3) {
                            ret.root = ret.dir = path;
                            return ret;
                        }
                        rootEnd = 3;
                    }
                } else {
                    ret.root = ret.dir = path;
                    return ret;
                }
            }
        }
    } else if (isPathSeparator(code)) {
        ret.root = ret.dir = path;
        return ret;
    }
    if (rootEnd > 0) ret.root = path.slice(0, rootEnd);
    let startDot = -1;
    let startPart = rootEnd;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for(; i >= rootEnd; --i){
        code = path.charCodeAt(i);
        if (isPathSeparator(code)) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
            ret.base = ret.name = path.slice(startPart, end);
        }
    } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
        ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0 && startPart !== rootEnd) {
        ret.dir = path.slice(0, startPart - 1);
    } else ret.dir = ret.root;
    return ret;
}
function fromFileUrl(url) {
    url = url instanceof URL ? url : new URL(url);
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    let path = decodeURIComponent(url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
    if (url.hostname != "") {
        path = `\\\\${url.hostname}${path}`;
    }
    return path;
}
function toFileUrl(path) {
    if (!isAbsolute(path)) {
        throw new TypeError("Must be an absolute path.");
    }
    const [, hostname, pathname] = path.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
    const url = new URL("file:///");
    url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
    if (hostname != null && hostname != "localhost") {
        url.hostname = hostname;
        if (!url.hostname) {
            throw new TypeError("Invalid hostname.");
        }
    }
    return url;
}
const mod5 = {
    sep: sep,
    delimiter: delimiter,
    resolve: resolve,
    normalize: normalize,
    isAbsolute: isAbsolute,
    join: join1,
    relative: relative,
    toNamespacedPath: toNamespacedPath,
    dirname: dirname,
    basename: basename,
    extname: extname,
    format: format,
    parse: parse1,
    fromFileUrl: fromFileUrl,
    toFileUrl: toFileUrl
};
const sep1 = "/";
const delimiter1 = ":";
function resolve1(...pathSegments) {
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for(let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--){
        let path;
        if (i >= 0) path = pathSegments[i];
        else {
            const { Deno: Deno1  } = globalThis;
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path = Deno1.cwd();
        }
        assertPath(path);
        if (path.length === 0) {
            continue;
        }
        resolvedPath = `${path}/${resolvedPath}`;
        resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
    if (resolvedAbsolute) {
        if (resolvedPath.length > 0) return `/${resolvedPath}`;
        else return "/";
    } else if (resolvedPath.length > 0) return resolvedPath;
    else return ".";
}
function normalize1(path) {
    assertPath(path);
    if (path.length === 0) return ".";
    const isAbsolute = path.charCodeAt(0) === 47;
    const trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    path = normalizeString(path, !isAbsolute, "/", isPosixPathSeparator);
    if (path.length === 0 && !isAbsolute) path = ".";
    if (path.length > 0 && trailingSeparator) path += "/";
    if (isAbsolute) return `/${path}`;
    return path;
}
function isAbsolute1(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
}
function join2(...paths) {
    if (paths.length === 0) return ".";
    let joined;
    for(let i = 0, len = paths.length; i < len; ++i){
        const path = paths[i];
        assertPath(path);
        if (path.length > 0) {
            if (!joined) joined = path;
            else joined += `/${path}`;
        }
    }
    if (!joined) return ".";
    return normalize1(joined);
}
function relative1(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return "";
    from = resolve1(from);
    to = resolve1(to);
    if (from === to) return "";
    let fromStart = 1;
    const fromEnd = from.length;
    for(; fromStart < fromEnd; ++fromStart){
        if (from.charCodeAt(fromStart) !== 47) break;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 1;
    const toEnd = to.length;
    for(; toStart < toEnd; ++toStart){
        if (to.charCodeAt(toStart) !== 47) break;
    }
    const toLen = toEnd - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for(; i <= length; ++i){
        if (i === length) {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === 47) {
                    return to.slice(toStart + i + 1);
                } else if (i === 0) {
                    return to.slice(toStart + i);
                }
            } else if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === 47) {
                    lastCommonSep = i;
                } else if (i === 0) {
                    lastCommonSep = 0;
                }
            }
            break;
        }
        const fromCode = from.charCodeAt(fromStart + i);
        const toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode) break;
        else if (fromCode === 47) lastCommonSep = i;
    }
    let out = "";
    for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i){
        if (i === fromEnd || from.charCodeAt(i) === 47) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
    }
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
    else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47) ++toStart;
        return to.slice(toStart);
    }
}
function toNamespacedPath1(path) {
    return path;
}
function dirname1(path) {
    assertPath(path);
    if (path.length === 0) return ".";
    const hasRoot = path.charCodeAt(0) === 47;
    let end = -1;
    let matchedSlash = true;
    for(let i = path.length - 1; i >= 1; --i){
        if (path.charCodeAt(i) === 47) {
            if (!matchedSlash) {
                end = i;
                break;
            }
        } else {
            matchedSlash = false;
        }
    }
    if (end === -1) return hasRoot ? "/" : ".";
    if (hasRoot && end === 1) return "//";
    return path.slice(0, end);
}
function basename1(path, ext = "") {
    if (ext !== undefined && typeof ext !== "string") {
        throw new TypeError('"ext" argument must be a string');
    }
    assertPath(path);
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
        if (ext.length === path.length && ext === path) return "";
        let extIdx = ext.length - 1;
        let firstNonSlashEnd = -1;
        for(i = path.length - 1; i >= 0; --i){
            const code = path.charCodeAt(i);
            if (code === 47) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd === -1) {
                    matchedSlash = false;
                    firstNonSlashEnd = i + 1;
                }
                if (extIdx >= 0) {
                    if (code === ext.charCodeAt(extIdx)) {
                        if (--extIdx === -1) {
                            end = i;
                        }
                    } else {
                        extIdx = -1;
                        end = firstNonSlashEnd;
                    }
                }
            }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path.length;
        return path.slice(start, end);
    } else {
        for(i = path.length - 1; i >= 0; --i){
            if (path.charCodeAt(i) === 47) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) return "";
        return path.slice(start, end);
    }
}
function extname1(path) {
    assertPath(path);
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    for(let i = path.length - 1; i >= 0; --i){
        const code = path.charCodeAt(i);
        if (code === 47) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path.slice(startDot, end);
}
function format1(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError(`The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`);
    }
    return _format("/", pathObject);
}
function parse2(path) {
    assertPath(path);
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    if (path.length === 0) return ret;
    const isAbsolute = path.charCodeAt(0) === 47;
    let start;
    if (isAbsolute) {
        ret.root = "/";
        start = 1;
    } else {
        start = 0;
    }
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for(; i >= start; --i){
        const code = path.charCodeAt(i);
        if (code === 47) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
            if (startPart === 0 && isAbsolute) {
                ret.base = ret.name = path.slice(1, end);
            } else {
                ret.base = ret.name = path.slice(startPart, end);
            }
        }
    } else {
        if (startPart === 0 && isAbsolute) {
            ret.name = path.slice(1, startDot);
            ret.base = path.slice(1, end);
        } else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
        }
        ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute) ret.dir = "/";
    return ret;
}
function fromFileUrl1(url) {
    url = url instanceof URL ? url : new URL(url);
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    return decodeURIComponent(url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl1(path) {
    if (!isAbsolute1(path)) {
        throw new TypeError("Must be an absolute path.");
    }
    const url = new URL("file:///");
    url.pathname = encodeWhitespace(path.replace(/%/g, "%25").replace(/\\/g, "%5C"));
    return url;
}
const mod6 = {
    sep: sep1,
    delimiter: delimiter1,
    resolve: resolve1,
    normalize: normalize1,
    isAbsolute: isAbsolute1,
    join: join2,
    relative: relative1,
    toNamespacedPath: toNamespacedPath1,
    dirname: dirname1,
    basename: basename1,
    extname: extname1,
    format: format1,
    parse: parse2,
    fromFileUrl: fromFileUrl1,
    toFileUrl: toFileUrl1
};
const SEP = isWindows ? "\\" : "/";
const path = isWindows ? mod5 : mod6;
const { join: join3 , normalize: normalize2  } = path;
const path1 = isWindows ? mod5 : mod6;
const { basename: basename2 , delimiter: delimiter2 , dirname: dirname2 , extname: extname2 , format: format2 , fromFileUrl: fromFileUrl2 , isAbsolute: isAbsolute2 , join: join4 , normalize: normalize3 , parse: parse3 , relative: relative2 , resolve: resolve2 , sep: sep2 , toFileUrl: toFileUrl2 , toNamespacedPath: toNamespacedPath2  } = path1;
let _exiting = false;
const kSize = 2048;
const kMask = 2048 - 1;
class FixedCircularBuffer {
    bottom;
    top;
    list;
    next;
    constructor(){
        this.bottom = 0;
        this.top = 0;
        this.list = new Array(kSize);
        this.next = null;
    }
    isEmpty() {
        return this.top === this.bottom;
    }
    isFull() {
        return (this.top + 1 & kMask) === this.bottom;
    }
    push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & kMask;
    }
    shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === undefined) {
            return null;
        }
        this.list[this.bottom] = undefined;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
    }
}
class FixedQueue {
    head;
    tail;
    constructor(){
        this.head = this.tail = new FixedCircularBuffer();
    }
    isEmpty() {
        return this.head.isEmpty();
    }
    push(data) {
        if (this.head.isFull()) {
            this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
    }
    shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
            this.tail = tail.next;
        }
        return next;
    }
}
const queue = new FixedQueue();
let _nextTick;
function processTicksAndRejections() {
    let tock;
    do {
        while(tock = queue.shift()){
            try {
                const callback = tock.callback;
                if (tock.args === undefined) {
                    callback();
                } else {
                    const args = tock.args;
                    switch(args.length){
                        case 1:
                            callback(args[0]);
                            break;
                        case 2:
                            callback(args[0], args[1]);
                            break;
                        case 3:
                            callback(args[0], args[1], args[2]);
                            break;
                        case 4:
                            callback(args[0], args[1], args[2], args[3]);
                            break;
                        default:
                            callback(...args);
                    }
                }
            } finally{}
        }
        core.runMicrotasks();
    }while (!queue.isEmpty())
    core.setHasTickScheduled(false);
}
if (typeof core.setNextTickCallback !== "undefined") {
    function runNextTicks() {
        if (!core.hasTickScheduled()) {
            core.runMicrotasks();
        }
        if (!core.hasTickScheduled()) {
            return true;
        }
        processTicksAndRejections();
        return true;
    }
    core.setNextTickCallback(processTicksAndRejections);
    core.setMacrotaskCallback(runNextTicks);
    function __nextTickNative(callback, ...args) {
        validateFunction(callback, "callback");
        if (_exiting) {
            return;
        }
        let args_;
        switch(args.length){
            case 0:
                break;
            case 1:
                args_ = [
                    args[0]
                ];
                break;
            case 2:
                args_ = [
                    args[0],
                    args[1]
                ];
                break;
            case 3:
                args_ = [
                    args[0],
                    args[1],
                    args[2]
                ];
                break;
            default:
                args_ = new Array(args.length);
                for(let i = 0; i < args.length; i++){
                    args_[i] = args[i];
                }
        }
        if (queue.isEmpty()) {
            core.setHasTickScheduled(true);
        }
        const tickObject = {
            callback,
            args: args_
        };
        queue.push(tickObject);
    }
    _nextTick = __nextTickNative;
} else {
    function __nextTickQueueMicrotask(callback, ...args) {
        if (args) {
            queueMicrotask(()=>callback.call(this, ...args));
        } else {
            queueMicrotask(callback);
        }
    }
    _nextTick = __nextTickQueueMicrotask;
}
function nextTick1(callback, ...args) {
    _nextTick(callback, ...args);
}
function _arch() {
    if (Deno.build.arch == "x86_64") {
        return "x64";
    } else if (Deno.build.arch == "aarch64") {
        return "arm64";
    } else {
        throw Error("unreachable");
    }
}
const arch = _arch();
const chdir = Deno.chdir;
const cwd = Deno.cwd;
function denoEnvGet(name) {
    try {
        return Deno.env.get(name);
    } catch (e) {
        if (e instanceof TypeError) {
            return undefined;
        }
        throw e;
    }
}
const OBJECT_PROTO_PROP_NAMES = Object.getOwnPropertyNames(Object.prototype);
const env = new Proxy(Object(), {
    get: (target, prop)=>{
        if (typeof prop === "symbol") {
            return target[prop];
        }
        const envValue = denoEnvGet(prop);
        if (envValue) {
            return envValue;
        }
        if (OBJECT_PROTO_PROP_NAMES.includes(prop)) {
            return target[prop];
        }
        return envValue;
    },
    ownKeys: ()=>Reflect.ownKeys(Deno.env.toObject()),
    getOwnPropertyDescriptor: (_target, name)=>{
        const value = denoEnvGet(String(name));
        if (value) {
            return {
                enumerable: true,
                configurable: true,
                value
            };
        }
    },
    set (_target, prop, value) {
        Deno.env.set(String(prop), String(value));
        return true;
    },
    has: (_target, prop)=>typeof denoEnvGet(String(prop)) === "string"
});
const pid = Deno.pid;
const platform = isWindows ? "win32" : Deno.build.os;
const version = "v16.17.0";
const versions = {
    node: "16.17.0",
    uv: "1.43.0",
    zlib: "1.2.11",
    brotli: "1.0.9",
    ares: "1.18.1",
    modules: "93",
    nghttp2: "1.47.0",
    napi: "8",
    llhttp: "6.0.7",
    openssl: "1.1.1q+quic",
    cldr: "41.0",
    icu: "71.1",
    tz: "2022a",
    unicode: "14.0",
    ...Deno.version
};
var Encodings;
(function(Encodings) {
    Encodings[Encodings["ASCII"] = 0] = "ASCII";
    Encodings[Encodings["UTF8"] = 1] = "UTF8";
    Encodings[Encodings["BASE64"] = 2] = "BASE64";
    Encodings[Encodings["UCS2"] = 3] = "UCS2";
    Encodings[Encodings["BINARY"] = 4] = "BINARY";
    Encodings[Encodings["HEX"] = 5] = "HEX";
    Encodings[Encodings["BUFFER"] = 6] = "BUFFER";
    Encodings[Encodings["BASE64URL"] = 7] = "BASE64URL";
    Encodings[Encodings["LATIN1"] = 4] = "LATIN1";
})(Encodings || (Encodings = {}));
const encodings = [];
encodings[Encodings.ASCII] = "ascii";
encodings[Encodings.BASE64] = "base64";
encodings[Encodings.BASE64URL] = "base64url";
encodings[Encodings.BUFFER] = "buffer";
encodings[Encodings.HEX] = "hex";
encodings[Encodings.LATIN1] = "latin1";
encodings[Encodings.UCS2] = "utf16le";
encodings[Encodings.UTF8] = "utf8";
const __default2 = {
    encodings
};
const mod7 = {
    encodings: encodings,
    default: __default2
};
function indexOfNeedle(source, needle, start = 0) {
    if (start >= source.length) {
        return -1;
    }
    if (start < 0) {
        start = Math.max(0, source.length + start);
    }
    const s = needle[0];
    for(let i = start; i < source.length; i++){
        if (source[i] !== s) continue;
        const pin = i;
        let matched = 1;
        let j = i;
        while(matched < needle.length){
            j++;
            if (source[j] !== needle[j - pin]) {
                break;
            }
            matched++;
        }
        if (matched === needle.length) {
            return pin;
        }
    }
    return -1;
}
function numberToBytes(n) {
    if (n === 0) return new Uint8Array([
        0
    ]);
    const bytes = [];
    bytes.unshift(n & 255);
    while(n >= 256){
        n = n >>> 8;
        bytes.unshift(n & 255);
    }
    return new Uint8Array(bytes);
}
function findLastIndex(targetBuffer, buffer, offset) {
    offset = offset > targetBuffer.length ? targetBuffer.length : offset;
    const searchableBuffer = targetBuffer.slice(0, offset + buffer.length);
    const searchableBufferLastIndex = searchableBuffer.length - 1;
    const bufferLastIndex = buffer.length - 1;
    let lastMatchIndex = -1;
    let matches = 0;
    let index = -1;
    for(let x = 0; x <= searchableBufferLastIndex; x++){
        if (searchableBuffer[searchableBufferLastIndex - x] === buffer[bufferLastIndex - matches]) {
            if (lastMatchIndex === -1) {
                lastMatchIndex = x;
            }
            matches++;
        } else {
            matches = 0;
            if (lastMatchIndex !== -1) {
                x = lastMatchIndex + 1;
                lastMatchIndex = -1;
            }
            continue;
        }
        if (matches === buffer.length) {
            index = x;
            break;
        }
    }
    if (index === -1) return index;
    return searchableBufferLastIndex - index;
}
function indexOfBuffer(targetBuffer, buffer, byteOffset, encoding, forwardDirection) {
    if (!Encodings[encoding] === undefined) {
        throw new Error(`Unknown encoding code ${encoding}`);
    }
    if (!forwardDirection) {
        if (byteOffset < 0) {
            byteOffset = targetBuffer.length + byteOffset;
        }
        if (buffer.length === 0) {
            return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length;
        }
        return findLastIndex(targetBuffer, buffer, byteOffset);
    }
    if (buffer.length === 0) {
        return byteOffset <= targetBuffer.length ? byteOffset : targetBuffer.length;
    }
    return indexOfNeedle(targetBuffer, buffer, byteOffset);
}
function indexOfNumber(targetBuffer, number, byteOffset, forwardDirection) {
    const bytes = numberToBytes(number);
    if (bytes.length > 1) {
        throw new Error("Multi byte number search is not supported");
    }
    return indexOfBuffer(targetBuffer, numberToBytes(number), byteOffset, Encodings.UTF8, forwardDirection);
}
const __default3 = {
    indexOfBuffer,
    indexOfNumber
};
const mod8 = {
    indexOfBuffer: indexOfBuffer,
    indexOfNumber: indexOfNumber,
    numberToBytes: numberToBytes,
    default: __default3
};
const base64abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/"
];
function encode(data) {
    const uint8 = typeof data === "string" ? new TextEncoder().encode(data) : data instanceof Uint8Array ? data : new Uint8Array(data);
    let result = "", i;
    const l = uint8.length;
    for(i = 2; i < l; i += 3){
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 0x03) << 4 | uint8[i - 1] >> 4];
        result += base64abc[(uint8[i - 1] & 0x0f) << 2 | uint8[i] >> 6];
        result += base64abc[uint8[i] & 0x3f];
    }
    if (i === l + 1) {
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 0x03) << 4];
        result += "==";
    }
    if (i === l) {
        result += base64abc[uint8[i - 2] >> 2];
        result += base64abc[(uint8[i - 2] & 0x03) << 4 | uint8[i - 1] >> 4];
        result += base64abc[(uint8[i - 1] & 0x0f) << 2];
        result += "=";
    }
    return result;
}
function decode(b64) {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for(let i = 0; i < size; i++){
        bytes[i] = binString.charCodeAt(i);
    }
    return bytes;
}
function addPaddingToBase64url(base64url) {
    if (base64url.length % 4 === 2) return base64url + "==";
    if (base64url.length % 4 === 3) return base64url + "=";
    if (base64url.length % 4 === 1) {
        throw new TypeError("Illegal base64url string!");
    }
    return base64url;
}
function convertBase64urlToBase64(b64url) {
    if (!/^[-_A-Z0-9]*?={0,2}$/i.test(b64url)) {
        throw new TypeError("Failed to decode base64url: invalid character");
    }
    return addPaddingToBase64url(b64url).replace(/\-/g, "+").replace(/_/g, "/");
}
function convertBase64ToBase64url(b64) {
    return b64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function encode1(data) {
    return convertBase64ToBase64url(encode(data));
}
function decode1(b64url) {
    return decode(convertBase64urlToBase64(b64url));
}
function asciiToBytes(str) {
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        byteArray.push(str.charCodeAt(i) & 255);
    }
    return new Uint8Array(byteArray);
}
function base64ToBytes(str) {
    str = base64clean(str);
    str = str.replaceAll("-", "+").replaceAll("_", "/");
    return decode(str);
}
const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    str = str.split("=")[0];
    str = str.trim().replace(INVALID_BASE64_RE, "");
    if (str.length < 2) return "";
    while(str.length % 4 !== 0){
        str = str + "=";
    }
    return str;
}
function base64UrlToBytes(str) {
    str = base64clean(str);
    str = str.replaceAll("+", "-").replaceAll("/", "_");
    return decode1(str);
}
function hexToBytes(str) {
    const byteArray = new Uint8Array(Math.floor((str || "").length / 2));
    let i;
    for(i = 0; i < byteArray.length; i++){
        const a = Number.parseInt(str[i * 2], 16);
        const b = Number.parseInt(str[i * 2 + 1], 16);
        if (Number.isNaN(a) && Number.isNaN(b)) {
            break;
        }
        byteArray[i] = a << 4 | b;
    }
    return new Uint8Array(i === byteArray.length ? byteArray : byteArray.slice(0, i));
}
function utf16leToBytes(str, units) {
    let c, hi, lo;
    const byteArray = [];
    for(let i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) {
            break;
        }
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return new Uint8Array(byteArray);
}
function bytesToAscii(bytes) {
    let ret = "";
    for(let i = 0; i < bytes.length; ++i){
        ret += String.fromCharCode(bytes[i] & 127);
    }
    return ret;
}
function bytesToUtf16le(bytes) {
    let res = "";
    for(let i = 0; i < bytes.length - 1; i += 2){
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}
Array.isArray;
const ArrayPrototypePush = (that, ...args)=>that.push(...args);
Object.assign;
Object.create;
Object.hasOwn;
RegExp.prototype.exec;
String.fromCharCode;
const StringPrototypeSlice = (that, ...args)=>that.slice(...args);
const { signals  } = os;
Symbol.for("nodejs.util.inspect.custom");
const kEnumerableProperty = Object.create(null);
kEnumerableProperty.enumerable = true;
const kEmptyObject = Object.freeze(Object.create(null));
function once1(callback) {
    let called = false;
    return function(...args) {
        if (called) return;
        called = true;
        Reflect.apply(callback, this, args);
    };
}
function createDeferredPromise() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve,
        reject
    };
}
const codesWarned = new Set();
function deprecate(fn, msg, code) {
    if (code !== undefined) {
        validateString(code, "code");
    }
    let warned = false;
    function deprecated(...args) {
        if (!warned) {
            warned = true;
            if (code !== undefined) {
                if (!codesWarned.has(code)) {
                    process.emitWarning(msg, "DeprecationWarning", code, deprecated);
                    codesWarned.add(code);
                }
            } else {
                process.emitWarning(msg, "DeprecationWarning", deprecated);
            }
        }
        if (new.target) {
            return Reflect.construct(fn, args, new.target);
        }
        return Reflect.apply(fn, this, args);
    }
    Object.setPrototypeOf(deprecated, fn);
    if (fn.prototype) {
        deprecated.prototype = fn.prototype;
    }
    return deprecated;
}
const kCustomPromisifiedSymbol = Symbol.for("nodejs.util.promisify.custom");
const kCustomPromisifyArgsSymbol = Symbol.for("nodejs.util.promisify.customArgs");
function promisify(original) {
    validateFunction(original, "original");
    if (original[kCustomPromisifiedSymbol]) {
        const fn = original[kCustomPromisifiedSymbol];
        validateFunction(fn, "util.promisify.custom");
        return Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    const argumentNames = original[kCustomPromisifyArgsSymbol];
    function fn1(...args) {
        return new Promise((resolve, reject)=>{
            args.push((err, ...values)=>{
                if (err) {
                    return reject(err);
                }
                if (argumentNames !== undefined && values.length > 1) {
                    const obj = {};
                    for(let i = 0; i < argumentNames.length; i++){
                        obj[argumentNames[i]] = values[i];
                    }
                    resolve(obj);
                } else {
                    resolve(values[0]);
                }
            });
            Reflect.apply(original, this, args);
        });
    }
    Object.setPrototypeOf(fn1, Object.getPrototypeOf(original));
    Object.defineProperty(fn1, kCustomPromisifiedSymbol, {
        value: fn1,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(fn1, Object.getOwnPropertyDescriptors(original));
}
promisify.custom = kCustomPromisifiedSymbol;
const utf8Encoder = new TextEncoder();
const float32Array = new Float32Array(1);
const uInt8Float32Array = new Uint8Array(float32Array.buffer);
const float64Array = new Float64Array(1);
const uInt8Float64Array = new Uint8Array(float64Array.buffer);
float32Array[0] = -1;
const bigEndian = uInt8Float32Array[3] === 0;
const kMaxLength = 2147483647;
const MAX_UINT32 = 2 ** 32;
const customInspectSymbol1 = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
const INSPECT_MAX_BYTES = 50;
const constants = {
    MAX_LENGTH: 2147483647,
    MAX_STRING_LENGTH: 536870888
};
Object.defineProperty(Buffer.prototype, "parent", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) {
            return void 0;
        }
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, "offset", {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) {
            return void 0;
        }
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > 2147483647) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
    }
    const buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function Buffer(arg, encodingOrOffset, length) {
    if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
            throw new codes.ERR_INVALID_ARG_TYPE("string", "string", arg);
        }
        return _allocUnsafe(arg);
    }
    return _from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192;
function _from(value, encodingOrOffset, length) {
    if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
    }
    if (typeof value === "object" && value !== null) {
        if (isAnyArrayBuffer1(value)) {
            return fromArrayBuffer(value, encodingOrOffset, length);
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value && (typeof valueOf === "string" || typeof valueOf === "object")) {
            return _from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b) {
            return b;
        }
        if (typeof value[Symbol.toPrimitive] === "function") {
            const primitive = value[Symbol.toPrimitive]("string");
            if (typeof primitive === "string") {
                return fromString(primitive, encodingOrOffset);
            }
        }
    }
    throw new codes.ERR_INVALID_ARG_TYPE("first argument", [
        "string",
        "Buffer",
        "ArrayBuffer",
        "Array",
        "Array-like Object"
    ], value);
}
Buffer.from = function from(value, encodingOrOffset, length) {
    return _from(value, encodingOrOffset, length);
};
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    validateNumber(size, "size");
    if (!(size >= 0 && size <= 2147483647)) {
        throw new codes.ERR_INVALID_ARG_VALUE.RangeError("size", size);
    }
}
function _alloc(size, fill, encoding) {
    assertSize(size);
    const buffer = createBuffer(size);
    if (fill !== undefined) {
        if (encoding !== undefined && typeof encoding !== "string") {
            throw new codes.ERR_INVALID_ARG_TYPE("encoding", "string", encoding);
        }
        return buffer.fill(fill, encoding);
    }
    return buffer;
}
Buffer.alloc = function alloc(size, fill, encoding) {
    return _alloc(size, fill, encoding);
};
function _allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
Buffer.allocUnsafe = function allocUnsafe(size) {
    return _allocUnsafe(size);
};
Buffer.allocUnsafeSlow = function allocUnsafeSlow(size) {
    return _allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
    }
    if (!Buffer.isEncoding(encoding)) {
        throw new codes.ERR_UNKNOWN_ENCODING(encoding);
    }
    const length = byteLength(string, encoding) | 0;
    let buf = createBuffer(length);
    const actual = buf.write(string, encoding);
    if (actual !== length) {
        buf = buf.slice(0, actual);
    }
    return buf;
}
function fromArrayLike(array) {
    const length = array.length < 0 ? 0 : checked(array.length) | 0;
    const buf = createBuffer(length);
    for(let i = 0; i < length; i += 1){
        buf[i] = array[i] & 255;
    }
    return buf;
}
function fromObject(obj) {
    if (obj.length !== undefined || isAnyArrayBuffer1(obj.buffer)) {
        if (typeof obj.length !== "number") {
            return createBuffer(0);
        }
        return fromArrayLike(obj);
    }
    if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
    }
}
function checked(length) {
    if (length >= 2147483647) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
    }
    return length | 0;
}
function SlowBuffer(length) {
    assertSize(length);
    return Buffer.alloc(+length);
}
Object.setPrototypeOf(SlowBuffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(SlowBuffer, Uint8Array);
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype;
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) {
        a = Buffer.from(a, a.offset, a.byteLength);
    }
    if (isInstance(b, Uint8Array)) {
        b = Buffer.from(b, b.offset, b.byteLength);
    }
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    }
    if (a === b) {
        return 0;
    }
    let x = a.length;
    let y = b.length;
    for(let i = 0, len = Math.min(x, y); i < len; ++i){
        if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
        }
    }
    if (x < y) {
        return -1;
    }
    if (y < x) {
        return 1;
    }
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    return typeof encoding === "string" && encoding.length !== 0 && normalizeEncoding1(encoding) !== undefined;
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) {
        throw new codes.ERR_INVALID_ARG_TYPE("list", "Array", list);
    }
    if (list.length === 0) {
        return Buffer.alloc(0);
    }
    if (length === undefined) {
        length = 0;
        for(let i = 0; i < list.length; i++){
            if (list[i].length) {
                length += list[i].length;
            }
        }
    } else {
        validateOffset(length, "length");
    }
    const buffer = Buffer.allocUnsafe(length);
    let pos = 0;
    for(let i1 = 0; i1 < list.length; i1++){
        const buf = list[i1];
        if (!isUint8Array(buf)) {
            throw new codes.ERR_INVALID_ARG_TYPE(`list[${i1}]`, [
                "Buffer",
                "Uint8Array"
            ], list[i1]);
        }
        pos += _copyActual(buf, buffer, pos, 0, buf.length);
    }
    if (pos < length) {
        buffer.fill(0, pos, length);
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (typeof string !== "string") {
        if (isArrayBufferView(string) || isAnyArrayBuffer1(string)) {
            return string.byteLength;
        }
        throw new codes.ERR_INVALID_ARG_TYPE("string", [
            "string",
            "Buffer",
            "ArrayBuffer"
        ], string);
    }
    const len = string.length;
    const mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) {
        return 0;
    }
    if (!encoding) {
        return mustMatch ? -1 : byteLengthUtf8(string);
    }
    const ops = getEncodingOps(encoding);
    if (ops === undefined) {
        return mustMatch ? -1 : byteLengthUtf8(string);
    }
    return ops.byteLength(string);
}
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    const i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    const len = this.length;
    if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for(let i = 0; i < len; i += 2){
        swap(this, i, i + 1);
    }
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    const len = this.length;
    if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for(let i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    const len = this.length;
    if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for(let i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString(encoding, start, end) {
    if (arguments.length === 0) {
        return this.utf8Slice(0, this.length);
    }
    const len = this.length;
    if (start <= 0) {
        start = 0;
    } else if (start >= len) {
        return "";
    } else {
        start |= 0;
    }
    if (end === undefined || end > len) {
        end = len;
    } else {
        end |= 0;
    }
    if (end <= start) {
        return "";
    }
    if (encoding === undefined) {
        return this.utf8Slice(start, end);
    }
    const ops = getEncodingOps(encoding);
    if (ops === undefined) {
        throw new codes.ERR_UNKNOWN_ENCODING(encoding);
    }
    return ops.slice(this, start, end);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!isUint8Array(b)) {
        throw new codes.ERR_INVALID_ARG_TYPE("otherBuffer", [
            "Buffer",
            "Uint8Array"
        ], b);
    }
    if (this === b) {
        return true;
    }
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    let str = "";
    const max = INSPECT_MAX_BYTES;
    str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
    if (this.length > max) {
        str += " ... ";
    }
    return "<Buffer " + str + ">";
};
if (customInspectSymbol1) {
    Buffer.prototype[customInspectSymbol1] = Buffer.prototype.inspect;
}
Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength);
    }
    if (!Buffer.isBuffer(target)) {
        throw new codes.ERR_INVALID_ARG_TYPE("target", [
            "Buffer",
            "Uint8Array"
        ], target);
    }
    if (start === undefined) {
        start = 0;
    } else {
        validateOffset(start, "targetStart", 0, kMaxLength);
    }
    if (end === undefined) {
        end = target.length;
    } else {
        validateOffset(end, "targetEnd", 0, target.length);
    }
    if (thisStart === undefined) {
        thisStart = 0;
    } else {
        validateOffset(start, "sourceStart", 0, kMaxLength);
    }
    if (thisEnd === undefined) {
        thisEnd = this.length;
    } else {
        validateOffset(end, "sourceEnd", 0, this.length);
    }
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new codes.ERR_OUT_OF_RANGE("out of range index", "range");
    }
    if (thisStart >= thisEnd && start >= end) {
        return 0;
    }
    if (thisStart >= thisEnd) {
        return -1;
    }
    if (start >= end) {
        return 1;
    }
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) {
        return 0;
    }
    let x = thisEnd - thisStart;
    let y = end - start;
    const len = Math.min(x, y);
    const thisCopy = this.slice(thisStart, thisEnd);
    const targetCopy = target.slice(start, end);
    for(let i = 0; i < len; ++i){
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
        }
    }
    if (x < y) {
        return -1;
    }
    if (y < x) {
        return 1;
    }
    return 0;
};
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    validateBuffer(buffer);
    if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = undefined;
    } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;
    if (Number.isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length || buffer.byteLength;
    }
    dir = !!dir;
    if (typeof val === "number") {
        return indexOfNumber(buffer, val >>> 0, byteOffset, dir);
    }
    let ops;
    if (encoding === undefined) {
        ops = encodingOps.utf8;
    } else {
        ops = getEncodingOps(encoding);
    }
    if (typeof val === "string") {
        if (ops === undefined) {
            throw new codes.ERR_UNKNOWN_ENCODING(encoding);
        }
        return ops.indexOf(buffer, val, byteOffset, dir);
    }
    if (isUint8Array(val)) {
        const encodingVal = ops === undefined ? encodingsMap.utf8 : ops.encodingVal;
        return indexOfBuffer(buffer, val, byteOffset, encodingVal, dir);
    }
    throw new codes.ERR_INVALID_ARG_TYPE("value", [
        "number",
        "string",
        "Buffer",
        "Uint8Array"
    ], val);
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
Buffer.prototype.asciiSlice = function asciiSlice(offset, length) {
    if (offset === 0 && length === this.length) {
        return bytesToAscii(this);
    } else {
        return bytesToAscii(this.slice(offset, length));
    }
};
Buffer.prototype.asciiWrite = function asciiWrite(string, offset, length) {
    return blitBuffer(asciiToBytes(string), this, offset, length);
};
Buffer.prototype.base64Slice = function base64Slice(offset, length) {
    if (offset === 0 && length === this.length) {
        return encode(this);
    } else {
        return encode(this.slice(offset, length));
    }
};
Buffer.prototype.base64Write = function base64Write(string, offset, length) {
    return blitBuffer(base64ToBytes(string), this, offset, length);
};
Buffer.prototype.base64urlSlice = function base64urlSlice(offset, length) {
    if (offset === 0 && length === this.length) {
        return encode1(this);
    } else {
        return encode1(this.slice(offset, length));
    }
};
Buffer.prototype.base64urlWrite = function base64urlWrite(string, offset, length) {
    return blitBuffer(base64UrlToBytes(string), this, offset, length);
};
Buffer.prototype.hexWrite = function hexWrite(string, offset, length) {
    return blitBuffer(hexToBytes(string, this.length - offset), this, offset, length);
};
Buffer.prototype.hexSlice = function hexSlice(string, offset, length) {
    return _hexSlice(this, string, offset, length);
};
Buffer.prototype.latin1Slice = function latin1Slice(string, offset, length) {
    return _latin1Slice(this, string, offset, length);
};
Buffer.prototype.latin1Write = function latin1Write(string, offset, length) {
    return blitBuffer(asciiToBytes(string), this, offset, length);
};
Buffer.prototype.ucs2Slice = function ucs2Slice(offset, length) {
    if (offset === 0 && length === this.length) {
        return bytesToUtf16le(this);
    } else {
        return bytesToUtf16le(this.slice(offset, length));
    }
};
Buffer.prototype.ucs2Write = function ucs2Write(string, offset, length) {
    return blitBuffer(utf16leToBytes(string, this.length - offset), this, offset, length);
};
Buffer.prototype.utf8Slice = function utf8Slice(string, offset, length) {
    return _utf8Slice(this, string, offset, length);
};
Buffer.prototype.utf8Write = function utf8Write(string, offset, length) {
    return blitBuffer(utf8ToBytes(string, this.length - offset), this, offset, length);
};
Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
        return this.utf8Write(string, 0, this.length);
    }
    if (length === undefined && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
    } else {
        validateOffset(offset, "offset", 0, this.length);
        const remaining = this.length - offset;
        if (length === undefined) {
            length = remaining;
        } else if (typeof length === "string") {
            encoding = length;
            length = remaining;
        } else {
            validateOffset(length, "length", 0, this.length);
            if (length > remaining) {
                length = remaining;
            }
        }
    }
    if (!encoding) {
        return this.utf8Write(string, offset, length);
    }
    const ops = getEncodingOps(encoding);
    if (ops === undefined) {
        throw new codes.ERR_UNKNOWN_ENCODING(encoding);
    }
    return ops.write(this, string, offset, length);
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function fromArrayBuffer(obj, byteOffset, length) {
    if (byteOffset === undefined) {
        byteOffset = 0;
    } else {
        byteOffset = +byteOffset;
        if (Number.isNaN(byteOffset)) {
            byteOffset = 0;
        }
    }
    const maxLength = obj.byteLength - byteOffset;
    if (maxLength < 0) {
        throw new codes.ERR_BUFFER_OUT_OF_BOUNDS("offset");
    }
    if (length === undefined) {
        length = maxLength;
    } else {
        length = +length;
        if (length > 0) {
            if (length > maxLength) {
                throw new codes.ERR_BUFFER_OUT_OF_BOUNDS("length");
            }
        } else {
            length = 0;
        }
    }
    const buffer = new Uint8Array(obj, byteOffset, length);
    Object.setPrototypeOf(buffer, Buffer.prototype);
    return buffer;
}
const decoder = new TextDecoder();
function _utf8Slice(buf, start, end) {
    return decoder.decode(buf.slice(start, end));
}
function _latin1Slice(buf, start, end) {
    let ret = "";
    end = Math.min(buf.length, end);
    for(let i = start; i < end; ++i){
        ret += String.fromCharCode(buf[i]);
    }
    return ret;
}
function _hexSlice(buf, start, end) {
    const len = buf.length;
    if (!start || start < 0) {
        start = 0;
    }
    if (!end || end < 0 || end > len) {
        end = len;
    }
    let out = "";
    for(let i = start; i < end; ++i){
        out += hexSliceLookupTable[buf[i]];
    }
    return out;
}
Buffer.prototype.slice = function slice(start, end) {
    const len = this.length;
    start = ~~start;
    end = end === void 0 ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) {
            start = 0;
        }
    } else if (start > len) {
        start = len;
    }
    if (end < 0) {
        end += len;
        if (end < 0) {
            end = 0;
        }
    } else if (end > len) {
        end = len;
    }
    if (end < start) {
        end = start;
    }
    const newBuf = this.subarray(start, end);
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset);
    }
    if (byteLength === 6) {
        return readUInt48LE(this, offset);
    }
    if (byteLength === 5) {
        return readUInt40LE(this, offset);
    }
    if (byteLength === 3) {
        return readUInt24LE(this, offset);
    }
    if (byteLength === 4) {
        return this.readUInt32LE(offset);
    }
    if (byteLength === 2) {
        return this.readUInt16LE(offset);
    }
    if (byteLength === 1) {
        return this.readUInt8(offset);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset);
    }
    if (byteLength === 6) {
        return readUInt48BE(this, offset);
    }
    if (byteLength === 5) {
        return readUInt40BE(this, offset);
    }
    if (byteLength === 3) {
        return readUInt24BE(this, offset);
    }
    if (byteLength === 4) {
        return this.readUInt32BE(offset);
    }
    if (byteLength === 2) {
        return this.readUInt16BE(offset);
    }
    if (byteLength === 1) {
        return this.readUInt8(offset);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset = 0) {
    validateNumber(offset, "offset");
    const val = this[offset];
    if (val === undefined) {
        boundsError(offset, this.length - 1);
    }
    return val;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = readUInt16BE;
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2);
    }
    return first + last * 2 ** 8;
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4);
    }
    return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = readUInt32BE;
Buffer.prototype.readBigUint64LE = Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
    }
    const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
    const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
Buffer.prototype.readBigUint64BE = Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
    }
    const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset);
    }
    if (byteLength === 6) {
        return readInt48LE(this, offset);
    }
    if (byteLength === 5) {
        return readInt40LE(this, offset);
    }
    if (byteLength === 3) {
        return readInt24LE(this, offset);
    }
    if (byteLength === 4) {
        return this.readInt32LE(offset);
    }
    if (byteLength === 2) {
        return this.readInt16LE(offset);
    }
    if (byteLength === 1) {
        return this.readInt8(offset);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength) {
    if (offset === undefined) {
        throw new codes.ERR_INVALID_ARG_TYPE("offset", "number", offset);
    }
    if (byteLength === 6) {
        return readInt48BE(this, offset);
    }
    if (byteLength === 5) {
        return readInt40BE(this, offset);
    }
    if (byteLength === 3) {
        return readInt24BE(this, offset);
    }
    if (byteLength === 4) {
        return this.readInt32BE(offset);
    }
    if (byteLength === 2) {
        return this.readInt16BE(offset);
    }
    if (byteLength === 1) {
        return this.readInt8(offset);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.readInt8 = function readInt8(offset = 0) {
    validateNumber(offset, "offset");
    const val = this[offset];
    if (val === undefined) {
        boundsError(offset, this.length - 1);
    }
    return val | (val & 2 ** 7) * 0x1fffffe;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2);
    }
    const val = first + last * 2 ** 8;
    return val | (val & 2 ** 15) * 0x1fffe;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2);
    }
    const val = first * 2 ** 8 + last;
    return val | (val & 2 ** 15) * 0x1fffe;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4);
    }
    return first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + (last << 24);
};
Buffer.prototype.readInt32BE = function readInt32BE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4);
    }
    return (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
};
Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
    }
    const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
});
Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 7];
    if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
    }
    const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
});
Buffer.prototype.readFloatLE = function readFloatLE(offset) {
    return bigEndian ? readFloatBackwards(this, offset) : readFloatForwards(this, offset);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset) {
    return bigEndian ? readFloatForwards(this, offset) : readFloatBackwards(this, offset);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset) {
    return bigEndian ? readDoubleBackwards(this, offset) : readDoubleForwards(this, offset);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset) {
    return bigEndian ? readDoubleForwards(this, offset) : readDoubleBackwards(this, offset);
};
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48LE(this, value, offset, 0, 0xffffffffffff);
    }
    if (byteLength === 5) {
        return writeU_Int40LE(this, value, offset, 0, 0xffffffffff);
    }
    if (byteLength === 3) {
        return writeU_Int24LE(this, value, offset, 0, 0xffffff);
    }
    if (byteLength === 4) {
        return writeU_Int32LE(this, value, offset, 0, 0xffffffff);
    }
    if (byteLength === 2) {
        return writeU_Int16LE(this, value, offset, 0, 0xffff);
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, 0, 0xff);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48BE(this, value, offset, 0, 0xffffffffffff);
    }
    if (byteLength === 5) {
        return writeU_Int40BE(this, value, offset, 0, 0xffffffffff);
    }
    if (byteLength === 3) {
        return writeU_Int24BE(this, value, offset, 0, 0xffffff);
    }
    if (byteLength === 4) {
        return writeU_Int32BE(this, value, offset, 0, 0xffffffff);
    }
    if (byteLength === 2) {
        return writeU_Int16BE(this, value, offset, 0, 0xffff);
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, 0, 0xff);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset = 0) {
    return writeU_Int8(this, value, offset, 0, 0xff);
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset = 0) {
    return writeU_Int16LE(this, value, offset, 0, 0xffff);
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset = 0) {
    return writeU_Int16BE(this, value, offset, 0, 0xffff);
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset = 0) {
    return _writeUInt32LE(this, value, offset, 0, 0xffffffff);
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset = 0) {
    return _writeUInt32BE(this, value, offset, 0, 0xffffffff);
};
function wrtBigUInt64LE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function wrtBigUInt64BE(buf, value, offset, min, max) {
    checkIntBI(value, min, max, buf, offset, 7);
    let lo = Number(value & BigInt(4294967295));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    let hi = Number(value >> BigInt(32) & BigInt(4294967295));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
Buffer.prototype.writeBigUint64LE = Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeBigUint64BE = Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
});
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48LE(this, value, offset, -0x800000000000, 0x7fffffffffff);
    }
    if (byteLength === 5) {
        return writeU_Int40LE(this, value, offset, -0x8000000000, 0x7fffffffff);
    }
    if (byteLength === 3) {
        return writeU_Int24LE(this, value, offset, -0x800000, 0x7fffff);
    }
    if (byteLength === 4) {
        return writeU_Int32LE(this, value, offset, -0x80000000, 0x7fffffff);
    }
    if (byteLength === 2) {
        return writeU_Int16LE(this, value, offset, -0x8000, 0x7fff);
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, -0x80, 0x7f);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength) {
    if (byteLength === 6) {
        return writeU_Int48BE(this, value, offset, -0x800000000000, 0x7fffffffffff);
    }
    if (byteLength === 5) {
        return writeU_Int40BE(this, value, offset, -0x8000000000, 0x7fffffffff);
    }
    if (byteLength === 3) {
        return writeU_Int24BE(this, value, offset, -0x800000, 0x7fffff);
    }
    if (byteLength === 4) {
        return writeU_Int32BE(this, value, offset, -0x80000000, 0x7fffffff);
    }
    if (byteLength === 2) {
        return writeU_Int16BE(this, value, offset, -0x8000, 0x7fff);
    }
    if (byteLength === 1) {
        return writeU_Int8(this, value, offset, -0x80, 0x7f);
    }
    boundsError(byteLength, 6, "byteLength");
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset = 0) {
    return writeU_Int8(this, value, offset, -0x80, 0x7f);
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset = 0) {
    return writeU_Int16LE(this, value, offset, -0x8000, 0x7fff);
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset = 0) {
    return writeU_Int16BE(this, value, offset, -0x8000, 0x7fff);
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset = 0) {
    return writeU_Int32LE(this, value, offset, -0x80000000, 0x7fffffff);
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset = 0) {
    return writeU_Int32BE(this, value, offset, -0x80000000, 0x7fffffff);
};
Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
    return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
    return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset) {
    return bigEndian ? writeFloatBackwards(this, value, offset) : writeFloatForwards(this, value, offset);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset) {
    return bigEndian ? writeFloatForwards(this, value, offset) : writeFloatBackwards(this, value, offset);
};
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset) {
    return bigEndian ? writeDoubleBackwards(this, value, offset) : writeDoubleForwards(this, value, offset);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset) {
    return bigEndian ? writeDoubleForwards(this, value, offset) : writeDoubleBackwards(this, value, offset);
};
Buffer.prototype.copy = function copy(target, targetStart, sourceStart, sourceEnd) {
    if (!isUint8Array(this)) {
        throw new codes.ERR_INVALID_ARG_TYPE("source", [
            "Buffer",
            "Uint8Array"
        ], this);
    }
    if (!isUint8Array(target)) {
        throw new codes.ERR_INVALID_ARG_TYPE("target", [
            "Buffer",
            "Uint8Array"
        ], target);
    }
    if (targetStart === undefined) {
        targetStart = 0;
    } else {
        targetStart = toInteger(targetStart, 0);
        if (targetStart < 0) {
            throw new codes.ERR_OUT_OF_RANGE("targetStart", ">= 0", targetStart);
        }
    }
    if (sourceStart === undefined) {
        sourceStart = 0;
    } else {
        sourceStart = toInteger(sourceStart, 0);
        if (sourceStart < 0) {
            throw new codes.ERR_OUT_OF_RANGE("sourceStart", ">= 0", sourceStart);
        }
        if (sourceStart >= MAX_UINT32) {
            throw new codes.ERR_OUT_OF_RANGE("sourceStart", `< ${MAX_UINT32}`, sourceStart);
        }
    }
    if (sourceEnd === undefined) {
        sourceEnd = this.length;
    } else {
        sourceEnd = toInteger(sourceEnd, 0);
        if (sourceEnd < 0) {
            throw new codes.ERR_OUT_OF_RANGE("sourceEnd", ">= 0", sourceEnd);
        }
        if (sourceEnd >= MAX_UINT32) {
            throw new codes.ERR_OUT_OF_RANGE("sourceEnd", `< ${MAX_UINT32}`, sourceEnd);
        }
    }
    if (targetStart >= target.length) {
        return 0;
    }
    if (sourceEnd > 0 && sourceEnd < sourceStart) {
        sourceEnd = sourceStart;
    }
    if (sourceEnd === sourceStart) {
        return 0;
    }
    if (target.length === 0 || this.length === 0) {
        return 0;
    }
    if (sourceEnd > this.length) {
        sourceEnd = this.length;
    }
    if (target.length - targetStart < sourceEnd - sourceStart) {
        sourceEnd = target.length - targetStart + sourceStart;
    }
    const len = sourceEnd - sourceStart;
    if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, sourceStart, sourceEnd);
    } else {
        Uint8Array.prototype.set.call(target, this.subarray(sourceStart, sourceEnd), targetStart);
    }
    return len;
};
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === "string") {
        if (typeof start === "string") {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
                val = code;
            }
        }
    } else if (typeof val === "number") {
        val = val & 255;
    } else if (typeof val === "boolean") {
        val = Number(val);
    }
    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
    }
    if (end <= start) {
        return this;
    }
    start = start >>> 0;
    end = end === void 0 ? this.length : end >>> 0;
    if (!val) {
        val = 0;
    }
    let i;
    if (typeof val === "number") {
        for(i = start; i < end; ++i){
            this[i] = val;
        }
    } else {
        const bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
            throw new codes.ERR_INVALID_ARG_VALUE("value", val);
        }
        for(i = 0; i < end - start; ++i){
            this[i + start] = bytes[i % len];
        }
    }
    return this;
};
function checkBounds(buf, offset, byteLength2) {
    validateNumber(offset, "offset");
    if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
    }
}
function checkIntBI(value, min, max, buf, offset, byteLength2) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
                range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
                range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new codes.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength2);
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    let codePoint;
    const length = string.length;
    let leadSurrogate = null;
    const bytes = [];
    for(let i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
                if (codePoint > 56319) {
                    if ((units -= 3) > -1) {
                        bytes.push(239, 191, 189);
                    }
                    continue;
                } else if (i + 1 === length) {
                    if ((units -= 3) > -1) {
                        bytes.push(239, 191, 189);
                    }
                    continue;
                }
                leadSurrogate = codePoint;
                continue;
            }
            if (codePoint < 56320) {
                if ((units -= 3) > -1) {
                    bytes.push(239, 191, 189);
                }
                leadSurrogate = codePoint;
                continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
            if ((units -= 3) > -1) {
                bytes.push(239, 191, 189);
            }
        }
        leadSurrogate = null;
        if (codePoint < 128) {
            if ((units -= 1) < 0) {
                break;
            }
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) {
                break;
            }
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) {
                break;
            }
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) {
                break;
            }
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
            throw new Error("Invalid code point");
        }
    }
    return bytes;
}
function blitBuffer(src, dst, offset, byteLength) {
    let i;
    const length = byteLength === undefined ? src.length : byteLength;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) {
            break;
        }
        dst[i + offset] = src[i];
    }
    return i;
}
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
const hexSliceLookupTable = function() {
    const alphabet = "0123456789abcdef";
    const table = new Array(256);
    for(let i = 0; i < 16; ++i){
        const i16 = i * 16;
        for(let j = 0; j < 16; ++j){
            table[i16 + j] = alphabet[i] + alphabet[j];
        }
    }
    return table;
}();
function defineBigIntMethod(fn) {
    return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
}
function BufferBigIntNotDefined() {
    throw new Error("BigInt not supported");
}
const atob1 = globalThis.atob;
const Blob = globalThis.Blob;
const btoa = globalThis.btoa;
function readUInt48LE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 5];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6);
    }
    return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + (buf[++offset] + last * 2 ** 8) * 2 ** 32;
}
function readUInt40LE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 4];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5);
    }
    return first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24 + last * 2 ** 32;
}
function readUInt24LE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 2];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3);
    }
    return first + buf[++offset] * 2 ** 8 + last * 2 ** 16;
}
function readUInt48BE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 5];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6);
    }
    return (first * 2 ** 8 + buf[++offset]) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt40BE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 4];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5);
    }
    return first * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt24BE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 2];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3);
    }
    return first * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readUInt16BE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 1];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 2);
    }
    return first * 2 ** 8 + last;
}
function readUInt32BE(offset = 0) {
    validateNumber(offset, "offset");
    const first = this[offset];
    const last = this[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 4);
    }
    return first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
}
function readDoubleBackwards(buffer, offset = 0) {
    validateNumber(offset, "offset");
    const first = buffer[offset];
    const last = buffer[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 8);
    }
    uInt8Float64Array[7] = first;
    uInt8Float64Array[6] = buffer[++offset];
    uInt8Float64Array[5] = buffer[++offset];
    uInt8Float64Array[4] = buffer[++offset];
    uInt8Float64Array[3] = buffer[++offset];
    uInt8Float64Array[2] = buffer[++offset];
    uInt8Float64Array[1] = buffer[++offset];
    uInt8Float64Array[0] = last;
    return float64Array[0];
}
function readDoubleForwards(buffer, offset = 0) {
    validateNumber(offset, "offset");
    const first = buffer[offset];
    const last = buffer[offset + 7];
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 8);
    }
    uInt8Float64Array[0] = first;
    uInt8Float64Array[1] = buffer[++offset];
    uInt8Float64Array[2] = buffer[++offset];
    uInt8Float64Array[3] = buffer[++offset];
    uInt8Float64Array[4] = buffer[++offset];
    uInt8Float64Array[5] = buffer[++offset];
    uInt8Float64Array[6] = buffer[++offset];
    uInt8Float64Array[7] = last;
    return float64Array[0];
}
function writeDoubleForwards(buffer, val, offset = 0) {
    val = +val;
    checkBounds(buffer, offset, 7);
    float64Array[0] = val;
    buffer[offset++] = uInt8Float64Array[0];
    buffer[offset++] = uInt8Float64Array[1];
    buffer[offset++] = uInt8Float64Array[2];
    buffer[offset++] = uInt8Float64Array[3];
    buffer[offset++] = uInt8Float64Array[4];
    buffer[offset++] = uInt8Float64Array[5];
    buffer[offset++] = uInt8Float64Array[6];
    buffer[offset++] = uInt8Float64Array[7];
    return offset;
}
function writeDoubleBackwards(buffer, val, offset = 0) {
    val = +val;
    checkBounds(buffer, offset, 7);
    float64Array[0] = val;
    buffer[offset++] = uInt8Float64Array[7];
    buffer[offset++] = uInt8Float64Array[6];
    buffer[offset++] = uInt8Float64Array[5];
    buffer[offset++] = uInt8Float64Array[4];
    buffer[offset++] = uInt8Float64Array[3];
    buffer[offset++] = uInt8Float64Array[2];
    buffer[offset++] = uInt8Float64Array[1];
    buffer[offset++] = uInt8Float64Array[0];
    return offset;
}
function readFloatBackwards(buffer, offset = 0) {
    validateNumber(offset, "offset");
    const first = buffer[offset];
    const last = buffer[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 4);
    }
    uInt8Float32Array[3] = first;
    uInt8Float32Array[2] = buffer[++offset];
    uInt8Float32Array[1] = buffer[++offset];
    uInt8Float32Array[0] = last;
    return float32Array[0];
}
function readFloatForwards(buffer, offset = 0) {
    validateNumber(offset, "offset");
    const first = buffer[offset];
    const last = buffer[offset + 3];
    if (first === undefined || last === undefined) {
        boundsError(offset, buffer.length - 4);
    }
    uInt8Float32Array[0] = first;
    uInt8Float32Array[1] = buffer[++offset];
    uInt8Float32Array[2] = buffer[++offset];
    uInt8Float32Array[3] = last;
    return float32Array[0];
}
function writeFloatForwards(buffer, val, offset = 0) {
    val = +val;
    checkBounds(buffer, offset, 3);
    float32Array[0] = val;
    buffer[offset++] = uInt8Float32Array[0];
    buffer[offset++] = uInt8Float32Array[1];
    buffer[offset++] = uInt8Float32Array[2];
    buffer[offset++] = uInt8Float32Array[3];
    return offset;
}
function writeFloatBackwards(buffer, val, offset = 0) {
    val = +val;
    checkBounds(buffer, offset, 3);
    float32Array[0] = val;
    buffer[offset++] = uInt8Float32Array[3];
    buffer[offset++] = uInt8Float32Array[2];
    buffer[offset++] = uInt8Float32Array[1];
    buffer[offset++] = uInt8Float32Array[0];
    return offset;
}
function readInt24LE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 2];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3);
    }
    const val = first + buf[++offset] * 2 ** 8 + last * 2 ** 16;
    return val | (val & 2 ** 23) * 0x1fe;
}
function readInt40LE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 4];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5);
    }
    return (last | (last & 2 ** 7) * 0x1fffffe) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24;
}
function readInt48LE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 5];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6);
    }
    const val = buf[offset + 4] + last * 2 ** 8;
    return (val | (val & 2 ** 15) * 0x1fffe) * 2 ** 32 + first + buf[++offset] * 2 ** 8 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 24;
}
function readInt24BE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 2];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 3);
    }
    const val = first * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
    return val | (val & 2 ** 23) * 0x1fe;
}
function readInt48BE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 5];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 6);
    }
    const val = buf[++offset] + first * 2 ** 8;
    return (val | (val & 2 ** 15) * 0x1fffe) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function readInt40BE(buf, offset = 0) {
    validateNumber(offset, "offset");
    const first = buf[offset];
    const last = buf[offset + 4];
    if (first === undefined || last === undefined) {
        boundsError(offset, buf.length - 5);
    }
    return (first | (first & 2 ** 7) * 0x1fffffe) * 2 ** 32 + buf[++offset] * 2 ** 24 + buf[++offset] * 2 ** 16 + buf[++offset] * 2 ** 8 + last;
}
function byteLengthUtf8(str) {
    return utf8Encoder.encode(str).length;
}
function base64ByteLength(str, bytes) {
    if (str.charCodeAt(bytes - 1) === 0x3D) {
        bytes--;
    }
    if (bytes > 1 && str.charCodeAt(bytes - 1) === 0x3D) {
        bytes--;
    }
    return bytes * 3 >>> 2;
}
const encodingsMap = Object.create(null);
for(let i = 0; i < encodings.length; ++i){
    encodingsMap[encodings[i]] = i;
}
const encodingOps = {
    ascii: {
        byteLength: (string)=>string.length,
        encoding: "ascii",
        encodingVal: encodingsMap.ascii,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, asciiToBytes(val), byteOffset, encodingsMap.ascii, dir),
        slice: (buf, start, end)=>buf.asciiSlice(start, end),
        write: (buf, string, offset, len)=>buf.asciiWrite(string, offset, len)
    },
    base64: {
        byteLength: (string)=>base64ByteLength(string, string.length),
        encoding: "base64",
        encodingVal: encodingsMap.base64,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, base64ToBytes(val), byteOffset, encodingsMap.base64, dir),
        slice: (buf, start, end)=>buf.base64Slice(start, end),
        write: (buf, string, offset, len)=>buf.base64Write(string, offset, len)
    },
    base64url: {
        byteLength: (string)=>base64ByteLength(string, string.length),
        encoding: "base64url",
        encodingVal: encodingsMap.base64url,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, base64UrlToBytes(val), byteOffset, encodingsMap.base64url, dir),
        slice: (buf, start, end)=>buf.base64urlSlice(start, end),
        write: (buf, string, offset, len)=>buf.base64urlWrite(string, offset, len)
    },
    hex: {
        byteLength: (string)=>string.length >>> 1,
        encoding: "hex",
        encodingVal: encodingsMap.hex,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, hexToBytes(val), byteOffset, encodingsMap.hex, dir),
        slice: (buf, start, end)=>buf.hexSlice(start, end),
        write: (buf, string, offset, len)=>buf.hexWrite(string, offset, len)
    },
    latin1: {
        byteLength: (string)=>string.length,
        encoding: "latin1",
        encodingVal: encodingsMap.latin1,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, asciiToBytes(val), byteOffset, encodingsMap.latin1, dir),
        slice: (buf, start, end)=>buf.latin1Slice(start, end),
        write: (buf, string, offset, len)=>buf.latin1Write(string, offset, len)
    },
    ucs2: {
        byteLength: (string)=>string.length * 2,
        encoding: "ucs2",
        encodingVal: encodingsMap.utf16le,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, utf16leToBytes(val), byteOffset, encodingsMap.utf16le, dir),
        slice: (buf, start, end)=>buf.ucs2Slice(start, end),
        write: (buf, string, offset, len)=>buf.ucs2Write(string, offset, len)
    },
    utf8: {
        byteLength: byteLengthUtf8,
        encoding: "utf8",
        encodingVal: encodingsMap.utf8,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, utf8Encoder.encode(val), byteOffset, encodingsMap.utf8, dir),
        slice: (buf, start, end)=>buf.utf8Slice(start, end),
        write: (buf, string, offset, len)=>buf.utf8Write(string, offset, len)
    },
    utf16le: {
        byteLength: (string)=>string.length * 2,
        encoding: "utf16le",
        encodingVal: encodingsMap.utf16le,
        indexOf: (buf, val, byteOffset, dir)=>indexOfBuffer(buf, utf16leToBytes(val), byteOffset, encodingsMap.utf16le, dir),
        slice: (buf, start, end)=>buf.ucs2Slice(start, end),
        write: (buf, string, offset, len)=>buf.ucs2Write(string, offset, len)
    }
};
function getEncodingOps(encoding) {
    encoding = String(encoding).toLowerCase();
    switch(encoding.length){
        case 4:
            if (encoding === "utf8") return encodingOps.utf8;
            if (encoding === "ucs2") return encodingOps.ucs2;
            break;
        case 5:
            if (encoding === "utf-8") return encodingOps.utf8;
            if (encoding === "ascii") return encodingOps.ascii;
            if (encoding === "ucs-2") return encodingOps.ucs2;
            break;
        case 7:
            if (encoding === "utf16le") {
                return encodingOps.utf16le;
            }
            break;
        case 8:
            if (encoding === "utf-16le") {
                return encodingOps.utf16le;
            }
            break;
        case 6:
            if (encoding === "latin1" || encoding === "binary") {
                return encodingOps.latin1;
            }
            if (encoding === "base64") return encodingOps.base64;
        case 3:
            if (encoding === "hex") {
                return encodingOps.hex;
            }
            break;
        case 9:
            if (encoding === "base64url") {
                return encodingOps.base64url;
            }
            break;
    }
}
function _copyActual(source, target, targetStart, sourceStart, sourceEnd) {
    if (sourceEnd - sourceStart > target.length - targetStart) {
        sourceEnd = sourceStart + target.length - targetStart;
    }
    let nb = sourceEnd - sourceStart;
    const sourceLen = source.length - sourceStart;
    if (nb > sourceLen) {
        nb = sourceLen;
    }
    if (sourceStart !== 0 || sourceEnd < source.length) {
        source = new Uint8Array(source.buffer, source.byteOffset + sourceStart, nb);
    }
    target.set(source, targetStart);
    return nb;
}
function boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new codes.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
    }
    if (length < 0) {
        throw new codes.ERR_BUFFER_OUT_OF_BOUNDS();
    }
    throw new codes.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
}
function validateNumber(value, name) {
    if (typeof value !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
}
function checkInt(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength > 3) {
            if (min === 0 || min === 0n) {
                range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
            } else {
                range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and ` + `< 2${n} ** ${(byteLength + 1) * 8 - 1}${n}`;
            }
        } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new codes.ERR_OUT_OF_RANGE("value", range, value);
    }
    checkBounds(buf, offset, byteLength);
}
function toInteger(n, defaultVal) {
    n = +n;
    if (!Number.isNaN(n) && n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER) {
        return n % 1 === 0 ? n : Math.floor(n);
    }
    return defaultVal;
}
function writeU_Int8(buf, value, offset, min, max) {
    value = +value;
    validateNumber(offset, "offset");
    if (value > max || value < min) {
        throw new codes.ERR_OUT_OF_RANGE("value", `>= ${min} and <= ${max}`, value);
    }
    if (buf[offset] === undefined) {
        boundsError(offset, buf.length - 1);
    }
    buf[offset] = value;
    return offset + 1;
}
function writeU_Int16BE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 1);
    buf[offset++] = value >>> 8;
    buf[offset++] = value;
    return offset;
}
function _writeUInt32LE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 3);
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    return offset;
}
function writeU_Int16LE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 1);
    buf[offset++] = value;
    buf[offset++] = value >>> 8;
    return offset;
}
function _writeUInt32BE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 3);
    buf[offset + 3] = value;
    value = value >>> 8;
    buf[offset + 2] = value;
    value = value >>> 8;
    buf[offset + 1] = value;
    value = value >>> 8;
    buf[offset] = value;
    return offset + 4;
}
function writeU_Int48BE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 5);
    const newVal = Math.floor(value * 2 ** -32);
    buf[offset++] = newVal >>> 8;
    buf[offset++] = newVal;
    buf[offset + 3] = value;
    value = value >>> 8;
    buf[offset + 2] = value;
    value = value >>> 8;
    buf[offset + 1] = value;
    value = value >>> 8;
    buf[offset] = value;
    return offset + 4;
}
function writeU_Int40BE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 4);
    buf[offset++] = Math.floor(value * 2 ** -32);
    buf[offset + 3] = value;
    value = value >>> 8;
    buf[offset + 2] = value;
    value = value >>> 8;
    buf[offset + 1] = value;
    value = value >>> 8;
    buf[offset] = value;
    return offset + 4;
}
function writeU_Int32BE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 3);
    buf[offset + 3] = value;
    value = value >>> 8;
    buf[offset + 2] = value;
    value = value >>> 8;
    buf[offset + 1] = value;
    value = value >>> 8;
    buf[offset] = value;
    return offset + 4;
}
function writeU_Int24BE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 2);
    buf[offset + 2] = value;
    value = value >>> 8;
    buf[offset + 1] = value;
    value = value >>> 8;
    buf[offset] = value;
    return offset + 3;
}
function validateOffset(value, name, min = 0, max = Number.MAX_SAFE_INTEGER) {
    if (typeof value !== "number") {
        throw new codes.ERR_INVALID_ARG_TYPE(name, "number", value);
    }
    if (!Number.isInteger(value)) {
        throw new codes.ERR_OUT_OF_RANGE(name, "an integer", value);
    }
    if (value < min || value > max) {
        throw new codes.ERR_OUT_OF_RANGE(name, `>= ${min} && <= ${max}`, value);
    }
}
function writeU_Int48LE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 5);
    const newVal = Math.floor(value * 2 ** -32);
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    buf[offset++] = newVal;
    buf[offset++] = newVal >>> 8;
    return offset;
}
function writeU_Int40LE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 4);
    const newVal = value;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    buf[offset++] = Math.floor(newVal * 2 ** -32);
    return offset;
}
function writeU_Int32LE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 3);
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    return offset;
}
function writeU_Int24LE(buf, value, offset, min, max) {
    value = +value;
    checkInt(value, min, max, buf, offset, 2);
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    value = value >>> 8;
    buf[offset++] = value;
    return offset;
}
const __default4 = {
    atob: atob1,
    btoa,
    Blob,
    Buffer,
    constants,
    kMaxLength: 2147483647,
    kStringMaxLength: 536870888,
    SlowBuffer
};
"use strict";
const kEscape = "\x1b";
Symbol("kSubstringSearch");
function CSI(strings, ...args) {
    let ret = `${kEscape}[`;
    for(let n = 0; n < strings.length; n++){
        ret += strings[n];
        if (n < args.length) {
            ret += args[n];
        }
    }
    return ret;
}
CSI.kEscape = kEscape;
CSI.kClearToLineBeginning = CSI`1K`;
CSI.kClearToLineEnd = CSI`0K`;
CSI.kClearLine = CSI`2K`;
CSI.kClearScreenDown = CSI`0J`;
"use strict";
const { kClearLine , kClearScreenDown , kClearToLineBeginning , kClearToLineEnd  } = CSI;
function cursorTo(stream, x, y, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback");
    }
    if (typeof y === "function") {
        callback = y;
        y = undefined;
    }
    if (Number.isNaN(x)) throw new ERR_INVALID_ARG_VALUE("x", x);
    if (Number.isNaN(y)) throw new ERR_INVALID_ARG_VALUE("y", y);
    if (stream == null || typeof x !== "number" && typeof y !== "number") {
        if (typeof callback === "function") process.nextTick(callback, null);
        return true;
    }
    if (typeof x !== "number") throw new ERR_INVALID_CURSOR_POS();
    const data = typeof y !== "number" ? CSI`${x + 1}G` : CSI`${y + 1};${x + 1}H`;
    return stream.write(data, callback);
}
function moveCursor(stream, dx, dy, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback");
    }
    if (stream == null || !(dx || dy)) {
        if (typeof callback === "function") process.nextTick(callback, null);
        return true;
    }
    let data = "";
    if (dx < 0) {
        data += CSI`${-dx}D`;
    } else if (dx > 0) {
        data += CSI`${dx}C`;
    }
    if (dy < 0) {
        data += CSI`${-dy}A`;
    } else if (dy > 0) {
        data += CSI`${dy}B`;
    }
    return stream.write(data, callback);
}
function clearLine(stream, dir, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback");
    }
    if (stream === null || stream === undefined) {
        if (typeof callback === "function") process.nextTick(callback, null);
        return true;
    }
    const type = dir < 0 ? kClearToLineBeginning : dir > 0 ? kClearToLineEnd : kClearLine;
    return stream.write(type, callback);
}
function clearScreenDown(stream, callback) {
    if (callback !== undefined) {
        validateFunction(callback, "callback");
    }
    if (stream === null || stream === undefined) {
        if (typeof callback === "function") process.nextTick(callback, null);
        return true;
    }
    return stream.write(kClearScreenDown, callback);
}
const stdio = {};
var NotImplemented;
(function(NotImplemented) {
    NotImplemented[NotImplemented["ascii"] = 0] = "ascii";
    NotImplemented[NotImplemented["latin1"] = 1] = "latin1";
    NotImplemented[NotImplemented["utf16le"] = 2] = "utf16le";
})(NotImplemented || (NotImplemented = {}));
function normalizeEncoding2(enc) {
    const encoding = normalizeEncoding(enc ?? null);
    if (encoding && encoding in NotImplemented) notImplemented(encoding);
    if (!encoding && typeof enc === "string" && enc.toLowerCase() !== "raw") {
        throw new Error(`Unknown encoding: ${enc}`);
    }
    return String(encoding);
}
function isBufferType(buf) {
    return buf instanceof ArrayBuffer && buf.BYTES_PER_ELEMENT;
}
function utf8CheckByte(__byte) {
    if (__byte <= 0x7f) return 0;
    else if (__byte >> 5 === 0x06) return 2;
    else if (__byte >> 4 === 0x0e) return 3;
    else if (__byte >> 3 === 0x1e) return 4;
    return __byte >> 6 === 0x02 ? -1 : -2;
}
function utf8CheckIncomplete(self, buf, i) {
    let j = buf.length - 1;
    if (j < i) return 0;
    let nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 1;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) self.lastNeed = nb - 2;
        return nb;
    }
    if (--j < i || nb === -2) return 0;
    nb = utf8CheckByte(buf[j]);
    if (nb >= 0) {
        if (nb > 0) {
            if (nb === 2) nb = 0;
            else self.lastNeed = nb - 3;
        }
        return nb;
    }
    return 0;
}
function utf8CheckExtraBytes(self, buf) {
    if ((buf[0] & 0xc0) !== 0x80) {
        self.lastNeed = 0;
        return "\ufffd";
    }
    if (self.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 0xc0) !== 0x80) {
            self.lastNeed = 1;
            return "\ufffd";
        }
        if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 0xc0) !== 0x80) {
                self.lastNeed = 2;
                return "\ufffd";
            }
        }
    }
}
function utf8FillLastComplete(buf) {
    const p = this.lastTotal - this.lastNeed;
    const r = utf8CheckExtraBytes(this, buf);
    if (r !== undefined) return r;
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, p, 0, buf.length);
    this.lastNeed -= buf.length;
}
function utf8FillLastIncomplete(buf) {
    if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
    this.lastNeed -= buf.length;
}
function utf8Text(buf, i) {
    const total = utf8CheckIncomplete(this, buf, i);
    if (!this.lastNeed) return buf.toString("utf8", i);
    this.lastTotal = total;
    const end = buf.length - (total - this.lastNeed);
    buf.copy(this.lastChar, 0, end);
    return buf.toString("utf8", i, end);
}
function utf8End(buf) {
    const r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) return r + "\ufffd";
    return r;
}
function utf8Write(buf) {
    if (typeof buf === "string") {
        return buf;
    }
    if (buf.length === 0) return "";
    let r;
    let i;
    const normalizedBuffer = isBufferType(buf) ? buf : Buffer.from(buf);
    if (this.lastNeed) {
        r = this.fillLast(normalizedBuffer);
        if (r === undefined) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
    } else {
        i = 0;
    }
    if (i < buf.length) {
        return r ? r + this.text(normalizedBuffer, i) : this.text(normalizedBuffer, i);
    }
    return r || "";
}
function base64Text(buf, i) {
    const n = (buf.length - i) % 3;
    if (n === 0) return buf.toString("base64", i);
    this.lastNeed = 3 - n;
    this.lastTotal = 3;
    if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
    } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
    }
    return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
    const r = buf && buf.length ? this.write(buf) : "";
    if (this.lastNeed) {
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    }
    return r;
}
function simpleWrite(buf) {
    if (typeof buf === "string") {
        return buf;
    }
    return buf.toString(this.encoding);
}
function simpleEnd(buf) {
    return buf && buf.length ? this.write(buf) : "";
}
class StringDecoderBase {
    lastChar;
    lastNeed;
    lastTotal;
    constructor(encoding, nb){
        this.encoding = encoding;
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer.allocUnsafe(nb);
    }
    encoding;
}
class Base64Decoder extends StringDecoderBase {
    end = base64End;
    fillLast = utf8FillLastIncomplete;
    text = base64Text;
    write = utf8Write;
    constructor(encoding){
        super(normalizeEncoding2(encoding), 3);
    }
}
class GenericDecoder extends StringDecoderBase {
    end = simpleEnd;
    fillLast = undefined;
    text = utf8Text;
    write = simpleWrite;
    constructor(encoding){
        super(normalizeEncoding2(encoding), 4);
    }
}
class Utf8Decoder extends StringDecoderBase {
    end = utf8End;
    fillLast = utf8FillLastComplete;
    text = utf8Text;
    write = utf8Write;
    constructor(encoding){
        super(normalizeEncoding2(encoding), 4);
    }
}
class StringDecoder {
    encoding;
    end;
    fillLast;
    lastChar;
    lastNeed;
    lastTotal;
    text;
    write;
    constructor(encoding){
        const normalizedEncoding = normalizeEncoding2(encoding);
        let decoder;
        switch(normalizedEncoding){
            case "utf8":
                decoder = new Utf8Decoder(encoding);
                break;
            case "base64":
                decoder = new Base64Decoder(encoding);
                break;
            default:
                decoder = new GenericDecoder(encoding);
        }
        this.encoding = decoder.encoding;
        this.end = decoder.end;
        this.fillLast = decoder.fillLast;
        this.lastChar = decoder.lastChar;
        this.lastNeed = decoder.lastNeed;
        this.lastTotal = decoder.lastTotal;
        this.text = decoder.text;
        this.write = decoder.write;
    }
}
const PStringDecoder = new Proxy(StringDecoder, {
    apply (_target, thisArg, args) {
        return Object.assign(thisArg, new StringDecoder(...args));
    }
});
const __default5 = {
    StringDecoder: PStringDecoder
};
const kDestroy = Symbol("kDestroy");
Symbol("kConstruct");
function checkError(err, w, r) {
    if (err) {
        err.stack;
        if (w && !w.errored) {
            w.errored = err;
        }
        if (r && !r.errored) {
            r.errored = err;
        }
    }
}
function destroy(err, cb) {
    const r = this._readableState;
    const w = this._writableState;
    const s = w || r;
    if (w && w.destroyed || r && r.destroyed) {
        if (typeof cb === "function") {
            cb();
        }
        return this;
    }
    checkError(err, w, r);
    if (w) {
        w.destroyed = true;
    }
    if (r) {
        r.destroyed = true;
    }
    if (!s.constructed) {
        this.once(kDestroy, function(er) {
            _destroy(this, aggregateTwoErrors(er, err), cb);
        });
    } else {
        _destroy(this, err, cb);
    }
    return this;
}
function _destroy(self, err, cb) {
    let called = false;
    function onDestroy(err) {
        if (called) {
            return;
        }
        called = true;
        const r = self._readableState;
        const w = self._writableState;
        checkError(err, w, r);
        if (w) {
            w.closed = true;
        }
        if (r) {
            r.closed = true;
        }
        if (typeof cb === "function") {
            cb(err);
        }
        if (err) {
            nextTick1(emitErrorCloseNT, self, err);
        } else {
            nextTick1(emitCloseNT, self);
        }
    }
    try {
        const result = self._destroy(err || null, onDestroy);
        if (result != null) {
            const then = result.then;
            if (typeof then === "function") {
                then.call(result, function() {
                    nextTick1(onDestroy, null);
                }, function(err) {
                    nextTick1(onDestroy, err);
                });
            }
        }
    } catch (err1) {
        onDestroy(err1);
    }
}
function emitErrorCloseNT(self, err) {
    emitErrorNT(self, err);
    emitCloseNT(self);
}
function emitCloseNT(self) {
    const r = self._readableState;
    const w = self._writableState;
    if (w) {
        w.closeEmitted = true;
    }
    if (r) {
        r.closeEmitted = true;
    }
    if (w && w.emitClose || r && r.emitClose) {
        self.emit("close");
    }
}
function emitErrorNT(self, err) {
    const r = self._readableState;
    const w = self._writableState;
    if (w && w.errorEmitted || r && r.errorEmitted) {
        return;
    }
    if (w) {
        w.errorEmitted = true;
    }
    if (r) {
        r.errorEmitted = true;
    }
    self.emit("error", err);
}
function isRequest(stream) {
    return stream.setHeader && typeof stream.abort === "function";
}
function isServerResponse(stream) {
    return typeof stream._sent100 === "boolean" && typeof stream._removedConnection === "boolean" && typeof stream._removedContLen === "boolean" && typeof stream._removedTE === "boolean" && typeof stream._closed === "boolean";
}
function isReadable(stream) {
    return typeof stream.readable === "boolean" || typeof stream.readableEnded === "boolean" || !!stream._readableState;
}
function isWritable(stream) {
    return typeof stream.writable === "boolean" || typeof stream.writableEnded === "boolean" || !!stream._writableState;
}
function isWritableFinished(stream) {
    if (stream.writableFinished) return true;
    const wState = stream._writableState;
    if (!wState || wState.errored) return false;
    return wState.finished || wState.ended && wState.length === 0;
}
const nop = ()=>{};
function isReadableEnded(stream) {
    if (stream.readableEnded) return true;
    const rState = stream._readableState;
    if (!rState || rState.errored) return false;
    return rState.endEmitted || rState.ended && rState.length === 0;
}
function eos(stream, options, callback) {
    if (arguments.length === 2) {
        callback = options;
        options = {};
    } else if (options == null) {
        options = {};
    } else {
        validateObject(options, "options");
    }
    validateFunction(callback, "callback");
    validateAbortSignal(options.signal, "options.signal");
    callback = once1(callback);
    const readable = options.readable || options.readable !== false && isReadable(stream);
    const writable = options.writable || options.writable !== false && isWritable(stream);
    const wState = stream._writableState;
    const rState = stream._readableState;
    const state = wState || rState;
    const onlegacyfinish = ()=>{
        if (!stream.writable) onfinish();
    };
    let willEmitClose = isServerResponse(stream) || state && state.autoDestroy && state.emitClose && state.closed === false && isReadable(stream) === readable && isWritable(stream) === writable;
    let writableFinished = stream.writableFinished || wState && wState.finished;
    const onfinish = ()=>{
        writableFinished = true;
        if (stream.destroyed) willEmitClose = false;
        if (willEmitClose && (!stream.readable || readable)) return;
        if (!readable || readableEnded) callback.call(stream);
    };
    let readableEnded = stream.readableEnded || rState && rState.endEmitted;
    const onend = ()=>{
        readableEnded = true;
        if (stream.destroyed) willEmitClose = false;
        if (willEmitClose && (!stream.writable || writable)) return;
        if (!writable || writableFinished) callback.call(stream);
    };
    const onerror = (err)=>{
        callback.call(stream, err);
    };
    const onclose = ()=>{
        if (readable && !readableEnded) {
            if (!isReadableEnded(stream)) {
                return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
            }
        }
        if (writable && !writableFinished) {
            if (!isWritableFinished(stream)) {
                return callback.call(stream, new ERR_STREAM_PREMATURE_CLOSE());
            }
        }
        callback.call(stream);
    };
    const onrequest = ()=>{
        stream.req.on("finish", onfinish);
    };
    if (isRequest(stream)) {
        stream.on("complete", onfinish);
        if (!willEmitClose) {
            stream.on("abort", onclose);
        }
        if (stream.req) onrequest();
        else stream.on("request", onrequest);
    } else if (writable && !wState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
    }
    if (!willEmitClose && typeof stream.aborted === "boolean") {
        stream.on("aborted", onclose);
    }
    stream.on("end", onend);
    stream.on("finish", onfinish);
    if (options.error !== false) stream.on("error", onerror);
    stream.on("close", onclose);
    const closed = !wState && !rState && stream._closed === true || wState && wState.closed || rState && rState.closed || wState && wState.errorEmitted || rState && rState.errorEmitted || rState && stream.req && stream.aborted || (!wState || !willEmitClose || typeof wState.closed !== "boolean") && (!rState || !willEmitClose || typeof rState.closed !== "boolean") && (!writable || wState && wState.finished) && (!readable || rState && rState.endEmitted);
    if (closed) {
        nextTick1(()=>{
            callback();
        });
    }
    const cleanup = ()=>{
        callback = nop;
        stream.removeListener("aborted", onclose);
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req) stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
    };
    if (options.signal && !closed) {
        const abort = ()=>{
            const endCallback = callback;
            cleanup();
            endCallback.call(stream, new AbortError());
        };
        if (options.signal.aborted) {
            nextTick1(abort);
        } else {
            const originalCallback = callback;
            callback = once1((...args)=>{
                options.signal.removeEventListener("abort", abort);
                originalCallback.apply(stream, args);
            });
            options.signal.addEventListener("abort", abort);
        }
    }
    return cleanup;
}
Symbol("kIsDisturbed");
function isReadableNodeStream(obj) {
    return !!(obj && typeof obj.pipe === "function" && typeof obj.on === "function" && (!obj._writableState || obj._readableState?.readable !== false) && (!obj._writableState || obj._readableState));
}
function isWritableNodeStream(obj) {
    return !!(obj && typeof obj.write === "function" && typeof obj.on === "function" && (!obj._readableState || obj._writableState?.writable !== false));
}
function isNodeStream(obj) {
    return obj && (obj._readableState || obj._writableState || typeof obj.write === "function" && typeof obj.on === "function" || typeof obj.pipe === "function" && typeof obj.on === "function");
}
function isDestroyed(stream) {
    if (!isNodeStream(stream)) return null;
    const wState = stream._writableState;
    const rState = stream._readableState;
    const state = wState || rState;
    return !!(stream.destroyed || state?.destroyed);
}
function isWritableEnded(stream) {
    if (!isWritableNodeStream(stream)) return null;
    if (stream.writableEnded === true) return true;
    const wState = stream._writableState;
    if (wState?.errored) return false;
    if (typeof wState?.ended !== "boolean") return null;
    return wState.ended;
}
function isReadableEnded1(stream) {
    if (!isReadableNodeStream(stream)) return null;
    if (stream.readableEnded === true) return true;
    const rState = stream._readableState;
    if (!rState || rState.errored) return false;
    if (typeof rState?.ended !== "boolean") return null;
    return rState.ended;
}
function isReadableFinished(stream, strict) {
    if (!isReadableNodeStream(stream)) return null;
    const rState = stream._readableState;
    if (rState?.errored) return false;
    if (typeof rState?.endEmitted !== "boolean") return null;
    return !!(rState.endEmitted || strict === false && rState.ended === true && rState.length === 0);
}
function isReadable1(stream) {
    const r = isReadableNodeStream(stream);
    if (r === null || typeof stream?.readable !== "boolean") return null;
    if (isDestroyed(stream)) return false;
    return r && stream.readable && !isReadableFinished(stream);
}
function isWritable1(stream) {
    const r = isWritableNodeStream(stream);
    if (r === null || typeof stream?.writable !== "boolean") return null;
    if (isDestroyed(stream)) return false;
    return r && stream.writable && !isWritableEnded(stream);
}
const __process$ = {
    nextTick: nextTick1,
    stdio
};
var pi = Object.create;
var Bt = Object.defineProperty;
var wi = Object.getOwnPropertyDescriptor;
var yi = Object.getOwnPropertyNames;
var gi = Object.getPrototypeOf, Si = Object.prototype.hasOwnProperty;
((e)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
        get: (t, n)=>(typeof require < "u" ? require : t)[n]
    }) : e)(function(e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var g = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports);
var Ei = (e, t, n, r)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let i of yi(t))!Si.call(e, i) && i !== n && Bt(e, i, {
        get: ()=>t[i],
        enumerable: !(r = wi(t, i)) || r.enumerable
    });
    return e;
};
var Ri = (e, t, n)=>(n = e != null ? pi(gi(e)) : {}, Ei(t || !e || !e.__esModule ? Bt(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e));
var m = g((Yf, Gt)=>{
    "use strict";
    Gt.exports = {
        ArrayIsArray (e) {
            return Array.isArray(e);
        },
        ArrayPrototypeIncludes (e, t) {
            return e.includes(t);
        },
        ArrayPrototypeIndexOf (e, t) {
            return e.indexOf(t);
        },
        ArrayPrototypeJoin (e, t) {
            return e.join(t);
        },
        ArrayPrototypeMap (e, t) {
            return e.map(t);
        },
        ArrayPrototypePop (e, t) {
            return e.pop(t);
        },
        ArrayPrototypePush (e, t) {
            return e.push(t);
        },
        ArrayPrototypeSlice (e, t, n) {
            return e.slice(t, n);
        },
        Error,
        FunctionPrototypeCall (e, t, ...n) {
            return e.call(t, ...n);
        },
        FunctionPrototypeSymbolHasInstance (e, t) {
            return Function.prototype[Symbol.hasInstance].call(e, t);
        },
        MathFloor: Math.floor,
        Number,
        NumberIsInteger: Number.isInteger,
        NumberIsNaN: Number.isNaN,
        NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
        NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
        NumberParseInt: Number.parseInt,
        ObjectDefineProperties (e, t) {
            return Object.defineProperties(e, t);
        },
        ObjectDefineProperty (e, t, n) {
            return Object.defineProperty(e, t, n);
        },
        ObjectGetOwnPropertyDescriptor (e, t) {
            return Object.getOwnPropertyDescriptor(e, t);
        },
        ObjectKeys (e) {
            return Object.keys(e);
        },
        ObjectSetPrototypeOf (e, t) {
            return Object.setPrototypeOf(e, t);
        },
        Promise,
        PromisePrototypeCatch (e, t) {
            return e.catch(t);
        },
        PromisePrototypeThen (e, t, n) {
            return e.then(t, n);
        },
        PromiseReject (e) {
            return Promise.reject(e);
        },
        ReflectApply: Reflect.apply,
        RegExpPrototypeTest (e, t) {
            return e.test(t);
        },
        SafeSet: Set,
        String,
        StringPrototypeSlice (e, t, n) {
            return e.slice(t, n);
        },
        StringPrototypeToLowerCase (e) {
            return e.toLowerCase();
        },
        StringPrototypeToUpperCase (e) {
            return e.toUpperCase();
        },
        StringPrototypeTrim (e) {
            return e.trim();
        },
        Symbol,
        SymbolAsyncIterator: Symbol.asyncIterator,
        SymbolHasInstance: Symbol.hasInstance,
        SymbolIterator: Symbol.iterator,
        TypedArrayPrototypeSet (e, t, n) {
            return e.set(t, n);
        },
        Uint8Array
    };
});
var j = g((Kf, Je)=>{
    "use strict";
    var Ai = __default4, mi = Object.getPrototypeOf(async function() {}).constructor, Ht = globalThis.Blob || Ai.Blob, Ti = typeof Ht < "u" ? function(t) {
        return t instanceof Ht;
    } : function(t) {
        return !1;
    }, Xe = class extends Error {
        constructor(t){
            if (!Array.isArray(t)) throw new TypeError(`Expected input to be an Array, got ${typeof t}`);
            let n = "";
            for(let r = 0; r < t.length; r++)n += `    ${t[r].stack}
`;
            super(n), this.name = "AggregateError", this.errors = t;
        }
    };
    Je.exports = {
        AggregateError: Xe,
        kEmptyObject: Object.freeze({}),
        once (e) {
            let t = !1;
            return function(...n) {
                t || (t = !0, e.apply(this, n));
            };
        },
        createDeferredPromise: function() {
            let e, t;
            return {
                promise: new Promise((r, i)=>{
                    e = r, t = i;
                }),
                resolve: e,
                reject: t
            };
        },
        promisify (e) {
            return new Promise((t, n)=>{
                e((r, ...i)=>r ? n(r) : t(...i));
            });
        },
        debuglog () {
            return function() {};
        },
        format (e, ...t) {
            return e.replace(/%([sdifj])/g, function(...[n, r]) {
                let i = t.shift();
                return r === "f" ? i.toFixed(6) : r === "j" ? JSON.stringify(i) : r === "s" && typeof i == "object" ? `${i.constructor !== Object ? i.constructor.name : ""} {}`.trim() : i.toString();
            });
        },
        inspect (e) {
            switch(typeof e){
                case "string":
                    if (e.includes("'")) if (e.includes('"')) {
                        if (!e.includes("`") && !e.includes("${")) return `\`${e}\``;
                    } else return `"${e}"`;
                    return `'${e}'`;
                case "number":
                    return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e;
                case "bigint":
                    return `${String(e)}n`;
                case "boolean":
                case "undefined":
                    return String(e);
                case "object":
                    return "{}";
            }
        },
        types: {
            isAsyncFunction (e) {
                return e instanceof mi;
            },
            isArrayBufferView (e) {
                return ArrayBuffer.isView(e);
            }
        },
        isBlob: Ti
    };
    Je.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
});
var O = g((zf, Kt)=>{
    "use strict";
    var { format: Ii , inspect: Re , AggregateError: Mi  } = j(), Ni = globalThis.AggregateError || Mi, Di = Symbol("kIsNodeError"), Oi = [
        "string",
        "function",
        "number",
        "object",
        "Function",
        "Object",
        "boolean",
        "bigint",
        "symbol"
    ], qi = /^([A-Z][a-z0-9]*)+$/, xi = "__node_internal_", Ae = {};
    function X(e, t) {
        if (!e) throw new Ae.ERR_INTERNAL_ASSERTION(t);
    }
    function Vt(e) {
        let t = "", n = e.length, r = e[0] === "-" ? 1 : 0;
        for(; n >= r + 4; n -= 3)t = `_${e.slice(n - 3, n)}${t}`;
        return `${e.slice(0, n)}${t}`;
    }
    function Li(e, t, n) {
        if (typeof t == "function") return X(t.length <= n.length, `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${t.length}).`), t(...n);
        let r = (t.match(/%[dfijoOs]/g) || []).length;
        return X(r === n.length, `Code: ${e}; The provided arguments length (${n.length}) does not match the required ones (${r}).`), n.length === 0 ? t : Ii(t, ...n);
    }
    function N(e, t, n) {
        n || (n = Error);
        class r extends n {
            constructor(...o){
                super(Li(e, t, o));
            }
            toString() {
                return `${this.name} [${e}]: ${this.message}`;
            }
        }
        Object.defineProperties(r.prototype, {
            name: {
                value: n.name,
                writable: !0,
                enumerable: !1,
                configurable: !0
            },
            toString: {
                value () {
                    return `${this.name} [${e}]: ${this.message}`;
                },
                writable: !0,
                enumerable: !1,
                configurable: !0
            }
        }), r.prototype.code = e, r.prototype[Di] = !0, Ae[e] = r;
    }
    function Yt(e) {
        let t = xi + e.name;
        return Object.defineProperty(e, "name", {
            value: t
        }), e;
    }
    function Pi(e, t) {
        if (e && t && e !== t) {
            if (Array.isArray(t.errors)) return t.errors.push(e), t;
            let n = new Ni([
                t,
                e
            ], t.message);
            return n.code = t.code, n;
        }
        return e || t;
    }
    var Qe = class extends Error {
        constructor(t = "The operation was aborted", n = void 0){
            if (n !== void 0 && typeof n != "object") throw new Ae.ERR_INVALID_ARG_TYPE("options", "Object", n);
            super(t, n), this.code = "ABORT_ERR", this.name = "AbortError";
        }
    };
    N("ERR_ASSERTION", "%s", Error);
    N("ERR_INVALID_ARG_TYPE", (e, t, n)=>{
        X(typeof e == "string", "'name' must be a string"), Array.isArray(t) || (t = [
            t
        ]);
        let r = "The ";
        e.endsWith(" argument") ? r += `${e} ` : r += `"${e}" ${e.includes(".") ? "property" : "argument"} `, r += "must be ";
        let i = [], o = [], l = [];
        for (let f of t)X(typeof f == "string", "All expected entries have to be of type string"), Oi.includes(f) ? i.push(f.toLowerCase()) : qi.test(f) ? o.push(f) : (X(f !== "object", 'The value "object" should be written as "Object"'), l.push(f));
        if (o.length > 0) {
            let f1 = i.indexOf("object");
            f1 !== -1 && (i.splice(i, f1, 1), o.push("Object"));
        }
        if (i.length > 0) {
            switch(i.length){
                case 1:
                    r += `of type ${i[0]}`;
                    break;
                case 2:
                    r += `one of type ${i[0]} or ${i[1]}`;
                    break;
                default:
                    {
                        let f2 = i.pop();
                        r += `one of type ${i.join(", ")}, or ${f2}`;
                    }
            }
            (o.length > 0 || l.length > 0) && (r += " or ");
        }
        if (o.length > 0) {
            switch(o.length){
                case 1:
                    r += `an instance of ${o[0]}`;
                    break;
                case 2:
                    r += `an instance of ${o[0]} or ${o[1]}`;
                    break;
                default:
                    {
                        let f3 = o.pop();
                        r += `an instance of ${o.join(", ")}, or ${f3}`;
                    }
            }
            l.length > 0 && (r += " or ");
        }
        switch(l.length){
            case 0:
                break;
            case 1:
                l[0].toLowerCase() !== l[0] && (r += "an "), r += `${l[0]}`;
                break;
            case 2:
                r += `one of ${l[0]} or ${l[1]}`;
                break;
            default:
                {
                    let f4 = l.pop();
                    r += `one of ${l.join(", ")}, or ${f4}`;
                }
        }
        if (n == null) r += `. Received ${n}`;
        else if (typeof n == "function" && n.name) r += `. Received function ${n.name}`;
        else if (typeof n == "object") {
            var u;
            (u = n.constructor) !== null && u !== void 0 && u.name ? r += `. Received an instance of ${n.constructor.name}` : r += `. Received ${Re(n, {
                depth: -1
            })}`;
        } else {
            let f5 = Re(n, {
                colors: !1
            });
            f5.length > 25 && (f5 = `${f5.slice(0, 25)}...`), r += `. Received type ${typeof n} (${f5})`;
        }
        return r;
    }, TypeError);
    N("ERR_INVALID_ARG_VALUE", (e, t, n = "is invalid")=>{
        let r = Re(t);
        return r.length > 128 && (r = r.slice(0, 128) + "..."), `The ${e.includes(".") ? "property" : "argument"} '${e}' ${n}. Received ${r}`;
    }, TypeError);
    N("ERR_INVALID_RETURN_VALUE", (e, t, n)=>{
        var r;
        let i = n != null && (r = n.constructor) !== null && r !== void 0 && r.name ? `instance of ${n.constructor.name}` : `type ${typeof n}`;
        return `Expected ${e} to be returned from the "${t}" function but got ${i}.`;
    }, TypeError);
    N("ERR_MISSING_ARGS", (...e)=>{
        X(e.length > 0, "At least one arg needs to be specified");
        let t, n = e.length;
        switch(e = (Array.isArray(e) ? e : [
            e
        ]).map((r)=>`"${r}"`).join(" or "), n){
            case 1:
                t += `The ${e[0]} argument`;
                break;
            case 2:
                t += `The ${e[0]} and ${e[1]} arguments`;
                break;
            default:
                {
                    let r = e.pop();
                    t += `The ${e.join(", ")}, and ${r} arguments`;
                }
                break;
        }
        return `${t} must be specified`;
    }, TypeError);
    N("ERR_OUT_OF_RANGE", (e, t, n)=>{
        X(t, 'Missing "range" argument');
        let r;
        return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? r = Vt(String(n)) : typeof n == "bigint" ? (r = String(n), (n > 2n ** 32n || n < -(2n ** 32n)) && (r = Vt(r)), r += "n") : r = Re(n), `The value of "${e}" is out of range. It must be ${t}. Received ${r}`;
    }, RangeError);
    N("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error);
    N("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error);
    N("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error);
    N("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error);
    N("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error);
    N("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    N("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error);
    N("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error);
    N("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error);
    N("ERR_STREAM_WRITE_AFTER_END", "write after end", Error);
    N("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError);
    Kt.exports = {
        AbortError: Qe,
        aggregateTwoErrors: Yt(Pi),
        hideStackFrames: Yt,
        codes: Ae
    };
});
var _e = g((Xf, nn)=>{
    "use strict";
    var { ArrayIsArray: Jt , ArrayPrototypeIncludes: Qt , ArrayPrototypeJoin: Zt , ArrayPrototypeMap: ki , NumberIsInteger: et , NumberIsNaN: Wi , NumberMAX_SAFE_INTEGER: Ci , NumberMIN_SAFE_INTEGER: ji , NumberParseInt: $i , ObjectPrototypeHasOwnProperty: vi , RegExpPrototypeExec: Fi , String: Ui , StringPrototypeToUpperCase: Bi , StringPrototypeTrim: Gi  } = m(), { hideStackFrames: k , codes: { ERR_SOCKET_BAD_PORT: Hi , ERR_INVALID_ARG_TYPE: q , ERR_INVALID_ARG_VALUE: me , ERR_OUT_OF_RANGE: J , ERR_UNKNOWN_SIGNAL: zt  }  } = O(), { normalizeEncoding: Vi  } = j(), { isAsyncFunction: Yi , isArrayBufferView: Ki  } = j().types, Xt = {};
    function zi(e) {
        return e === (e | 0);
    }
    function Xi(e) {
        return e === e >>> 0;
    }
    var Ji = /^[0-7]+$/, Qi = "must be a 32-bit unsigned integer or an octal string";
    function Zi(e, t, n) {
        if (typeof e > "u" && (e = n), typeof e == "string") {
            if (Fi(Ji, e) === null) throw new me(t, e, Qi);
            e = $i(e, 8);
        }
        return en(e, t), e;
    }
    var eo = k((e, t, n = ji, r = Ci)=>{
        if (typeof e != "number") throw new q(t, "number", e);
        if (!et(e)) throw new J(t, "an integer", e);
        if (e < n || e > r) throw new J(t, `>= ${n} && <= ${r}`, e);
    }), to = k((e, t, n = -2147483648, r = 2147483647)=>{
        if (typeof e != "number") throw new q(t, "number", e);
        if (!et(e)) throw new J(t, "an integer", e);
        if (e < n || e > r) throw new J(t, `>= ${n} && <= ${r}`, e);
    }), en = k((e, t, n = !1)=>{
        if (typeof e != "number") throw new q(t, "number", e);
        if (!et(e)) throw new J(t, "an integer", e);
        let r = n ? 1 : 0, i = 4294967295;
        if (e < r || e > i) throw new J(t, `>= ${r} && <= ${i}`, e);
    });
    function tn(e, t) {
        if (typeof e != "string") throw new q(t, "string", e);
    }
    function no(e, t, n = void 0, r) {
        if (typeof e != "number") throw new q(t, "number", e);
        if (n != null && e < n || r != null && e > r || (n != null || r != null) && Wi(e)) throw new J(t, `${n != null ? `>= ${n}` : ""}${n != null && r != null ? " && " : ""}${r != null ? `<= ${r}` : ""}`, e);
    }
    var ro = k((e, t, n)=>{
        if (!Qt(n, e)) {
            let r = Zt(ki(n, (o)=>typeof o == "string" ? `'${o}'` : Ui(o)), ", "), i = "must be one of: " + r;
            throw new me(t, e, i);
        }
    });
    function io(e, t) {
        if (typeof e != "boolean") throw new q(t, "boolean", e);
    }
    function Ze(e, t, n) {
        return e == null || !vi(e, t) ? n : e[t];
    }
    var oo = k((e, t, n = null)=>{
        let r = Ze(n, "allowArray", !1), i = Ze(n, "allowFunction", !1);
        if (!Ze(n, "nullable", !1) && e === null || !r && Jt(e) || typeof e != "object" && (!i || typeof e != "function")) throw new q(t, "Object", e);
    }), lo = k((e, t, n = 0)=>{
        if (!Jt(e)) throw new q(t, "Array", e);
        if (e.length < n) {
            let r = `must be longer than ${n}`;
            throw new me(t, e, r);
        }
    });
    function ao(e, t = "signal") {
        if (tn(e, t), Xt[e] === void 0) throw Xt[Bi(e)] !== void 0 ? new zt(e + " (signals must use all capital letters)") : new zt(e);
    }
    var fo = k((e, t = "buffer")=>{
        if (!Ki(e)) throw new q(t, [
            "Buffer",
            "TypedArray",
            "DataView"
        ], e);
    });
    function uo(e, t) {
        let n = Vi(t), r = e.length;
        if (n === "hex" && r % 2 !== 0) throw new me("encoding", t, `is invalid for data of length ${r}`);
    }
    function so(e, t = "Port", n = !0) {
        if (typeof e != "number" && typeof e != "string" || typeof e == "string" && Gi(e).length === 0 || +e !== +e >>> 0 || e > 65535 || e === 0 && !n) throw new Hi(t, e, n);
        return e | 0;
    }
    var co = k((e, t)=>{
        if (e !== void 0 && (e === null || typeof e != "object" || !("aborted" in e))) throw new q(t, "AbortSignal", e);
    }), ho = k((e, t)=>{
        if (typeof e != "function") throw new q(t, "Function", e);
    }), bo = k((e, t)=>{
        if (typeof e != "function" || Yi(e)) throw new q(t, "Function", e);
    }), _o = k((e, t)=>{
        if (e !== void 0) throw new q(t, "undefined", e);
    });
    function po(e, t, n) {
        if (!Qt(n, e)) throw new q(t, `('${Zt(n, "|")}')`, e);
    }
    nn.exports = {
        isInt32: zi,
        isUint32: Xi,
        parseFileMode: Zi,
        validateArray: lo,
        validateBoolean: io,
        validateBuffer: fo,
        validateEncoding: uo,
        validateFunction: ho,
        validateInt32: to,
        validateInteger: eo,
        validateNumber: no,
        validateObject: oo,
        validateOneOf: ro,
        validatePlainFunction: bo,
        validatePort: so,
        validateSignalName: ao,
        validateString: tn,
        validateUint32: en,
        validateUndefined: _o,
        validateUnion: po,
        validateAbortSignal: co
    };
});
var V = g((Jf, _n)=>{
    "use strict";
    var { Symbol: Te , SymbolAsyncIterator: rn , SymbolIterator: on  } = m(), ln = Te("kDestroyed"), an = Te("kIsErrored"), tt = Te("kIsReadable"), fn = Te("kIsDisturbed");
    function Ie(e, t = !1) {
        var n;
        return !!(e && typeof e.pipe == "function" && typeof e.on == "function" && (!t || typeof e.pause == "function" && typeof e.resume == "function") && (!e._writableState || ((n = e._readableState) === null || n === void 0 ? void 0 : n.readable) !== !1) && (!e._writableState || e._readableState));
    }
    function Me(e) {
        var t;
        return !!(e && typeof e.write == "function" && typeof e.on == "function" && (!e._readableState || ((t = e._writableState) === null || t === void 0 ? void 0 : t.writable) !== !1));
    }
    function wo(e) {
        return !!(e && typeof e.pipe == "function" && e._readableState && typeof e.on == "function" && typeof e.write == "function");
    }
    function Q(e) {
        return e && (e._readableState || e._writableState || typeof e.write == "function" && typeof e.on == "function" || typeof e.pipe == "function" && typeof e.on == "function");
    }
    function yo(e, t) {
        return e == null ? !1 : t === !0 ? typeof e[rn] == "function" : t === !1 ? typeof e[on] == "function" : typeof e[rn] == "function" || typeof e[on] == "function";
    }
    function Ne(e) {
        if (!Q(e)) return null;
        let t = e._writableState, n = e._readableState, r = t || n;
        return !!(e.destroyed || e[ln] || r != null && r.destroyed);
    }
    function un(e) {
        if (!Me(e)) return null;
        if (e.writableEnded === !0) return !0;
        let t = e._writableState;
        return t != null && t.errored ? !1 : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function go(e, t) {
        if (!Me(e)) return null;
        if (e.writableFinished === !0) return !0;
        let n = e._writableState;
        return n != null && n.errored ? !1 : typeof n?.finished != "boolean" ? null : !!(n.finished || t === !1 && n.ended === !0 && n.length === 0);
    }
    function So(e) {
        if (!Ie(e)) return null;
        if (e.readableEnded === !0) return !0;
        let t = e._readableState;
        return !t || t.errored ? !1 : typeof t?.ended != "boolean" ? null : t.ended;
    }
    function sn(e, t) {
        if (!Ie(e)) return null;
        let n = e._readableState;
        return n != null && n.errored ? !1 : typeof n?.endEmitted != "boolean" ? null : !!(n.endEmitted || t === !1 && n.ended === !0 && n.length === 0);
    }
    function dn(e) {
        return e && e[tt] != null ? e[tt] : typeof e?.readable != "boolean" ? null : Ne(e) ? !1 : Ie(e) && e.readable && !sn(e);
    }
    function cn(e) {
        return typeof e?.writable != "boolean" ? null : Ne(e) ? !1 : Me(e) && e.writable && !un(e);
    }
    function Eo(e, t) {
        return Q(e) ? Ne(e) ? !0 : !(t?.readable !== !1 && dn(e) || t?.writable !== !1 && cn(e)) : null;
    }
    function Ro(e) {
        var t, n;
        return Q(e) ? e.writableErrored ? e.writableErrored : (t = (n = e._writableState) === null || n === void 0 ? void 0 : n.errored) !== null && t !== void 0 ? t : null : null;
    }
    function Ao(e) {
        var t, n;
        return Q(e) ? e.readableErrored ? e.readableErrored : (t = (n = e._readableState) === null || n === void 0 ? void 0 : n.errored) !== null && t !== void 0 ? t : null : null;
    }
    function mo(e) {
        if (!Q(e)) return null;
        if (typeof e.closed == "boolean") return e.closed;
        let t = e._writableState, n = e._readableState;
        return typeof t?.closed == "boolean" || typeof n?.closed == "boolean" ? t?.closed || n?.closed : typeof e._closed == "boolean" && hn(e) ? e._closed : null;
    }
    function hn(e) {
        return typeof e._closed == "boolean" && typeof e._defaultKeepAlive == "boolean" && typeof e._removedConnection == "boolean" && typeof e._removedContLen == "boolean";
    }
    function bn(e) {
        return typeof e._sent100 == "boolean" && hn(e);
    }
    function To(e) {
        var t;
        return typeof e._consuming == "boolean" && typeof e._dumped == "boolean" && ((t = e.req) === null || t === void 0 ? void 0 : t.upgradeOrConnect) === void 0;
    }
    function Io(e) {
        if (!Q(e)) return null;
        let t = e._writableState, n = e._readableState, r = t || n;
        return !r && bn(e) || !!(r && r.autoDestroy && r.emitClose && r.closed === !1);
    }
    function Mo(e) {
        var t;
        return !!(e && ((t = e[fn]) !== null && t !== void 0 ? t : e.readableDidRead || e.readableAborted));
    }
    function No(e) {
        var t, n, r, i, o, l, u, f, a, c;
        return !!(e && ((t = (n = (r = (i = (o = (l = e[an]) !== null && l !== void 0 ? l : e.readableErrored) !== null && o !== void 0 ? o : e.writableErrored) !== null && i !== void 0 ? i : (u = e._readableState) === null || u === void 0 ? void 0 : u.errorEmitted) !== null && r !== void 0 ? r : (f = e._writableState) === null || f === void 0 ? void 0 : f.errorEmitted) !== null && n !== void 0 ? n : (a = e._readableState) === null || a === void 0 ? void 0 : a.errored) !== null && t !== void 0 ? t : (c = e._writableState) === null || c === void 0 ? void 0 : c.errored));
    }
    _n.exports = {
        kDestroyed: ln,
        isDisturbed: Mo,
        kIsDisturbed: fn,
        isErrored: No,
        kIsErrored: an,
        isReadable: dn,
        kIsReadable: tt,
        isClosed: mo,
        isDestroyed: Ne,
        isDuplexNodeStream: wo,
        isFinished: Eo,
        isIterable: yo,
        isReadableNodeStream: Ie,
        isReadableEnded: So,
        isReadableFinished: sn,
        isReadableErrored: Ao,
        isNodeStream: Q,
        isWritable: cn,
        isWritableNodeStream: Me,
        isWritableEnded: un,
        isWritableFinished: go,
        isWritableErrored: Ro,
        isServerRequest: To,
        isServerResponse: bn,
        willEmitClose: Io
    };
});
var Y = g((Qf, rt)=>{
    var oe = __process$, { AbortError: Do , codes: Oo  } = O(), { ERR_INVALID_ARG_TYPE: qo , ERR_STREAM_PREMATURE_CLOSE: pn  } = Oo, { kEmptyObject: wn , once: yn  } = j(), { validateAbortSignal: xo , validateFunction: Lo , validateObject: Po  } = _e(), { Promise: ko  } = m(), { isClosed: Wo , isReadable: gn , isReadableNodeStream: nt , isReadableFinished: Sn , isReadableErrored: Co , isWritable: En , isWritableNodeStream: Rn , isWritableFinished: An , isWritableErrored: jo , isNodeStream: $o , willEmitClose: vo  } = V();
    function Fo(e) {
        return e.setHeader && typeof e.abort == "function";
    }
    var Uo = ()=>{};
    function mn(e, t, n) {
        var r, i;
        arguments.length === 2 ? (n = t, t = wn) : t == null ? t = wn : Po(t, "options"), Lo(n, "callback"), xo(t.signal, "options.signal"), n = yn(n);
        let o = (r = t.readable) !== null && r !== void 0 ? r : nt(e), l = (i = t.writable) !== null && i !== void 0 ? i : Rn(e);
        if (!$o(e)) throw new qo("stream", "Stream", e);
        let u = e._writableState, f = e._readableState, a = ()=>{
            e.writable || b();
        }, c = vo(e) && nt(e) === o && Rn(e) === l, s = An(e, !1), b = ()=>{
            s = !0, e.destroyed && (c = !1), !(c && (!e.readable || o)) && (!o || d) && n.call(e);
        }, d = Sn(e, !1), h = ()=>{
            d = !0, e.destroyed && (c = !1), !(c && (!e.writable || l)) && (!l || s) && n.call(e);
        }, D = (M)=>{
            n.call(e, M);
        }, L = Wo(e), _ = ()=>{
            L = !0;
            let M = jo(e) || Co(e);
            if (M && typeof M != "boolean") return n.call(e, M);
            if (o && !d && nt(e, !0) && !Sn(e, !1)) return n.call(e, new pn);
            if (l && !s && !An(e, !1)) return n.call(e, new pn);
            n.call(e);
        }, p = ()=>{
            e.req.on("finish", b);
        };
        Fo(e) ? (e.on("complete", b), c || e.on("abort", _), e.req ? p() : e.on("request", p)) : l && !u && (e.on("end", a), e.on("close", a)), !c && typeof e.aborted == "boolean" && e.on("aborted", _), e.on("end", h), e.on("finish", b), t.error !== !1 && e.on("error", D), e.on("close", _), L ? oe.nextTick(_) : u != null && u.errorEmitted || f != null && f.errorEmitted ? c || oe.nextTick(_) : (!o && (!c || gn(e)) && (s || En(e) === !1) || !l && (!c || En(e)) && (d || gn(e) === !1) || f && e.req && e.aborted) && oe.nextTick(_);
        let I = ()=>{
            n = Uo, e.removeListener("aborted", _), e.removeListener("complete", b), e.removeListener("abort", _), e.removeListener("request", p), e.req && e.req.removeListener("finish", b), e.removeListener("end", a), e.removeListener("close", a), e.removeListener("finish", b), e.removeListener("end", h), e.removeListener("error", D), e.removeListener("close", _);
        };
        if (t.signal && !L) {
            let M = ()=>{
                let F = n;
                I(), F.call(e, new Do(void 0, {
                    cause: t.signal.reason
                }));
            };
            if (t.signal.aborted) oe.nextTick(M);
            else {
                let F = n;
                n = yn((...re)=>{
                    t.signal.removeEventListener("abort", M), F.apply(e, re);
                }), t.signal.addEventListener("abort", M);
            }
        }
        return I;
    }
    function Bo(e, t) {
        return new ko((n, r)=>{
            mn(e, t, (i)=>{
                i ? r(i) : n();
            });
        });
    }
    rt.exports = mn;
    rt.exports.finished = Bo;
});
var xn = g((Zf, lt)=>{
    "use strict";
    var Nn = globalThis.AbortController, { codes: { ERR_INVALID_ARG_TYPE: pe , ERR_MISSING_ARGS: Go , ERR_OUT_OF_RANGE: Ho  } , AbortError: $  } = O(), { validateAbortSignal: le , validateInteger: Vo , validateObject: ae  } = _e(), Yo = m().Symbol("kWeak"), { finished: Ko  } = Y(), { ArrayPrototypePush: zo , MathFloor: Xo , Number: Jo , NumberIsNaN: Qo , Promise: Tn , PromiseReject: In , PromisePrototypeThen: Zo , Symbol: Dn  } = m(), De = Dn("kEmpty"), Mn = Dn("kEof");
    function Oe(e, t) {
        if (typeof e != "function") throw new pe("fn", [
            "Function",
            "AsyncFunction"
        ], e);
        t != null && ae(t, "options"), t?.signal != null && le(t.signal, "options.signal");
        let n = 1;
        return t?.concurrency != null && (n = Xo(t.concurrency)), Vo(n, "concurrency", 1), (async function*() {
            var i, o;
            let l = new Nn, u = this, f = [], a = l.signal, c = {
                signal: a
            }, s = ()=>l.abort();
            t != null && (i = t.signal) !== null && i !== void 0 && i.aborted && s(), t == null || (o = t.signal) === null || o === void 0 || o.addEventListener("abort", s);
            let b, d, h = !1;
            function D() {
                h = !0;
            }
            async function L() {
                try {
                    for await (let I of u){
                        var _;
                        if (h) return;
                        if (a.aborted) throw new $;
                        try {
                            I = e(I, c);
                        } catch (M) {
                            I = In(M);
                        }
                        I !== De && (typeof ((_ = I) === null || _ === void 0 ? void 0 : _.catch) == "function" && I.catch(D), f.push(I), b && (b(), b = null), !h && f.length && f.length >= n && await new Tn((M)=>{
                            d = M;
                        }));
                    }
                    f.push(Mn);
                } catch (I1) {
                    let M1 = In(I1);
                    Zo(M1, void 0, D), f.push(M1);
                } finally{
                    var p;
                    h = !0, b && (b(), b = null), t == null || (p = t.signal) === null || p === void 0 || p.removeEventListener("abort", s);
                }
            }
            L();
            try {
                for(;;){
                    for(; f.length > 0;){
                        let _ = await f[0];
                        if (_ === Mn) return;
                        if (a.aborted) throw new $;
                        _ !== De && (yield _), f.shift(), d && (d(), d = null);
                    }
                    await new Tn((_)=>{
                        b = _;
                    });
                }
            } finally{
                l.abort(), h = !0, d && (d(), d = null);
            }
        }).call(this);
    }
    function el(e = void 0) {
        return e != null && ae(e, "options"), e?.signal != null && le(e.signal, "options.signal"), (async function*() {
            let n = 0;
            for await (let i of this){
                var r;
                if (e != null && (r = e.signal) !== null && r !== void 0 && r.aborted) throw new $({
                    cause: e.signal.reason
                });
                yield [
                    n++,
                    i
                ];
            }
        }).call(this);
    }
    async function On(e, t = void 0) {
        for await (let n of ot.call(this, e, t))return !0;
        return !1;
    }
    async function tl(e, t = void 0) {
        if (typeof e != "function") throw new pe("fn", [
            "Function",
            "AsyncFunction"
        ], e);
        return !await On.call(this, async (...n)=>!await e(...n), t);
    }
    async function nl(e, t) {
        for await (let n of ot.call(this, e, t))return n;
    }
    async function rl(e, t) {
        if (typeof e != "function") throw new pe("fn", [
            "Function",
            "AsyncFunction"
        ], e);
        async function n(r, i) {
            return await e(r, i), De;
        }
        for await (let r of Oe.call(this, n, t));
    }
    function ot(e, t) {
        if (typeof e != "function") throw new pe("fn", [
            "Function",
            "AsyncFunction"
        ], e);
        async function n(r, i) {
            return await e(r, i) ? r : De;
        }
        return Oe.call(this, n, t);
    }
    var it = class extends Go {
        constructor(){
            super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
        }
    };
    async function il(e, t, n) {
        var r;
        if (typeof e != "function") throw new pe("reducer", [
            "Function",
            "AsyncFunction"
        ], e);
        n != null && ae(n, "options"), n?.signal != null && le(n.signal, "options.signal");
        let i = arguments.length > 1;
        if (n != null && (r = n.signal) !== null && r !== void 0 && r.aborted) {
            let a = new $(void 0, {
                cause: n.signal.reason
            });
            throw this.once("error", ()=>{}), await Ko(this.destroy(a)), a;
        }
        let o = new Nn, l = o.signal;
        if (n != null && n.signal) {
            let a1 = {
                once: !0,
                [Yo]: this
            };
            n.signal.addEventListener("abort", ()=>o.abort(), a1);
        }
        let u = !1;
        try {
            for await (let a2 of this){
                var f;
                if (u = !0, n != null && (f = n.signal) !== null && f !== void 0 && f.aborted) throw new $;
                i ? t = await e(t, a2, {
                    signal: l
                }) : (t = a2, i = !0);
            }
            if (!u && !i) throw new it;
        } finally{
            o.abort();
        }
        return t;
    }
    async function ol(e) {
        e != null && ae(e, "options"), e?.signal != null && le(e.signal, "options.signal");
        let t = [];
        for await (let r of this){
            var n;
            if (e != null && (n = e.signal) !== null && n !== void 0 && n.aborted) throw new $(void 0, {
                cause: e.signal.reason
            });
            zo(t, r);
        }
        return t;
    }
    function ll(e, t) {
        let n = Oe.call(this, e, t);
        return (async function*() {
            for await (let i of n)yield* i;
        }).call(this);
    }
    function qn(e) {
        if (e = Jo(e), Qo(e)) return 0;
        if (e < 0) throw new Ho("number", ">= 0", e);
        return e;
    }
    function al(e, t = void 0) {
        return t != null && ae(t, "options"), t?.signal != null && le(t.signal, "options.signal"), e = qn(e), (async function*() {
            var r;
            if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted) throw new $;
            for await (let o of this){
                var i;
                if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted) throw new $;
                e-- <= 0 && (yield o);
            }
        }).call(this);
    }
    function fl(e, t = void 0) {
        return t != null && ae(t, "options"), t?.signal != null && le(t.signal, "options.signal"), e = qn(e), (async function*() {
            var r;
            if (t != null && (r = t.signal) !== null && r !== void 0 && r.aborted) throw new $;
            for await (let o of this){
                var i;
                if (t != null && (i = t.signal) !== null && i !== void 0 && i.aborted) throw new $;
                if (e-- > 0) yield o;
                else return;
            }
        }).call(this);
    }
    lt.exports.streamReturningOperators = {
        asIndexedPairs: el,
        drop: al,
        filter: ot,
        flatMap: ll,
        map: Oe,
        take: fl
    };
    lt.exports.promiseReturningOperators = {
        every: tl,
        forEach: rl,
        reduce: il,
        toArray: ol,
        some: On,
        find: nl
    };
});
var Z = g((eu, vn)=>{
    "use strict";
    var K = __process$, { aggregateTwoErrors: ul , codes: { ERR_MULTIPLE_CALLBACK: sl  } , AbortError: dl  } = O(), { Symbol: kn  } = m(), { kDestroyed: cl , isDestroyed: hl , isFinished: bl , isServerRequest: _l  } = V(), Wn = kn("kDestroy"), at = kn("kConstruct");
    function Cn(e, t, n) {
        e && (e.stack, t && !t.errored && (t.errored = e), n && !n.errored && (n.errored = e));
    }
    function pl(e, t) {
        let n = this._readableState, r = this._writableState, i = r || n;
        return r && r.destroyed || n && n.destroyed ? (typeof t == "function" && t(), this) : (Cn(e, r, n), r && (r.destroyed = !0), n && (n.destroyed = !0), i.constructed ? Ln(this, e, t) : this.once(Wn, function(o) {
            Ln(this, ul(o, e), t);
        }), this);
    }
    function Ln(e, t, n) {
        let r = !1;
        function i(o) {
            if (r) return;
            r = !0;
            let l = e._readableState, u = e._writableState;
            Cn(o, u, l), u && (u.closed = !0), l && (l.closed = !0), typeof n == "function" && n(o), o ? K.nextTick(wl, e, o) : K.nextTick(jn, e);
        }
        try {
            e._destroy(t || null, i);
        } catch (o) {
            i(o);
        }
    }
    function wl(e, t) {
        ft(e, t), jn(e);
    }
    function jn(e) {
        let t = e._readableState, n = e._writableState;
        n && (n.closeEmitted = !0), t && (t.closeEmitted = !0), (n && n.emitClose || t && t.emitClose) && e.emit("close");
    }
    function ft(e, t) {
        let n = e._readableState, r = e._writableState;
        r && r.errorEmitted || n && n.errorEmitted || (r && (r.errorEmitted = !0), n && (n.errorEmitted = !0), e.emit("error", t));
    }
    function yl() {
        let e = this._readableState, t = this._writableState;
        e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = e.readable === !1, e.endEmitted = e.readable === !1), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = t.writable === !1, t.ending = t.writable === !1, t.finished = t.writable === !1);
    }
    function ut(e, t, n) {
        let r = e._readableState, i = e._writableState;
        if (i && i.destroyed || r && r.destroyed) return this;
        r && r.autoDestroy || i && i.autoDestroy ? e.destroy(t) : t && (t.stack, i && !i.errored && (i.errored = t), r && !r.errored && (r.errored = t), n ? K.nextTick(ft, e, t) : ft(e, t));
    }
    function gl(e, t) {
        if (typeof e._construct != "function") return;
        let n = e._readableState, r = e._writableState;
        n && (n.constructed = !1), r && (r.constructed = !1), e.once(at, t), !(e.listenerCount(at) > 1) && K.nextTick(Sl, e);
    }
    function Sl(e) {
        let t = !1;
        function n(r) {
            if (t) {
                ut(e, r ?? new sl);
                return;
            }
            t = !0;
            let i = e._readableState, o = e._writableState, l = o || i;
            i && (i.constructed = !0), o && (o.constructed = !0), l.destroyed ? e.emit(Wn, r) : r ? ut(e, r, !0) : K.nextTick(El, e);
        }
        try {
            e._construct(n);
        } catch (r) {
            n(r);
        }
    }
    function El(e) {
        e.emit(at);
    }
    function Pn(e) {
        return e && e.setHeader && typeof e.abort == "function";
    }
    function $n(e) {
        e.emit("close");
    }
    function Rl(e, t) {
        e.emit("error", t), K.nextTick($n, e);
    }
    function Al(e, t) {
        !e || hl(e) || (!t && !bl(e) && (t = new dl), _l(e) ? (e.socket = null, e.destroy(t)) : Pn(e) ? e.abort() : Pn(e.req) ? e.req.abort() : typeof e.destroy == "function" ? e.destroy(t) : typeof e.close == "function" ? e.close() : t ? K.nextTick(Rl, e, t) : K.nextTick($n, e), e.destroyed || (e[cl] = !0));
    }
    vn.exports = {
        construct: gl,
        destroyer: Al,
        destroy: pl,
        undestroy: yl,
        errorOrDestroy: ut
    };
});
var Le = g((tu, Un)=>{
    "use strict";
    var { ArrayIsArray: ml , ObjectSetPrototypeOf: Fn  } = m(), { EventEmitter: qe  } = EventEmitter;
    function xe(e) {
        qe.call(this, e);
    }
    Fn(xe.prototype, qe.prototype);
    Fn(xe, qe);
    xe.prototype.pipe = function(e, t) {
        let n = this;
        function r(c) {
            e.writable && e.write(c) === !1 && n.pause && n.pause();
        }
        n.on("data", r);
        function i() {
            n.readable && n.resume && n.resume();
        }
        e.on("drain", i), !e._isStdio && (!t || t.end !== !1) && (n.on("end", l), n.on("close", u));
        let o = !1;
        function l() {
            o || (o = !0, e.end());
        }
        function u() {
            o || (o = !0, typeof e.destroy == "function" && e.destroy());
        }
        function f(c) {
            a(), qe.listenerCount(this, "error") === 0 && this.emit("error", c);
        }
        st(n, "error", f), st(e, "error", f);
        function a() {
            n.removeListener("data", r), e.removeListener("drain", i), n.removeListener("end", l), n.removeListener("close", u), n.removeListener("error", f), e.removeListener("error", f), n.removeListener("end", a), n.removeListener("close", a), e.removeListener("close", a);
        }
        return n.on("end", a), n.on("close", a), e.on("close", a), e.emit("pipe", n), e;
    };
    function st(e, t, n) {
        if (typeof e.prependListener == "function") return e.prependListener(t, n);
        !e._events || !e._events[t] ? e.on(t, n) : ml(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [
            n,
            e._events[t]
        ];
    }
    Un.exports = {
        Stream: xe,
        prependListener: st
    };
});
var ke = g((nu, Pe)=>{
    "use strict";
    var { AbortError: Tl , codes: Il  } = O(), Ml = Y(), { ERR_INVALID_ARG_TYPE: Bn  } = Il, Nl = (e, t)=>{
        if (typeof e != "object" || !("aborted" in e)) throw new Bn(t, "AbortSignal", e);
    };
    function Dl(e) {
        return !!(e && typeof e.pipe == "function");
    }
    Pe.exports.addAbortSignal = function(t, n) {
        if (Nl(t, "signal"), !Dl(n)) throw new Bn("stream", "stream.Stream", n);
        return Pe.exports.addAbortSignalNoValidate(t, n);
    };
    Pe.exports.addAbortSignalNoValidate = function(e, t) {
        if (typeof e != "object" || !("aborted" in e)) return t;
        let n = ()=>{
            t.destroy(new Tl(void 0, {
                cause: e.reason
            }));
        };
        return e.aborted ? n() : (e.addEventListener("abort", n), Ml(t, ()=>e.removeEventListener("abort", n))), t;
    };
});
var Vn = g((iu, Hn)=>{
    "use strict";
    var { StringPrototypeSlice: Gn , SymbolIterator: Ol , TypedArrayPrototypeSet: We , Uint8Array: ql  } = m(), { Buffer: dt  } = __default4, { inspect: xl  } = j();
    Hn.exports = class {
        constructor(){
            this.head = null, this.tail = null, this.length = 0;
        }
        push(t) {
            let n = {
                data: t,
                next: null
            };
            this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
        }
        unshift(t) {
            let n = {
                data: t,
                next: this.head
            };
            this.length === 0 && (this.tail = n), this.head = n, ++this.length;
        }
        shift() {
            if (this.length === 0) return;
            let t = this.head.data;
            return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
        }
        clear() {
            this.head = this.tail = null, this.length = 0;
        }
        join(t) {
            if (this.length === 0) return "";
            let n = this.head, r = "" + n.data;
            for(; (n = n.next) !== null;)r += t + n.data;
            return r;
        }
        concat(t) {
            if (this.length === 0) return dt.alloc(0);
            let n = dt.allocUnsafe(t >>> 0), r = this.head, i = 0;
            for(; r;)We(n, r.data, i), i += r.data.length, r = r.next;
            return n;
        }
        consume(t, n) {
            let r = this.head.data;
            if (t < r.length) {
                let i = r.slice(0, t);
                return this.head.data = r.slice(t), i;
            }
            return t === r.length ? this.shift() : n ? this._getString(t) : this._getBuffer(t);
        }
        first() {
            return this.head.data;
        }
        *[Ol]() {
            for(let t = this.head; t; t = t.next)yield t.data;
        }
        _getString(t) {
            let n = "", r = this.head, i = 0;
            do {
                let o = r.data;
                if (t > o.length) n += o, t -= o.length;
                else {
                    t === o.length ? (n += o, ++i, r.next ? this.head = r.next : this.head = this.tail = null) : (n += Gn(o, 0, t), this.head = r, r.data = Gn(o, t));
                    break;
                }
                ++i;
            }while ((r = r.next) !== null)
            return this.length -= i, n;
        }
        _getBuffer(t) {
            let n = dt.allocUnsafe(t), r = t, i = this.head, o = 0;
            do {
                let l = i.data;
                if (t > l.length) We(n, l, r - t), t -= l.length;
                else {
                    t === l.length ? (We(n, l, r - t), ++o, i.next ? this.head = i.next : this.head = this.tail = null) : (We(n, new ql(l.buffer, l.byteOffset, t), r - t), this.head = i, i.data = l.slice(t));
                    break;
                }
                ++o;
            }while ((i = i.next) !== null)
            return this.length -= o, n;
        }
        [Symbol.for("nodejs.util.inspect.custom")](t, n) {
            return xl(this, {
                ...n,
                depth: 0,
                customInspect: !1
            });
        }
    };
});
var Ce = g((ou, Kn)=>{
    "use strict";
    var { MathFloor: Ll , NumberIsInteger: Pl  } = m(), { ERR_INVALID_ARG_VALUE: kl  } = O().codes;
    function Wl(e, t, n) {
        return e.highWaterMark != null ? e.highWaterMark : t ? e[n] : null;
    }
    function Yn(e) {
        return e ? 16 : 16 * 1024;
    }
    function Cl(e, t, n, r) {
        let i = Wl(t, r, n);
        if (i != null) {
            if (!Pl(i) || i < 0) {
                let o = r ? `options.${n}` : "options.highWaterMark";
                throw new kl(o, i);
            }
            return Ll(i);
        }
        return Yn(e.objectMode);
    }
    Kn.exports = {
        getHighWaterMark: Cl,
        getDefaultHighWaterMark: Yn
    };
});
var ct = g((lu, Qn)=>{
    "use strict";
    var zn = __process$, { PromisePrototypeThen: jl , SymbolAsyncIterator: Xn , SymbolIterator: Jn  } = m(), { Buffer: $l  } = __default4, { ERR_INVALID_ARG_TYPE: vl , ERR_STREAM_NULL_VALUES: Fl  } = O().codes;
    function Ul(e, t, n) {
        let r;
        if (typeof t == "string" || t instanceof $l) return new e({
            objectMode: !0,
            ...n,
            read () {
                this.push(t), this.push(null);
            }
        });
        let i;
        if (t && t[Xn]) i = !0, r = t[Xn]();
        else if (t && t[Jn]) i = !1, r = t[Jn]();
        else throw new vl("iterable", [
            "Iterable"
        ], t);
        let o = new e({
            objectMode: !0,
            highWaterMark: 1,
            ...n
        }), l = !1;
        o._read = function() {
            l || (l = !0, f());
        }, o._destroy = function(a, c) {
            jl(u(a), ()=>zn.nextTick(c, a), (s)=>zn.nextTick(c, s || a));
        };
        async function u(a) {
            let c = a != null, s = typeof r.throw == "function";
            if (c && s) {
                let { value: b , done: d  } = await r.throw(a);
                if (await b, d) return;
            }
            if (typeof r.return == "function") {
                let { value: b1  } = await r.return();
                await b1;
            }
        }
        async function f() {
            for(;;){
                try {
                    let { value: a , done: c  } = i ? await r.next() : r.next();
                    if (c) o.push(null);
                    else {
                        let s = a && typeof a.then == "function" ? await a : a;
                        if (s === null) throw l = !1, new Fl;
                        if (o.push(s)) continue;
                        l = !1;
                    }
                } catch (a1) {
                    o.destroy(a1);
                }
                break;
            }
        }
        return o;
    }
    Qn.exports = Ul;
});
var we = g((au, dr)=>{
    var W = __process$, { ArrayPrototypeIndexOf: Bl , NumberIsInteger: Gl , NumberIsNaN: Hl , NumberParseInt: Vl , ObjectDefineProperties: tr , ObjectKeys: Yl , ObjectSetPrototypeOf: nr , Promise: Kl , SafeSet: zl , SymbolAsyncIterator: Xl , Symbol: Jl  } = m();
    dr.exports = w;
    w.ReadableState = yt;
    var { EventEmitter: Ql  } = EventEmitter, { Stream: z , prependListener: Zl  } = Le(), { Buffer: ht  } = __default4, { addAbortSignal: ea  } = ke(), ta = Y(), y = j().debuglog("stream", (e)=>{
        y = e;
    }), na = Vn(), ue = Z(), { getHighWaterMark: ra , getDefaultHighWaterMark: ia  } = Ce(), { aggregateTwoErrors: Zn , codes: { ERR_INVALID_ARG_TYPE: oa , ERR_METHOD_NOT_IMPLEMENTED: la , ERR_OUT_OF_RANGE: aa , ERR_STREAM_PUSH_AFTER_EOF: fa , ERR_STREAM_UNSHIFT_AFTER_END_EVENT: ua  }  } = O(), { validateObject: sa  } = _e(), ee = Jl("kPaused"), { StringDecoder: rr  } = __default5, da = ct();
    nr(w.prototype, z.prototype);
    nr(w, z);
    var bt = ()=>{}, { errorOrDestroy: fe  } = ue;
    function yt(e, t, n) {
        typeof n != "boolean" && (n = t instanceof v()), this.objectMode = !!(e && e.objectMode), n && (this.objectMode = this.objectMode || !!(e && e.readableObjectMode)), this.highWaterMark = e ? ra(this, e, "readableHighWaterMark", n) : ia(!1), this.buffer = new na, this.length = 0, this.pipes = [], this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.constructed = !0, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this[ee] = null, this.errorEmitted = !1, this.emitClose = !e || e.emitClose !== !1, this.autoDestroy = !e || e.autoDestroy !== !1, this.destroyed = !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = !1, this.readingMore = !1, this.dataEmitted = !1, this.decoder = null, this.encoding = null, e && e.encoding && (this.decoder = new rr(e.encoding), this.encoding = e.encoding);
    }
    function w(e) {
        if (!(this instanceof w)) return new w(e);
        let t = this instanceof v();
        this._readableState = new yt(e, this, t), e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.construct == "function" && (this._construct = e.construct), e.signal && !t && ea(e.signal, this)), z.call(this, e), ue.construct(this, ()=>{
            this._readableState.needReadable && je(this, this._readableState);
        });
    }
    w.prototype.destroy = ue.destroy;
    w.prototype._undestroy = ue.undestroy;
    w.prototype._destroy = function(e, t) {
        t(e);
    };
    w.prototype[Ql.captureRejectionSymbol] = function(e) {
        this.destroy(e);
    };
    w.prototype.push = function(e, t) {
        return ir(this, e, t, !1);
    };
    w.prototype.unshift = function(e, t) {
        return ir(this, e, t, !0);
    };
    function ir(e, t, n, r) {
        y("readableAddChunk", t);
        let i = e._readableState, o;
        if (i.objectMode || (typeof t == "string" ? (n = n || i.defaultEncoding, i.encoding !== n && (r && i.encoding ? t = ht.from(t, n).toString(i.encoding) : (t = ht.from(t, n), n = ""))) : t instanceof ht ? n = "" : z._isUint8Array(t) ? (t = z._uint8ArrayToBuffer(t), n = "") : t != null && (o = new oa("chunk", [
            "string",
            "Buffer",
            "Uint8Array"
        ], t))), o) fe(e, o);
        else if (t === null) i.reading = !1, ba(e, i);
        else if (i.objectMode || t && t.length > 0) if (r) if (i.endEmitted) fe(e, new ua);
        else {
            if (i.destroyed || i.errored) return !1;
            _t(e, i, t, !0);
        }
        else if (i.ended) fe(e, new fa);
        else {
            if (i.destroyed || i.errored) return !1;
            i.reading = !1, i.decoder && !n ? (t = i.decoder.write(t), i.objectMode || t.length !== 0 ? _t(e, i, t, !1) : je(e, i)) : _t(e, i, t, !1);
        }
        else r || (i.reading = !1, je(e, i));
        return !i.ended && (i.length < i.highWaterMark || i.length === 0);
    }
    function _t(e, t, n, r) {
        t.flowing && t.length === 0 && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null, t.dataEmitted = !0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && $e(e)), je(e, t);
    }
    w.prototype.isPaused = function() {
        let e = this._readableState;
        return e[ee] === !0 || e.flowing === !1;
    };
    w.prototype.setEncoding = function(e) {
        let t = new rr(e);
        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
        let n = this._readableState.buffer, r = "";
        for (let i of n)r += t.write(i);
        return n.clear(), r !== "" && n.push(r), this._readableState.length = r.length, this;
    };
    var ca = 1073741824;
    function ha(e) {
        if (e > ca) throw new aa("size", "<= 1GiB", e);
        return e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++, e;
    }
    function er(e, t) {
        return e <= 0 || t.length === 0 && t.ended ? 0 : t.objectMode ? 1 : Hl(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0;
    }
    w.prototype.read = function(e) {
        y("read", e), e === void 0 ? e = NaN : Gl(e) || (e = Vl(e, 10));
        let t = this._readableState, n = e;
        if (e > t.highWaterMark && (t.highWaterMark = ha(e)), e !== 0 && (t.emittedReadable = !1), e === 0 && t.needReadable && ((t.highWaterMark !== 0 ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return y("read: emitReadable", t.length, t.ended), t.length === 0 && t.ended ? pt(this) : $e(this), null;
        if (e = er(e, t), e === 0 && t.ended) return t.length === 0 && pt(this), null;
        let r = t.needReadable;
        if (y("need readable", r), (t.length === 0 || t.length - e < t.highWaterMark) && (r = !0, y("length less than watermark", r)), t.ended || t.reading || t.destroyed || t.errored || !t.constructed) r = !1, y("reading, ended or constructing", r);
        else if (r) {
            y("do read"), t.reading = !0, t.sync = !0, t.length === 0 && (t.needReadable = !0);
            try {
                this._read(t.highWaterMark);
            } catch (o) {
                fe(this, o);
            }
            t.sync = !1, t.reading || (e = er(n, t));
        }
        let i;
        return e > 0 ? i = ur(e, t) : i = null, i === null ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null), t.length === 0 && (t.ended || (t.needReadable = !0), n !== e && t.ended && pt(this)), i !== null && !t.errorEmitted && !t.closeEmitted && (t.dataEmitted = !0, this.emit("data", i)), i;
    };
    function ba(e, t) {
        if (y("onEofChunk"), !t.ended) {
            if (t.decoder) {
                let n = t.decoder.end();
                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
            }
            t.ended = !0, t.sync ? $e(e) : (t.needReadable = !1, t.emittedReadable = !0, or(e));
        }
    }
    function $e(e) {
        let t = e._readableState;
        y("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (y("emitReadable", t.flowing), t.emittedReadable = !0, W.nextTick(or, e));
    }
    function or(e) {
        let t = e._readableState;
        y("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && !t.errored && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, ar(e);
    }
    function je(e, t) {
        !t.readingMore && t.constructed && (t.readingMore = !0, W.nextTick(_a, e, t));
    }
    function _a(e, t) {
        for(; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && t.length === 0);){
            let n = t.length;
            if (y("maybeReadMore read 0"), e.read(0), n === t.length) break;
        }
        t.readingMore = !1;
    }
    w.prototype._read = function(e) {
        throw new la("_read()");
    };
    w.prototype.pipe = function(e, t) {
        let n = this, r = this._readableState;
        r.pipes.length === 1 && (r.multiAwaitDrain || (r.multiAwaitDrain = !0, r.awaitDrainWriters = new zl(r.awaitDrainWriters ? [
            r.awaitDrainWriters
        ] : []))), r.pipes.push(e), y("pipe count=%d opts=%j", r.pipes.length, t);
        let o = (!t || t.end !== !1) && e !== W.stdout && e !== W.stderr ? u : L;
        r.endEmitted ? W.nextTick(o) : n.once("end", o), e.on("unpipe", l);
        function l(_, p) {
            y("onunpipe"), _ === n && p && p.hasUnpiped === !1 && (p.hasUnpiped = !0, c());
        }
        function u() {
            y("onend"), e.end();
        }
        let f, a = !1;
        function c() {
            y("cleanup"), e.removeListener("close", h), e.removeListener("finish", D), f && e.removeListener("drain", f), e.removeListener("error", d), e.removeListener("unpipe", l), n.removeListener("end", u), n.removeListener("end", L), n.removeListener("data", b), a = !0, f && r.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && f();
        }
        function s() {
            a || (r.pipes.length === 1 && r.pipes[0] === e ? (y("false write response, pause", 0), r.awaitDrainWriters = e, r.multiAwaitDrain = !1) : r.pipes.length > 1 && r.pipes.includes(e) && (y("false write response, pause", r.awaitDrainWriters.size), r.awaitDrainWriters.add(e)), n.pause()), f || (f = pa(n, e), e.on("drain", f));
        }
        n.on("data", b);
        function b(_) {
            y("ondata");
            let p = e.write(_);
            y("dest.write", p), p === !1 && s();
        }
        function d(_) {
            if (y("onerror", _), L(), e.removeListener("error", d), e.listenerCount("error") === 0) {
                let p = e._writableState || e._readableState;
                p && !p.errorEmitted ? fe(e, _) : e.emit("error", _);
            }
        }
        Zl(e, "error", d);
        function h() {
            e.removeListener("finish", D), L();
        }
        e.once("close", h);
        function D() {
            y("onfinish"), e.removeListener("close", h), L();
        }
        e.once("finish", D);
        function L() {
            y("unpipe"), n.unpipe(e);
        }
        return e.emit("pipe", n), e.writableNeedDrain === !0 ? r.flowing && s() : r.flowing || (y("pipe resume"), n.resume()), e;
    };
    function pa(e, t) {
        return function() {
            let r = e._readableState;
            r.awaitDrainWriters === t ? (y("pipeOnDrain", 1), r.awaitDrainWriters = null) : r.multiAwaitDrain && (y("pipeOnDrain", r.awaitDrainWriters.size), r.awaitDrainWriters.delete(t)), (!r.awaitDrainWriters || r.awaitDrainWriters.size === 0) && e.listenerCount("data") && e.resume();
        };
    }
    w.prototype.unpipe = function(e) {
        let t = this._readableState, n = {
            hasUnpiped: !1
        };
        if (t.pipes.length === 0) return this;
        if (!e) {
            let i = t.pipes;
            t.pipes = [], this.pause();
            for(let o = 0; o < i.length; o++)i[o].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this;
        }
        let r = Bl(t.pipes, e);
        return r === -1 ? this : (t.pipes.splice(r, 1), t.pipes.length === 0 && this.pause(), e.emit("unpipe", this, n), this);
    };
    w.prototype.on = function(e, t) {
        let n = z.prototype.on.call(this, e, t), r = this._readableState;
        return e === "data" ? (r.readableListening = this.listenerCount("readable") > 0, r.flowing !== !1 && this.resume()) : e === "readable" && !r.endEmitted && !r.readableListening && (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, y("on readable", r.length, r.reading), r.length ? $e(this) : r.reading || W.nextTick(wa, this)), n;
    };
    w.prototype.addListener = w.prototype.on;
    w.prototype.removeListener = function(e, t) {
        let n = z.prototype.removeListener.call(this, e, t);
        return e === "readable" && W.nextTick(lr, this), n;
    };
    w.prototype.off = w.prototype.removeListener;
    w.prototype.removeAllListeners = function(e) {
        let t = z.prototype.removeAllListeners.apply(this, arguments);
        return (e === "readable" || e === void 0) && W.nextTick(lr, this), t;
    };
    function lr(e) {
        let t = e._readableState;
        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && t[ee] === !1 ? t.flowing = !0 : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null);
    }
    function wa(e) {
        y("readable nexttick read 0"), e.read(0);
    }
    w.prototype.resume = function() {
        let e = this._readableState;
        return e.flowing || (y("resume"), e.flowing = !e.readableListening, ya(this, e)), e[ee] = !1, this;
    };
    function ya(e, t) {
        t.resumeScheduled || (t.resumeScheduled = !0, W.nextTick(ga, e, t));
    }
    function ga(e, t) {
        y("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), ar(e), t.flowing && !t.reading && e.read(0);
    }
    w.prototype.pause = function() {
        return y("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (y("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[ee] = !0, this;
    };
    function ar(e) {
        let t = e._readableState;
        for(y("flow", t.flowing); t.flowing && e.read() !== null;);
    }
    w.prototype.wrap = function(e) {
        let t = !1;
        e.on("data", (r)=>{
            !this.push(r) && e.pause && (t = !0, e.pause());
        }), e.on("end", ()=>{
            this.push(null);
        }), e.on("error", (r)=>{
            fe(this, r);
        }), e.on("close", ()=>{
            this.destroy();
        }), e.on("destroy", ()=>{
            this.destroy();
        }), this._read = ()=>{
            t && e.resume && (t = !1, e.resume());
        };
        let n = Yl(e);
        for(let r = 1; r < n.length; r++){
            let i = n[r];
            this[i] === void 0 && typeof e[i] == "function" && (this[i] = e[i].bind(e));
        }
        return this;
    };
    w.prototype[Xl] = function() {
        return fr(this);
    };
    w.prototype.iterator = function(e) {
        return e !== void 0 && sa(e, "options"), fr(this, e);
    };
    function fr(e, t) {
        typeof e.read != "function" && (e = w.wrap(e, {
            objectMode: !0
        }));
        let n = Sa(e, t);
        return n.stream = e, n;
    }
    async function* Sa(e, t) {
        let n = bt;
        function r(l) {
            this === e ? (n(), n = bt) : n = l;
        }
        e.on("readable", r);
        let i, o = ta(e, {
            writable: !1
        }, (l)=>{
            i = l ? Zn(i, l) : null, n(), n = bt;
        });
        try {
            for(;;){
                let l = e.destroyed ? null : e.read();
                if (l !== null) yield l;
                else {
                    if (i) throw i;
                    if (i === null) return;
                    await new Kl(r);
                }
            }
        } catch (l1) {
            throw i = Zn(i, l1), i;
        } finally{
            (i || t?.destroyOnReturn !== !1) && (i === void 0 || e._readableState.autoDestroy) ? ue.destroyer(e, null) : (e.off("readable", r), o());
        }
    }
    tr(w.prototype, {
        readable: {
            __proto__: null,
            get () {
                let e = this._readableState;
                return !!e && e.readable !== !1 && !e.destroyed && !e.errorEmitted && !e.endEmitted;
            },
            set (e) {
                this._readableState && (this._readableState.readable = !!e);
            }
        },
        readableDidRead: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState.dataEmitted;
            }
        },
        readableAborted: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
            }
        },
        readableHighWaterMark: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState.highWaterMark;
            }
        },
        readableBuffer: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState && this._readableState.buffer;
            }
        },
        readableFlowing: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return this._readableState.flowing;
            },
            set: function(e) {
                this._readableState && (this._readableState.flowing = e);
            }
        },
        readableLength: {
            __proto__: null,
            enumerable: !1,
            get () {
                return this._readableState.length;
            }
        },
        readableObjectMode: {
            __proto__: null,
            enumerable: !1,
            get () {
                return this._readableState ? this._readableState.objectMode : !1;
            }
        },
        readableEncoding: {
            __proto__: null,
            enumerable: !1,
            get () {
                return this._readableState ? this._readableState.encoding : null;
            }
        },
        errored: {
            __proto__: null,
            enumerable: !1,
            get () {
                return this._readableState ? this._readableState.errored : null;
            }
        },
        closed: {
            __proto__: null,
            get () {
                return this._readableState ? this._readableState.closed : !1;
            }
        },
        destroyed: {
            __proto__: null,
            enumerable: !1,
            get () {
                return this._readableState ? this._readableState.destroyed : !1;
            },
            set (e) {
                !this._readableState || (this._readableState.destroyed = e);
            }
        },
        readableEnded: {
            __proto__: null,
            enumerable: !1,
            get () {
                return this._readableState ? this._readableState.endEmitted : !1;
            }
        }
    });
    tr(yt.prototype, {
        pipesCount: {
            __proto__: null,
            get () {
                return this.pipes.length;
            }
        },
        paused: {
            __proto__: null,
            get () {
                return this[ee] !== !1;
            },
            set (e) {
                this[ee] = !!e;
            }
        }
    });
    w._fromList = ur;
    function ur(e, t) {
        if (t.length === 0) return null;
        let n;
        return t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (t.decoder ? n = t.buffer.join("") : t.buffer.length === 1 ? n = t.buffer.first() : n = t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n;
    }
    function pt(e) {
        let t = e._readableState;
        y("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, W.nextTick(Ea, t, e));
    }
    function Ea(e, t) {
        if (y("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && e.length === 0) {
            if (e.endEmitted = !0, t.emit("end"), t.writable && t.allowHalfOpen === !1) W.nextTick(Ra, t);
            else if (e.autoDestroy) {
                let n = t._writableState;
                (!n || n.autoDestroy && (n.finished || n.writable === !1)) && t.destroy();
            }
        }
    }
    function Ra(e) {
        e.writable && !e.writableEnded && !e.destroyed && e.end();
    }
    w.from = function(e, t) {
        return da(w, e, t);
    };
    var wt;
    function sr() {
        return wt === void 0 && (wt = {}), wt;
    }
    w.fromWeb = function(e, t) {
        return sr().newStreamReadableFromReadableStream(e, t);
    };
    w.toWeb = function(e, t) {
        return sr().newReadableStreamFromStreamReadable(e, t);
    };
    w.wrap = function(e, t) {
        var n, r;
        return new w({
            objectMode: (n = (r = e.readableObjectMode) !== null && r !== void 0 ? r : e.objectMode) !== null && n !== void 0 ? n : !0,
            ...t,
            destroy (i, o) {
                ue.destroyer(e, i), o(i);
            }
        }).wrap(e);
    };
});
var Tt = g((fu, Ar)=>{
    var te = __process$, { ArrayPrototypeSlice: br , Error: Aa , FunctionPrototypeSymbolHasInstance: _r , ObjectDefineProperty: pr , ObjectDefineProperties: ma , ObjectSetPrototypeOf: wr , StringPrototypeToLowerCase: Ta , Symbol: Ia , SymbolHasInstance: Ma  } = m();
    Ar.exports = S;
    S.WritableState = Se;
    var { EventEmitter: Na  } = EventEmitter, ye = Le().Stream, { Buffer: ve  } = __default4, Be = Z(), { addAbortSignal: Da  } = ke(), { getHighWaterMark: Oa , getDefaultHighWaterMark: qa  } = Ce(), { ERR_INVALID_ARG_TYPE: xa , ERR_METHOD_NOT_IMPLEMENTED: La , ERR_MULTIPLE_CALLBACK: yr , ERR_STREAM_CANNOT_PIPE: Pa , ERR_STREAM_DESTROYED: ge , ERR_STREAM_ALREADY_FINISHED: ka , ERR_STREAM_NULL_VALUES: Wa , ERR_STREAM_WRITE_AFTER_END: Ca , ERR_UNKNOWN_ENCODING: gr  } = O().codes, { errorOrDestroy: se  } = Be;
    wr(S.prototype, ye.prototype);
    wr(S, ye);
    function Et() {}
    var de = Ia("kOnFinished");
    function Se(e, t, n) {
        typeof n != "boolean" && (n = t instanceof v()), this.objectMode = !!(e && e.objectMode), n && (this.objectMode = this.objectMode || !!(e && e.writableObjectMode)), this.highWaterMark = e ? Oa(this, e, "writableHighWaterMark", n) : qa(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        let r = !!(e && e.decodeStrings === !1);
        this.decodeStrings = !r, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = $a.bind(void 0, t), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, Ue(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !e || e.emitClose !== !1, this.autoDestroy = !e || e.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[de] = [];
    }
    function Ue(e) {
        e.buffered = [], e.bufferedIndex = 0, e.allBuffers = !0, e.allNoop = !0;
    }
    Se.prototype.getBuffer = function() {
        return br(this.buffered, this.bufferedIndex);
    };
    pr(Se.prototype, "bufferedRequestCount", {
        __proto__: null,
        get () {
            return this.buffered.length - this.bufferedIndex;
        }
    });
    function S(e) {
        let t = this instanceof v();
        if (!t && !_r(S, this)) return new S(e);
        this._writableState = new Se(e, this, t), e && (typeof e.write == "function" && (this._write = e.write), typeof e.writev == "function" && (this._writev = e.writev), typeof e.destroy == "function" && (this._destroy = e.destroy), typeof e.final == "function" && (this._final = e.final), typeof e.construct == "function" && (this._construct = e.construct), e.signal && Da(e.signal, this)), ye.call(this, e), Be.construct(this, ()=>{
            let n = this._writableState;
            n.writing || At(this, n), mt(this, n);
        });
    }
    pr(S, Ma, {
        __proto__: null,
        value: function(e) {
            return _r(this, e) ? !0 : this !== S ? !1 : e && e._writableState instanceof Se;
        }
    });
    S.prototype.pipe = function() {
        se(this, new Pa);
    };
    function Sr(e, t, n, r) {
        let i = e._writableState;
        if (typeof n == "function") r = n, n = i.defaultEncoding;
        else {
            if (!n) n = i.defaultEncoding;
            else if (n !== "buffer" && !ve.isEncoding(n)) throw new gr(n);
            typeof r != "function" && (r = Et);
        }
        if (t === null) throw new Wa;
        if (!i.objectMode) if (typeof t == "string") i.decodeStrings !== !1 && (t = ve.from(t, n), n = "buffer");
        else if (t instanceof ve) n = "buffer";
        else if (ye._isUint8Array(t)) t = ye._uint8ArrayToBuffer(t), n = "buffer";
        else throw new xa("chunk", [
            "string",
            "Buffer",
            "Uint8Array"
        ], t);
        let o;
        return i.ending ? o = new Ca : i.destroyed && (o = new ge("write")), o ? (te.nextTick(r, o), se(e, o, !0), o) : (i.pendingcb++, ja(e, i, t, n, r));
    }
    S.prototype.write = function(e, t, n) {
        return Sr(this, e, t, n) === !0;
    };
    S.prototype.cork = function() {
        this._writableState.corked++;
    };
    S.prototype.uncork = function() {
        let e = this._writableState;
        e.corked && (e.corked--, e.writing || At(this, e));
    };
    S.prototype.setDefaultEncoding = function(t) {
        if (typeof t == "string" && (t = Ta(t)), !ve.isEncoding(t)) throw new gr(t);
        return this._writableState.defaultEncoding = t, this;
    };
    function ja(e, t, n, r, i) {
        let o = t.objectMode ? 1 : n.length;
        t.length += o;
        let l = t.length < t.highWaterMark;
        return l || (t.needDrain = !0), t.writing || t.corked || t.errored || !t.constructed ? (t.buffered.push({
            chunk: n,
            encoding: r,
            callback: i
        }), t.allBuffers && r !== "buffer" && (t.allBuffers = !1), t.allNoop && i !== Et && (t.allNoop = !1)) : (t.writelen = o, t.writecb = i, t.writing = !0, t.sync = !0, e._write(n, r, t.onwrite), t.sync = !1), l && !t.errored && !t.destroyed;
    }
    function cr(e, t, n, r, i, o, l) {
        t.writelen = r, t.writecb = l, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new ge("write")) : n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1;
    }
    function hr(e, t, n, r) {
        --t.pendingcb, r(n), Rt(t), se(e, n);
    }
    function $a(e, t) {
        let n = e._writableState, r = n.sync, i = n.writecb;
        if (typeof i != "function") {
            se(e, new yr);
            return;
        }
        n.writing = !1, n.writecb = null, n.length -= n.writelen, n.writelen = 0, t ? (t.stack, n.errored || (n.errored = t), e._readableState && !e._readableState.errored && (e._readableState.errored = t), r ? te.nextTick(hr, e, n, t, i) : hr(e, n, t, i)) : (n.buffered.length > n.bufferedIndex && At(e, n), r ? n.afterWriteTickInfo !== null && n.afterWriteTickInfo.cb === i ? n.afterWriteTickInfo.count++ : (n.afterWriteTickInfo = {
            count: 1,
            cb: i,
            stream: e,
            state: n
        }, te.nextTick(va, n.afterWriteTickInfo)) : Er(e, n, 1, i));
    }
    function va({ stream: e , state: t , count: n , cb: r  }) {
        return t.afterWriteTickInfo = null, Er(e, t, n, r);
    }
    function Er(e, t, n, r) {
        for(!t.ending && !e.destroyed && t.length === 0 && t.needDrain && (t.needDrain = !1, e.emit("drain")); n-- > 0;)t.pendingcb--, r();
        t.destroyed && Rt(t), mt(e, t);
    }
    function Rt(e) {
        if (e.writing) return;
        for(let i = e.bufferedIndex; i < e.buffered.length; ++i){
            var t;
            let { chunk: o , callback: l  } = e.buffered[i], u = e.objectMode ? 1 : o.length;
            e.length -= u, l((t = e.errored) !== null && t !== void 0 ? t : new ge("write"));
        }
        let n = e[de].splice(0);
        for(let i1 = 0; i1 < n.length; i1++){
            var r;
            n[i1]((r = e.errored) !== null && r !== void 0 ? r : new ge("end"));
        }
        Ue(e);
    }
    function At(e, t) {
        if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed) return;
        let { buffered: n , bufferedIndex: r , objectMode: i  } = t, o = n.length - r;
        if (!o) return;
        let l = r;
        if (t.bufferProcessing = !0, o > 1 && e._writev) {
            t.pendingcb -= o - 1;
            let u = t.allNoop ? Et : (a)=>{
                for(let c = l; c < n.length; ++c)n[c].callback(a);
            }, f = t.allNoop && l === 0 ? n : br(n, l);
            f.allBuffers = t.allBuffers, cr(e, t, !0, t.length, f, "", u), Ue(t);
        } else {
            do {
                let { chunk: u1 , encoding: f1 , callback: a  } = n[l];
                n[l++] = null;
                let c = i ? 1 : u1.length;
                cr(e, t, !1, c, u1, f1, a);
            }while (l < n.length && !t.writing)
            l === n.length ? Ue(t) : l > 256 ? (n.splice(0, l), t.bufferedIndex = 0) : t.bufferedIndex = l;
        }
        t.bufferProcessing = !1;
    }
    S.prototype._write = function(e, t, n) {
        if (this._writev) this._writev([
            {
                chunk: e,
                encoding: t
            }
        ], n);
        else throw new La("_write()");
    };
    S.prototype._writev = null;
    S.prototype.end = function(e, t, n) {
        let r = this._writableState;
        typeof e == "function" ? (n = e, e = null, t = null) : typeof t == "function" && (n = t, t = null);
        let i;
        if (e != null) {
            let o = Sr(this, e, t);
            o instanceof Aa && (i = o);
        }
        return r.corked && (r.corked = 1, this.uncork()), i || (!r.errored && !r.ending ? (r.ending = !0, mt(this, r, !0), r.ended = !0) : r.finished ? i = new ka("end") : r.destroyed && (i = new ge("end"))), typeof n == "function" && (i || r.finished ? te.nextTick(n, i) : r[de].push(n)), this;
    };
    function Fe(e) {
        return e.ending && !e.destroyed && e.constructed && e.length === 0 && !e.errored && e.buffered.length === 0 && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted;
    }
    function Fa(e, t) {
        let n = !1;
        function r(i) {
            if (n) {
                se(e, i ?? yr());
                return;
            }
            if (n = !0, t.pendingcb--, i) {
                let o = t[de].splice(0);
                for(let l = 0; l < o.length; l++)o[l](i);
                se(e, i, t.sync);
            } else Fe(t) && (t.prefinished = !0, e.emit("prefinish"), t.pendingcb++, te.nextTick(St, e, t));
        }
        t.sync = !0, t.pendingcb++;
        try {
            e._final(r);
        } catch (i) {
            r(i);
        }
        t.sync = !1;
    }
    function Ua(e, t) {
        !t.prefinished && !t.finalCalled && (typeof e._final == "function" && !t.destroyed ? (t.finalCalled = !0, Fa(e, t)) : (t.prefinished = !0, e.emit("prefinish")));
    }
    function mt(e, t, n) {
        Fe(t) && (Ua(e, t), t.pendingcb === 0 && (n ? (t.pendingcb++, te.nextTick((r, i)=>{
            Fe(i) ? St(r, i) : i.pendingcb--;
        }, e, t)) : Fe(t) && (t.pendingcb++, St(e, t))));
    }
    function St(e, t) {
        t.pendingcb--, t.finished = !0;
        let n = t[de].splice(0);
        for(let r = 0; r < n.length; r++)n[r]();
        if (e.emit("finish"), t.autoDestroy) {
            let r1 = e._readableState;
            (!r1 || r1.autoDestroy && (r1.endEmitted || r1.readable === !1)) && e.destroy();
        }
    }
    ma(S.prototype, {
        closed: {
            __proto__: null,
            get () {
                return this._writableState ? this._writableState.closed : !1;
            }
        },
        destroyed: {
            __proto__: null,
            get () {
                return this._writableState ? this._writableState.destroyed : !1;
            },
            set (e) {
                this._writableState && (this._writableState.destroyed = e);
            }
        },
        writable: {
            __proto__: null,
            get () {
                let e = this._writableState;
                return !!e && e.writable !== !1 && !e.destroyed && !e.errored && !e.ending && !e.ended;
            },
            set (e) {
                this._writableState && (this._writableState.writable = !!e);
            }
        },
        writableFinished: {
            __proto__: null,
            get () {
                return this._writableState ? this._writableState.finished : !1;
            }
        },
        writableObjectMode: {
            __proto__: null,
            get () {
                return this._writableState ? this._writableState.objectMode : !1;
            }
        },
        writableBuffer: {
            __proto__: null,
            get () {
                return this._writableState && this._writableState.getBuffer();
            }
        },
        writableEnded: {
            __proto__: null,
            get () {
                return this._writableState ? this._writableState.ending : !1;
            }
        },
        writableNeedDrain: {
            __proto__: null,
            get () {
                let e = this._writableState;
                return e ? !e.destroyed && !e.ending && e.needDrain : !1;
            }
        },
        writableHighWaterMark: {
            __proto__: null,
            get () {
                return this._writableState && this._writableState.highWaterMark;
            }
        },
        writableCorked: {
            __proto__: null,
            get () {
                return this._writableState ? this._writableState.corked : 0;
            }
        },
        writableLength: {
            __proto__: null,
            get () {
                return this._writableState && this._writableState.length;
            }
        },
        errored: {
            __proto__: null,
            enumerable: !1,
            get () {
                return this._writableState ? this._writableState.errored : null;
            }
        },
        writableAborted: {
            __proto__: null,
            enumerable: !1,
            get: function() {
                return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
            }
        }
    });
    var Ba = Be.destroy;
    S.prototype.destroy = function(e, t) {
        let n = this._writableState;
        return !n.destroyed && (n.bufferedIndex < n.buffered.length || n[de].length) && te.nextTick(Rt, n), Ba.call(this, e, t), this;
    };
    S.prototype._undestroy = Be.undestroy;
    S.prototype._destroy = function(e, t) {
        t(e);
    };
    S.prototype[Na.captureRejectionSymbol] = function(e) {
        this.destroy(e);
    };
    var gt;
    function Rr() {
        return gt === void 0 && (gt = {}), gt;
    }
    S.fromWeb = function(e, t) {
        return Rr().newStreamWritableFromWritableStream(e, t);
    };
    S.toWeb = function(e) {
        return Rr().newWritableStreamFromStreamWritable(e);
    };
});
var kr = g((uu, Pr)=>{
    var It = __process$, Ga = __default4, { isReadable: Ha , isWritable: Va , isIterable: mr , isNodeStream: Ya , isReadableNodeStream: Tr , isWritableNodeStream: Ir , isDuplexNodeStream: Ka  } = V(), Mr = Y(), { AbortError: Lr , codes: { ERR_INVALID_ARG_TYPE: za , ERR_INVALID_RETURN_VALUE: Nr  }  } = O(), { destroyer: ce  } = Z(), Xa = v(), Ja = we(), { createDeferredPromise: Dr  } = j(), Or = ct(), qr = globalThis.Blob || Ga.Blob, Qa = typeof qr < "u" ? function(t) {
        return t instanceof qr;
    } : function(t) {
        return !1;
    }, Za = globalThis.AbortController, { FunctionPrototypeCall: xr  } = m(), ne = class extends Xa {
        constructor(t){
            super(t), t?.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), t?.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
        }
    };
    Pr.exports = function e(t, n) {
        if (Ka(t)) return t;
        if (Tr(t)) return Ge({
            readable: t
        });
        if (Ir(t)) return Ge({
            writable: t
        });
        if (Ya(t)) return Ge({
            writable: !1,
            readable: !1
        });
        if (typeof t == "function") {
            let { value: i , write: o , final: l , destroy: u  } = ef(t);
            if (mr(i)) return Or(ne, i, {
                objectMode: !0,
                write: o,
                final: l,
                destroy: u
            });
            let f = i?.then;
            if (typeof f == "function") {
                let a, c = xr(f, i, (s)=>{
                    if (s != null) throw new Nr("nully", "body", s);
                }, (s)=>{
                    ce(a, s);
                });
                return a = new ne({
                    objectMode: !0,
                    readable: !1,
                    write: o,
                    final (s) {
                        l(async ()=>{
                            try {
                                await c, It.nextTick(s, null);
                            } catch (b) {
                                It.nextTick(s, b);
                            }
                        });
                    },
                    destroy: u
                });
            }
            throw new Nr("Iterable, AsyncIterable or AsyncFunction", n, i);
        }
        if (Qa(t)) return e(t.arrayBuffer());
        if (mr(t)) return Or(ne, t, {
            objectMode: !0,
            writable: !1
        });
        if (typeof t?.writable == "object" || typeof t?.readable == "object") {
            let i1 = t != null && t.readable ? Tr(t?.readable) ? t?.readable : e(t.readable) : void 0, o1 = t != null && t.writable ? Ir(t?.writable) ? t?.writable : e(t.writable) : void 0;
            return Ge({
                readable: i1,
                writable: o1
            });
        }
        let r = t?.then;
        if (typeof r == "function") {
            let i2;
            return xr(r, t, (o)=>{
                o != null && i2.push(o), i2.push(null);
            }, (o)=>{
                ce(i2, o);
            }), i2 = new ne({
                objectMode: !0,
                writable: !1,
                read () {}
            });
        }
        throw new za(n, [
            "Blob",
            "ReadableStream",
            "WritableStream",
            "Stream",
            "Iterable",
            "AsyncIterable",
            "Function",
            "{ readable, writable } pair",
            "Promise"
        ], t);
    };
    function ef(e) {
        let { promise: t , resolve: n  } = Dr(), r = new Za, i = r.signal;
        return {
            value: e(async function*() {
                for(;;){
                    let l = t;
                    t = null;
                    let { chunk: u , done: f , cb: a  } = await l;
                    if (It.nextTick(a), f) return;
                    if (i.aborted) throw new Lr(void 0, {
                        cause: i.reason
                    });
                    ({ promise: t , resolve: n  } = Dr()), yield u;
                }
            }(), {
                signal: i
            }),
            write (l, u, f) {
                let a = n;
                n = null, a({
                    chunk: l,
                    done: !1,
                    cb: f
                });
            },
            final (l) {
                let u = n;
                n = null, u({
                    done: !0,
                    cb: l
                });
            },
            destroy (l, u) {
                r.abort(), u(l);
            }
        };
    }
    function Ge(e) {
        let t = e.readable && typeof e.readable.read != "function" ? Ja.wrap(e.readable) : e.readable, n = e.writable, r = !!Ha(t), i = !!Va(n), o, l, u, f, a;
        function c(s) {
            let b = f;
            f = null, b ? b(s) : s ? a.destroy(s) : !r && !i && a.destroy();
        }
        return a = new ne({
            readableObjectMode: !!(t != null && t.readableObjectMode),
            writableObjectMode: !!(n != null && n.writableObjectMode),
            readable: r,
            writable: i
        }), i && (Mr(n, (s)=>{
            i = !1, s && ce(t, s), c(s);
        }), a._write = function(s, b, d) {
            n.write(s, b) ? d() : o = d;
        }, a._final = function(s) {
            n.end(), l = s;
        }, n.on("drain", function() {
            if (o) {
                let s = o;
                o = null, s();
            }
        }), n.on("finish", function() {
            if (l) {
                let s = l;
                l = null, s();
            }
        })), r && (Mr(t, (s)=>{
            r = !1, s && ce(t, s), c(s);
        }), t.on("readable", function() {
            if (u) {
                let s = u;
                u = null, s();
            }
        }), t.on("end", function() {
            a.push(null);
        }), a._read = function() {
            for(;;){
                let s = t.read();
                if (s === null) {
                    u = a._read;
                    return;
                }
                if (!a.push(s)) return;
            }
        }), a._destroy = function(s, b) {
            !s && f !== null && (s = new Lr), u = null, o = null, l = null, f === null ? b(s) : (f = b, ce(n, s), ce(t, s));
        }, a;
    }
});
var v = g((su, jr)=>{
    "use strict";
    var { ObjectDefineProperties: tf , ObjectGetOwnPropertyDescriptor: B , ObjectKeys: nf , ObjectSetPrototypeOf: Wr  } = m();
    jr.exports = C;
    var Dt = we(), x = Tt();
    Wr(C.prototype, Dt.prototype);
    Wr(C, Dt);
    {
        let e = nf(x.prototype);
        for(let t = 0; t < e.length; t++){
            let n = e[t];
            C.prototype[n] || (C.prototype[n] = x.prototype[n]);
        }
    }
    function C(e) {
        if (!(this instanceof C)) return new C(e);
        Dt.call(this, e), x.call(this, e), e ? (this.allowHalfOpen = e.allowHalfOpen !== !1, e.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), e.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
    }
    tf(C.prototype, {
        writable: {
            __proto__: null,
            ...B(x.prototype, "writable")
        },
        writableHighWaterMark: {
            __proto__: null,
            ...B(x.prototype, "writableHighWaterMark")
        },
        writableObjectMode: {
            __proto__: null,
            ...B(x.prototype, "writableObjectMode")
        },
        writableBuffer: {
            __proto__: null,
            ...B(x.prototype, "writableBuffer")
        },
        writableLength: {
            __proto__: null,
            ...B(x.prototype, "writableLength")
        },
        writableFinished: {
            __proto__: null,
            ...B(x.prototype, "writableFinished")
        },
        writableCorked: {
            __proto__: null,
            ...B(x.prototype, "writableCorked")
        },
        writableEnded: {
            __proto__: null,
            ...B(x.prototype, "writableEnded")
        },
        writableNeedDrain: {
            __proto__: null,
            ...B(x.prototype, "writableNeedDrain")
        },
        destroyed: {
            __proto__: null,
            get () {
                return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
            },
            set (e) {
                this._readableState && this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e);
            }
        }
    });
    var Mt;
    function Cr() {
        return Mt === void 0 && (Mt = {}), Mt;
    }
    C.fromWeb = function(e, t) {
        return Cr().newStreamDuplexFromReadableWritablePair(e, t);
    };
    C.toWeb = function(e) {
        return Cr().newReadableWritablePairFromDuplex(e);
    };
    var Nt;
    C.from = function(e) {
        return Nt || (Nt = kr()), Nt(e, "body");
    };
});
var xt = g((du, vr)=>{
    "use strict";
    var { ObjectSetPrototypeOf: $r , Symbol: rf  } = m();
    vr.exports = G;
    var { ERR_METHOD_NOT_IMPLEMENTED: of  } = O().codes, qt = v(), { getHighWaterMark: lf  } = Ce();
    $r(G.prototype, qt.prototype);
    $r(G, qt);
    var Ee = rf("kCallback");
    function G(e) {
        if (!(this instanceof G)) return new G(e);
        let t = e ? lf(this, e, "readableHighWaterMark", !0) : null;
        t === 0 && (e = {
            ...e,
            highWaterMark: null,
            readableHighWaterMark: t,
            writableHighWaterMark: e.writableHighWaterMark || 0
        }), qt.call(this, e), this._readableState.sync = !1, this[Ee] = null, e && (typeof e.transform == "function" && (this._transform = e.transform), typeof e.flush == "function" && (this._flush = e.flush)), this.on("prefinish", af);
    }
    function Ot(e) {
        typeof this._flush == "function" && !this.destroyed ? this._flush((t, n)=>{
            if (t) {
                e ? e(t) : this.destroy(t);
                return;
            }
            n != null && this.push(n), this.push(null), e && e();
        }) : (this.push(null), e && e());
    }
    function af() {
        this._final !== Ot && Ot.call(this);
    }
    G.prototype._final = Ot;
    G.prototype._transform = function(e, t, n) {
        throw new of("_transform()");
    };
    G.prototype._write = function(e, t, n) {
        let r = this._readableState, i = this._writableState, o = r.length;
        this._transform(e, t, (l, u)=>{
            if (l) {
                n(l);
                return;
            }
            u != null && this.push(u), i.ended || o === r.length || r.length < r.highWaterMark ? n() : this[Ee] = n;
        });
    };
    G.prototype._read = function() {
        if (this[Ee]) {
            let e = this[Ee];
            this[Ee] = null, e();
        }
    };
});
var Pt = g((cu, Ur)=>{
    "use strict";
    var { ObjectSetPrototypeOf: Fr  } = m();
    Ur.exports = he;
    var Lt = xt();
    Fr(he.prototype, Lt.prototype);
    Fr(he, Lt);
    function he(e) {
        if (!(this instanceof he)) return new he(e);
        Lt.call(this, e);
    }
    he.prototype._transform = function(e, t, n) {
        n(null, e);
    };
});
var Ye = g((hu, zr)=>{
    var He = __process$, { ArrayIsArray: ff , Promise: uf , SymbolAsyncIterator: sf  } = m(), Ve = Y(), { once: df  } = j(), cf = Z(), Br = v(), { aggregateTwoErrors: hf , codes: { ERR_INVALID_ARG_TYPE: Yr , ERR_INVALID_RETURN_VALUE: kt , ERR_MISSING_ARGS: bf , ERR_STREAM_DESTROYED: _f , ERR_STREAM_PREMATURE_CLOSE: pf  } , AbortError: wf  } = O(), { validateFunction: yf , validateAbortSignal: gf  } = _e(), { isIterable: be , isReadable: Wt , isReadableNodeStream: $t , isNodeStream: Gr  } = V(), Sf = globalThis.AbortController, Ct, jt;
    function Hr(e, t, n) {
        let r = !1;
        e.on("close", ()=>{
            r = !0;
        });
        let i = Ve(e, {
            readable: t,
            writable: n
        }, (o)=>{
            r = !o;
        });
        return {
            destroy: (o)=>{
                r || (r = !0, cf.destroyer(e, o || new _f("pipe")));
            },
            cleanup: i
        };
    }
    function Ef(e) {
        return yf(e[e.length - 1], "streams[stream.length - 1]"), e.pop();
    }
    function Rf(e) {
        if (be(e)) return e;
        if ($t(e)) return Af(e);
        throw new Yr("val", [
            "Readable",
            "Iterable",
            "AsyncIterable"
        ], e);
    }
    async function* Af(e) {
        jt || (jt = we()), yield* jt.prototype[sf].call(e);
    }
    async function Vr(e, t, n, { end: r  }) {
        let i, o = null, l = (a)=>{
            if (a && (i = a), o) {
                let c = o;
                o = null, c();
            }
        }, u = ()=>new uf((a, c)=>{
                i ? c(i) : o = ()=>{
                    i ? c(i) : a();
                };
            });
        t.on("drain", l);
        let f = Ve(t, {
            readable: !1
        }, l);
        try {
            t.writableNeedDrain && await u();
            for await (let a of e)t.write(a) || await u();
            r && t.end(), await u(), n();
        } catch (a1) {
            n(i !== a1 ? hf(i, a1) : a1);
        } finally{
            f(), t.off("drain", l);
        }
    }
    function mf(...e) {
        return Kr(e, df(Ef(e)));
    }
    function Kr(e, t, n) {
        if (e.length === 1 && ff(e[0]) && (e = e[0]), e.length < 2) throw new bf("streams");
        let r = new Sf, i = r.signal, o = n?.signal, l = [];
        gf(o, "options.signal");
        function u() {
            d(new wf);
        }
        o?.addEventListener("abort", u);
        let f, a, c = [], s = 0;
        function b(_) {
            d(_, --s === 0);
        }
        function d(_, p) {
            if (_ && (!f || f.code === "ERR_STREAM_PREMATURE_CLOSE") && (f = _), !(!f && !p)) {
                for(; c.length;)c.shift()(f);
                o?.removeEventListener("abort", u), r.abort(), p && (f || l.forEach((I)=>I()), He.nextTick(t, f, a));
            }
        }
        let h;
        for(let _ = 0; _ < e.length; _++){
            let p = e[_], I = _ < e.length - 1, M = _ > 0, F = I || n?.end !== !1, re = _ === e.length - 1;
            if (Gr(p)) {
                let P = function(U) {
                    U && U.name !== "AbortError" && U.code !== "ERR_STREAM_PREMATURE_CLOSE" && b(U);
                };
                if (F) {
                    let { destroy: U , cleanup: ze  } = Hr(p, I, M);
                    c.push(U), Wt(p) && re && l.push(ze);
                }
                p.on("error", P), Wt(p) && re && l.push(()=>{
                    p.removeListener("error", P);
                });
            }
            if (_ === 0) if (typeof p == "function") {
                if (h = p({
                    signal: i
                }), !be(h)) throw new kt("Iterable, AsyncIterable or Stream", "source", h);
            } else be(p) || $t(p) ? h = p : h = Br.from(p);
            else if (typeof p == "function") if (h = Rf(h), h = p(h, {
                signal: i
            }), I) {
                if (!be(h, !0)) throw new kt("AsyncIterable", `transform[${_ - 1}]`, h);
            } else {
                var D;
                Ct || (Ct = Pt());
                let P1 = new Ct({
                    objectMode: !0
                }), U1 = (D = h) === null || D === void 0 ? void 0 : D.then;
                if (typeof U1 == "function") s++, U1.call(h, (ie)=>{
                    a = ie, ie != null && P1.write(ie), F && P1.end(), He.nextTick(b);
                }, (ie)=>{
                    P1.destroy(ie), He.nextTick(b, ie);
                });
                else if (be(h, !0)) s++, Vr(h, P1, b, {
                    end: F
                });
                else throw new kt("AsyncIterable or Promise", "destination", h);
                h = P1;
                let { destroy: ze1 , cleanup: _i  } = Hr(h, !1, !0);
                c.push(ze1), re && l.push(_i);
            }
            else if (Gr(p)) {
                if ($t(h)) {
                    s += 2;
                    let P2 = Tf(h, p, b, {
                        end: F
                    });
                    Wt(p) && re && l.push(P2);
                } else if (be(h)) s++, Vr(h, p, b, {
                    end: F
                });
                else throw new Yr("val", [
                    "Readable",
                    "Iterable",
                    "AsyncIterable"
                ], h);
                h = p;
            } else h = Br.from(p);
        }
        return (i != null && i.aborted || o != null && o.aborted) && He.nextTick(u), h;
    }
    function Tf(e, t, n, { end: r  }) {
        let i = !1;
        return t.on("close", ()=>{
            i || n(new pf);
        }), e.pipe(t, {
            end: r
        }), r ? e.once("end", ()=>{
            i = !0, t.end();
        }) : n(), Ve(e, {
            readable: !0,
            writable: !1
        }, (o)=>{
            let l = e._readableState;
            o && o.code === "ERR_STREAM_PREMATURE_CLOSE" && l && l.ended && !l.errored && !l.errorEmitted ? e.once("end", n).once("error", n) : n(o);
        }), Ve(t, {
            readable: !1,
            writable: !0
        }, n);
    }
    zr.exports = {
        pipelineImpl: Kr,
        pipeline: mf
    };
});
var ei = g((bu, Zr)=>{
    "use strict";
    var { pipeline: If  } = Ye(), Ke = v(), { destroyer: Mf  } = Z(), { isNodeStream: Nf , isReadable: Xr , isWritable: Jr  } = V(), { AbortError: Df , codes: { ERR_INVALID_ARG_VALUE: Qr , ERR_MISSING_ARGS: Of  }  } = O();
    Zr.exports = function(...t) {
        if (t.length === 0) throw new Of("streams");
        if (t.length === 1) return Ke.from(t[0]);
        let n = [
            ...t
        ];
        if (typeof t[0] == "function" && (t[0] = Ke.from(t[0])), typeof t[t.length - 1] == "function") {
            let d = t.length - 1;
            t[d] = Ke.from(t[d]);
        }
        for(let d1 = 0; d1 < t.length; ++d1)if (!!Nf(t[d1])) {
            if (d1 < t.length - 1 && !Xr(t[d1])) throw new Qr(`streams[${d1}]`, n[d1], "must be readable");
            if (d1 > 0 && !Jr(t[d1])) throw new Qr(`streams[${d1}]`, n[d1], "must be writable");
        }
        let r, i, o, l, u;
        function f(d) {
            let h = l;
            l = null, h ? h(d) : d ? u.destroy(d) : !b && !s && u.destroy();
        }
        let a = t[0], c = If(t, f), s = !!Jr(a), b = !!Xr(c);
        return u = new Ke({
            writableObjectMode: !!(a != null && a.writableObjectMode),
            readableObjectMode: !!(c != null && c.writableObjectMode),
            writable: s,
            readable: b
        }), s && (u._write = function(d, h, D) {
            a.write(d, h) ? D() : r = D;
        }, u._final = function(d) {
            a.end(), i = d;
        }, a.on("drain", function() {
            if (r) {
                let d = r;
                r = null, d();
            }
        }), c.on("finish", function() {
            if (i) {
                let d = i;
                i = null, d();
            }
        })), b && (c.on("readable", function() {
            if (o) {
                let d = o;
                o = null, d();
            }
        }), c.on("end", function() {
            u.push(null);
        }), u._read = function() {
            for(;;){
                let d = c.read();
                if (d === null) {
                    o = u._read;
                    return;
                }
                if (!u.push(d)) return;
            }
        }), u._destroy = function(d, h) {
            !d && l !== null && (d = new Df), o = null, r = null, i = null, l === null ? h(d) : (l = h, Mf(c, d));
        }, u;
    };
});
var vt = g((_u, ti)=>{
    "use strict";
    var { ArrayPrototypePop: qf , Promise: xf  } = m(), { isIterable: Lf , isNodeStream: Pf  } = V(), { pipelineImpl: kf  } = Ye(), { finished: Wf  } = Y();
    function Cf(...e) {
        return new xf((t, n)=>{
            let r, i, o = e[e.length - 1];
            if (o && typeof o == "object" && !Pf(o) && !Lf(o)) {
                let l = qf(e);
                r = l.signal, i = l.end;
            }
            kf(e, (l, u)=>{
                l ? n(l) : t(u);
            }, {
                signal: r,
                end: i
            });
        });
    }
    ti.exports = {
        finished: Wf,
        pipeline: Cf
    };
});
var di = g((pu, si)=>{
    var { Buffer: jf  } = __default4, { ObjectDefineProperty: H , ObjectKeys: ii , ReflectApply: oi  } = m(), { promisify: { custom: li  }  } = j(), { streamReturningOperators: ni , promiseReturningOperators: ri  } = xn(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: ai  }  } = O(), $f = ei(), { pipeline: fi  } = Ye(), { destroyer: vf  } = Z(), ui = Y(), Ft = vt(), Ut = V(), R = si.exports = Le().Stream;
    R.isDisturbed = Ut.isDisturbed;
    R.isErrored = Ut.isErrored;
    R.isReadable = Ut.isReadable;
    R.Readable = we();
    for (let e of ii(ni)){
        let n = function(...r) {
            if (new.target) throw ai();
            return R.Readable.from(oi(t, this, r));
        };
        n;
        let t = ni[e];
        H(n, "name", {
            __proto__: null,
            value: t.name
        }), H(n, "length", {
            __proto__: null,
            value: t.length
        }), H(R.Readable.prototype, e, {
            __proto__: null,
            value: n,
            enumerable: !1,
            configurable: !0,
            writable: !0
        });
    }
    for (let e1 of ii(ri)){
        let n1 = function(...i) {
            if (new.target) throw ai();
            return oi(t1, this, i);
        };
        n1;
        let t1 = ri[e1];
        H(n1, "name", {
            __proto__: null,
            value: t1.name
        }), H(n1, "length", {
            __proto__: null,
            value: t1.length
        }), H(R.Readable.prototype, e1, {
            __proto__: null,
            value: n1,
            enumerable: !1,
            configurable: !0,
            writable: !0
        });
    }
    R.Writable = Tt();
    R.Duplex = v();
    R.Transform = xt();
    R.PassThrough = Pt();
    R.pipeline = fi;
    var { addAbortSignal: Ff  } = ke();
    R.addAbortSignal = Ff;
    R.finished = ui;
    R.destroy = vf;
    R.compose = $f;
    H(R, "promises", {
        __proto__: null,
        configurable: !0,
        enumerable: !0,
        get () {
            return Ft;
        }
    });
    H(fi, li, {
        __proto__: null,
        enumerable: !0,
        get () {
            return Ft.pipeline;
        }
    });
    H(ui, li, {
        __proto__: null,
        enumerable: !0,
        get () {
            return Ft.finished;
        }
    });
    R.Stream = R;
    R._isUint8Array = function(t) {
        return t instanceof Uint8Array;
    };
    R._uint8ArrayToBuffer = function(t) {
        return jf.from(t.buffer, t.byteOffset, t.byteLength);
    };
});
var ci = g((wu, A)=>{
    "use strict";
    var T = di(), Bf = vt(), Gf = T.Readable.destroy;
    A.exports = T.Readable;
    A.exports._uint8ArrayToBuffer = T._uint8ArrayToBuffer;
    A.exports._isUint8Array = T._isUint8Array;
    A.exports.isDisturbed = T.isDisturbed;
    A.exports.isErrored = T.isErrored;
    A.exports.isReadable = T.isReadable;
    A.exports.Readable = T.Readable;
    A.exports.Writable = T.Writable;
    A.exports.Duplex = T.Duplex;
    A.exports.Transform = T.Transform;
    A.exports.PassThrough = T.PassThrough;
    A.exports.addAbortSignal = T.addAbortSignal;
    A.exports.finished = T.finished;
    A.exports.destroy = T.destroy;
    A.exports.destroy = Gf;
    A.exports.pipeline = T.pipeline;
    A.exports.compose = T.compose;
    Object.defineProperty(T, "promises", {
        configurable: !0,
        enumerable: !0,
        get () {
            return Bf;
        }
    });
    A.exports.Stream = T.Stream;
    A.exports.default = A.exports;
});
var bi = Ri(ci()), { _uint8ArrayToBuffer: yu , _isUint8Array: gu , isDisturbed: Su , isErrored: Eu , isReadable: Ru , Readable: Au , Writable: mu , Duplex: Tu , Transform: Iu , PassThrough: Mu , addAbortSignal: Nu , finished: Du , destroy: Ou , pipeline: qu , compose: xu , Stream: Lu  } = bi, { default: hi , ...Hf } = bi;
const process1 = __process$;
const { Buffer: Buffer1  } = __default4;
const Readable = Au;
const Writable = mu;
const Duplex = Tu;
function isReadableStream(object) {
    return object instanceof ReadableStream;
}
function isWritableStream(object) {
    return object instanceof WritableStream;
}
Readable.fromWeb = function(readableStream, options = kEmptyObject) {
    if (!isReadableStream(readableStream)) {
        throw new ERR_INVALID_ARG_TYPE("readableStream", "ReadableStream", readableStream);
    }
    validateObject(options, "options");
    const { highWaterMark , encoding , objectMode =false , signal  } = options;
    if (encoding !== undefined && !Buffer1.isEncoding(encoding)) {
        throw new ERR_INVALID_ARG_VALUE(encoding, "options.encoding");
    }
    validateBoolean(objectMode, "options.objectMode");
    const reader = readableStream.getReader();
    let closed = false;
    const readable = new Readable({
        objectMode,
        highWaterMark,
        encoding,
        signal,
        read () {
            reader.read().then((chunk)=>{
                if (chunk.done) {
                    readable.push(null);
                } else {
                    readable.push(chunk.value);
                }
            }, (error)=>destroy.call(readable, error));
        },
        destroy (error, callback) {
            function done() {
                try {
                    callback(error);
                } catch (error1) {
                    process1.nextTick(()=>{
                        throw error1;
                    });
                }
            }
            if (!closed) {
                reader.cancel(error).then(done, done);
                return;
            }
            done();
        }
    });
    reader.closed.then(()=>{
        closed = true;
        if (!isReadableEnded1(readable)) {
            readable.push(null);
        }
    }, (error)=>{
        closed = true;
        destroy.call(readable, error);
    });
    return readable;
};
Writable.fromWeb = function(writableStream, options = kEmptyObject) {
    if (!isWritableStream(writableStream)) {
        throw new ERR_INVALID_ARG_TYPE("writableStream", "WritableStream", writableStream);
    }
    validateObject(options, "options");
    const { highWaterMark , decodeStrings =true , objectMode =false , signal  } = options;
    validateBoolean(objectMode, "options.objectMode");
    validateBoolean(decodeStrings, "options.decodeStrings");
    const writer = writableStream.getWriter();
    let closed = false;
    const writable = new Writable({
        highWaterMark,
        objectMode,
        decodeStrings,
        signal,
        writev (chunks, callback) {
            function done(error) {
                error = error.filter((e)=>e);
                try {
                    callback(error.length === 0 ? undefined : error);
                } catch (error1) {
                    process1.nextTick(()=>destroy.call(writable, error1));
                }
            }
            writer.ready.then(()=>Promise.all(chunks.map((data)=>writer.write(data.chunk))).then(done, done), done);
        },
        write (chunk, encoding, callback) {
            if (typeof chunk === "string" && decodeStrings && !objectMode) {
                chunk = Buffer1.from(chunk, encoding);
                chunk = new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
            }
            function done(error) {
                try {
                    callback(error);
                } catch (error1) {
                    destroy(this, duplex, error1);
                }
            }
            writer.ready.then(()=>writer.write(chunk).then(done, done), done);
        },
        destroy (error, callback) {
            function done() {
                try {
                    callback(error);
                } catch (error1) {
                    process1.nextTick(()=>{
                        throw error1;
                    });
                }
            }
            if (!closed) {
                if (error != null) {
                    writer.abort(error).then(done, done);
                } else {
                    writer.close().then(done, done);
                }
                return;
            }
            done();
        },
        final (callback) {
            function done(error) {
                try {
                    callback(error);
                } catch (error1) {
                    process1.nextTick(()=>destroy.call(writable, error1));
                }
            }
            if (!closed) {
                writer.close().then(done, done);
            }
        }
    });
    writer.closed.then(()=>{
        closed = true;
        if (!isWritableEnded(writable)) {
            destroy.call(writable, new ERR_STREAM_PREMATURE_CLOSE());
        }
    }, (error)=>{
        closed = true;
        destroy.call(writable, error);
    });
    return writable;
};
Duplex.fromWeb = function(pair, options = kEmptyObject) {
    validateObject(pair, "pair");
    const { readable: readableStream , writable: writableStream  } = pair;
    if (!isReadableStream(readableStream)) {
        throw new ERR_INVALID_ARG_TYPE("pair.readable", "ReadableStream", readableStream);
    }
    if (!isWritableStream(writableStream)) {
        throw new ERR_INVALID_ARG_TYPE("pair.writable", "WritableStream", writableStream);
    }
    validateObject(options, "options");
    const { allowHalfOpen =false , objectMode =false , encoding , decodeStrings =true , highWaterMark , signal  } = options;
    validateBoolean(objectMode, "options.objectMode");
    if (encoding !== undefined && !Buffer1.isEncoding(encoding)) {
        throw new ERR_INVALID_ARG_VALUE(encoding, "options.encoding");
    }
    const writer = writableStream.getWriter();
    const reader = readableStream.getReader();
    let writableClosed = false;
    let readableClosed = false;
    const duplex1 = new Duplex({
        allowHalfOpen,
        highWaterMark,
        objectMode,
        encoding,
        decodeStrings,
        signal,
        writev (chunks, callback) {
            function done(error) {
                error = error.filter((e)=>e);
                try {
                    callback(error.length === 0 ? undefined : error);
                } catch (error1) {
                    process1.nextTick(()=>destroy(duplex1, error1));
                }
            }
            writer.ready.then(()=>Promise.all(chunks.map((data)=>writer.write(data.chunk))).then(done, done), done);
        },
        write (chunk, encoding, callback) {
            if (typeof chunk === "string" && decodeStrings && !objectMode) {
                chunk = Buffer1.from(chunk, encoding);
                chunk = new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
            }
            function done(error) {
                try {
                    callback(error);
                } catch (error1) {
                    destroy(duplex1, error1);
                }
            }
            writer.ready.then(()=>writer.write(chunk).then(done, done), done);
        },
        final (callback) {
            function done(error) {
                try {
                    callback(error);
                } catch (error1) {
                    process1.nextTick(()=>destroy(duplex1, error1));
                }
            }
            if (!writableClosed) {
                writer.close().then(done, done);
            }
        },
        read () {
            reader.read().then((chunk)=>{
                if (chunk.done) {
                    duplex1.push(null);
                } else {
                    duplex1.push(chunk.value);
                }
            }, (error)=>destroy(duplex1, error));
        },
        destroy (error, callback) {
            function done() {
                try {
                    callback(error);
                } catch (error1) {
                    process1.nextTick(()=>{
                        throw error1;
                    });
                }
            }
            async function closeWriter() {
                if (!writableClosed) {
                    await writer.abort(error);
                }
            }
            async function closeReader() {
                if (!readableClosed) {
                    await reader.cancel(error);
                }
            }
            if (!writableClosed || !readableClosed) {
                Promise.all([
                    closeWriter(),
                    closeReader()
                ]).then(done, done);
                return;
            }
            done();
        }
    });
    writer.closed.then(()=>{
        writableClosed = true;
        if (!isWritableEnded(duplex1)) {
            destroy(duplex1, new ERR_STREAM_PREMATURE_CLOSE());
        }
    }, (error)=>{
        writableClosed = true;
        readableClosed = true;
        destroy(duplex1, error);
    });
    reader.closed.then(()=>{
        readableClosed = true;
        if (!isReadableEnded1(duplex1)) {
            duplex1.push(null);
        }
    }, (error)=>{
        writableClosed = true;
        readableClosed = true;
        destroy(duplex1, error);
    });
    return duplex1;
};
delete Readable.Duplex;
delete Readable.PassThrough;
delete Readable.Readable;
delete Readable.Stream;
delete Readable.Transform;
delete Readable.Writable;
delete Readable._isUint8Array;
delete Readable._uint8ArrayToBuffer;
delete Readable.addAbortSignal;
delete Readable.compose;
delete Readable.destroy;
delete Readable.finished;
delete Readable.isDisturbed;
delete Readable.isErrored;
delete Readable.isReadable;
delete Readable.pipeline;
function newReadableStreamFromStreamReadable(streamReadable, options = kEmptyObject) {
    if (typeof streamReadable?._readableState !== "object") {
        throw new ERR_INVALID_ARG_TYPE("streamReadable", "stream.Readable", streamReadable);
    }
    if (isDestroyed(streamReadable) || !isReadable1(streamReadable)) {
        const readable = new ReadableStream();
        readable.cancel();
        return readable;
    }
    const objectMode = streamReadable.readableObjectMode;
    const highWaterMark = streamReadable.readableHighWaterMark;
    const evaluateStrategyOrFallback = (strategy)=>{
        if (strategy) {
            return strategy;
        }
        if (objectMode) {
            return new CountQueuingStrategy({
                highWaterMark
            });
        }
        return {
            highWaterMark
        };
    };
    const strategy = evaluateStrategyOrFallback(options?.strategy);
    let controller;
    function onData(chunk) {
        if (Buffer1.isBuffer(chunk) && !objectMode) {
            chunk = new Uint8Array(chunk);
        }
        controller.enqueue(chunk);
        if (controller.desiredSize <= 0) {
            streamReadable.pause();
        }
    }
    streamReadable.pause();
    const cleanup = eos(streamReadable, (error)=>{
        if (error?.code === "ERR_STREAM_PREMATURE_CLOSE") {
            const err = new AbortError(undefined, {
                cause: error
            });
            error = err;
        }
        cleanup();
        streamReadable.on("error", ()=>{});
        if (error) {
            return controller.error(error);
        }
        controller.close();
    });
    streamReadable.on("data", onData);
    return new ReadableStream({
        start (c) {
            controller = c;
        },
        pull () {
            streamReadable.resume();
        },
        cancel (reason) {
            destroy(streamReadable, reason);
        }
    }, strategy);
}
function newWritableStreamFromStreamWritable(streamWritable) {
    if (typeof streamWritable?._writableState !== "object") {
        throw new ERR_INVALID_ARG_TYPE("streamWritable", "stream.Writable", streamWritable);
    }
    if (isDestroyed(streamWritable) || !isWritable1(streamWritable)) {
        const writable = new WritableStream();
        writable.close();
        return writable;
    }
    const highWaterMark = streamWritable.writableHighWaterMark;
    const strategy = streamWritable.writableObjectMode ? new CountQueuingStrategy({
        highWaterMark
    }) : {
        highWaterMark
    };
    let controller;
    let backpressurePromise;
    let closed;
    function onDrain() {
        if (backpressurePromise !== undefined) {
            backpressurePromise.resolve();
        }
    }
    const cleanup = eos(streamWritable, (error)=>{
        if (error?.code === "ERR_STREAM_PREMATURE_CLOSE") {
            const err = new AbortError(undefined, {
                cause: error
            });
            error = err;
        }
        cleanup();
        streamWritable.on("error", ()=>{});
        if (error != null) {
            if (backpressurePromise !== undefined) {
                backpressurePromise.reject(error);
            }
            if (closed !== undefined) {
                closed.reject(error);
                closed = undefined;
            }
            controller.error(error);
            controller = undefined;
            return;
        }
        if (closed !== undefined) {
            closed.resolve();
            closed = undefined;
            return;
        }
        controller.error(new AbortError());
        controller = undefined;
    });
    streamWritable.on("drain", onDrain);
    return new WritableStream({
        start (c) {
            controller = c;
        },
        async write (chunk) {
            if (streamWritable.writableNeedDrain || !streamWritable.write(chunk)) {
                backpressurePromise = createDeferredPromise();
                return backpressurePromise.promise.finally(()=>{
                    backpressurePromise = undefined;
                });
            }
        },
        abort (reason) {
            destroy(streamWritable, reason);
        },
        close () {
            if (closed === undefined && !isWritableEnded(streamWritable)) {
                closed = createDeferredPromise();
                streamWritable.end();
                return closed.promise;
            }
            controller = undefined;
            return Promise.resolve();
        }
    }, strategy);
}
function newReadableWritablePairFromDuplex(duplex1) {
    if (typeof duplex1?._writableState !== "object" || typeof duplex1?._readableState !== "object") {
        throw new ERR_INVALID_ARG_TYPE("duplex", "stream.Duplex", duplex1);
    }
    if (isDestroyed(duplex1)) {
        const writable = new WritableStream();
        const readable = new ReadableStream();
        writable.close();
        readable.cancel();
        return {
            readable,
            writable
        };
    }
    const writable1 = isWritable1(duplex1) ? newWritableStreamFromStreamWritable(duplex1) : new WritableStream();
    if (!isWritable1(duplex1)) {
        writable1.close();
    }
    const readable1 = isReadable1(duplex1) ? newReadableStreamFromStreamReadable(duplex1) : new ReadableStream();
    if (!isReadable1(duplex1)) {
        readable1.cancel();
    }
    return {
        writable: writable1,
        readable: readable1
    };
}
Readable.toWeb = newReadableStreamFromStreamReadable;
Writable.toWeb = newWritableStreamFromStreamWritable;
Duplex.toWeb = newReadableWritablePairFromDuplex;
function createWritableStdioStream(writer, name) {
    const stream = new mu({
        write (buf, enc, cb) {
            if (!writer) {
                this.destroy(new Error(`Deno.${name} is not available in this environment`));
                return;
            }
            writer.writeSync(buf instanceof Uint8Array ? buf : Buffer.from(buf, enc));
            cb();
        },
        destroy (err, cb) {
            cb(err);
            this._undestroy();
            if (!this._writableState.emitClose) {
                nextTick(()=>this.emit("close"));
            }
        }
    });
    stream.fd = writer?.rid ?? -1;
    stream.destroySoon = stream.destroy;
    stream._isStdio = true;
    stream.once("close", ()=>writer?.close());
    Object.defineProperties(stream, {
        columns: {
            enumerable: true,
            configurable: true,
            get: ()=>Deno.isatty?.(writer?.rid) ? Deno.consoleSize?.().columns : undefined
        },
        rows: {
            enumerable: true,
            configurable: true,
            get: ()=>Deno.isatty?.(writer?.rid) ? Deno.consoleSize?.().rows : undefined
        },
        isTTY: {
            enumerable: true,
            configurable: true,
            get: ()=>Deno.isatty?.(writer?.rid)
        },
        getWindowSize: {
            enumerable: true,
            configurable: true,
            value: ()=>Deno.isatty?.(writer?.rid) ? Object.values(Deno.consoleSize?.()) : undefined
        }
    });
    if (Deno.isatty?.(writer?.rid)) {
        stream.cursorTo = function(x, y, callback) {
            return cursorTo(this, x, y, callback);
        };
        stream.moveCursor = function(dx, dy, callback) {
            return moveCursor(this, dx, dy, callback);
        };
        stream.clearLine = function(dir, callback) {
            return clearLine(this, dir, callback);
        };
        stream.clearScreenDown = function(callback) {
            return clearScreenDown(this, callback);
        };
    }
    return stream;
}
const stderr = stdio.stderr = createWritableStdioStream(Deno.stderr, "stderr");
const stdout = stdio.stdout = createWritableStdioStream(Deno.stdout, "stdout");
const stdin = stdio.stdin = new Au({
    highWaterMark: 0,
    emitClose: false,
    read (size) {
        const p = Buffer.alloc(size || 16 * 1024);
        if (!Deno.stdin) {
            this.destroy(new Error("Deno.stdin is not available in this environment"));
            return;
        }
        Deno.stdin.read(p).then((length)=>{
            this.push(length === null ? null : p.slice(0, length));
        }, (error)=>{
            this.destroy(error);
        });
    }
});
stdin.on("close", ()=>Deno.stdin?.close());
stdin.fd = Deno.stdin?.rid ?? -1;
Object.defineProperty(stdin, "isTTY", {
    enumerable: true,
    configurable: true,
    get () {
        return Deno.isatty?.(Deno.stdin.rid);
    }
});
stdin._isRawMode = false;
stdin.setRawMode = (enable)=>{
    Deno.stdin?.setRaw?.(enable);
    stdin._isRawMode = enable;
    return stdin;
};
Object.defineProperty(stdin, "isRaw", {
    enumerable: true,
    configurable: true,
    get () {
        return stdin._isRawMode;
    }
});
function registerDestroyHook(_target, _asyncId, _prop) {}
var constants1;
(function(constants) {
    constants[constants["kInit"] = 0] = "kInit";
    constants[constants["kBefore"] = 1] = "kBefore";
    constants[constants["kAfter"] = 2] = "kAfter";
    constants[constants["kDestroy"] = 3] = "kDestroy";
    constants[constants["kPromiseResolve"] = 4] = "kPromiseResolve";
    constants[constants["kTotals"] = 5] = "kTotals";
    constants[constants["kCheck"] = 6] = "kCheck";
    constants[constants["kExecutionAsyncId"] = 7] = "kExecutionAsyncId";
    constants[constants["kTriggerAsyncId"] = 8] = "kTriggerAsyncId";
    constants[constants["kAsyncIdCounter"] = 9] = "kAsyncIdCounter";
    constants[constants["kDefaultTriggerAsyncId"] = 10] = "kDefaultTriggerAsyncId";
    constants[constants["kUsesExecutionAsyncResource"] = 11] = "kUsesExecutionAsyncResource";
    constants[constants["kStackLength"] = 12] = "kStackLength";
})(constants1 || (constants1 = {}));
const asyncHookFields = new Uint32Array(Object.keys(constants1).length);
function newAsyncId() {
    return ++asyncIdFields[constants1.kAsyncIdCounter];
}
var UidFields;
(function(UidFields) {
    UidFields[UidFields["kExecutionAsyncId"] = 0] = "kExecutionAsyncId";
    UidFields[UidFields["kTriggerAsyncId"] = 1] = "kTriggerAsyncId";
    UidFields[UidFields["kAsyncIdCounter"] = 2] = "kAsyncIdCounter";
    UidFields[UidFields["kDefaultTriggerAsyncId"] = 3] = "kDefaultTriggerAsyncId";
    UidFields[UidFields["kUidFieldsCount"] = 4] = "kUidFieldsCount";
})(UidFields || (UidFields = {}));
const asyncIdFields = new Float64Array(Object.keys(UidFields).length);
asyncIdFields[UidFields.kAsyncIdCounter] = 1;
asyncIdFields[UidFields.kDefaultTriggerAsyncId] = -1;
var providerType;
(function(providerType) {
    providerType[providerType["NONE"] = 0] = "NONE";
    providerType[providerType["DIRHANDLE"] = 1] = "DIRHANDLE";
    providerType[providerType["DNSCHANNEL"] = 2] = "DNSCHANNEL";
    providerType[providerType["ELDHISTOGRAM"] = 3] = "ELDHISTOGRAM";
    providerType[providerType["FILEHANDLE"] = 4] = "FILEHANDLE";
    providerType[providerType["FILEHANDLECLOSEREQ"] = 5] = "FILEHANDLECLOSEREQ";
    providerType[providerType["FIXEDSIZEBLOBCOPY"] = 6] = "FIXEDSIZEBLOBCOPY";
    providerType[providerType["FSEVENTWRAP"] = 7] = "FSEVENTWRAP";
    providerType[providerType["FSREQCALLBACK"] = 8] = "FSREQCALLBACK";
    providerType[providerType["FSREQPROMISE"] = 9] = "FSREQPROMISE";
    providerType[providerType["GETADDRINFOREQWRAP"] = 10] = "GETADDRINFOREQWRAP";
    providerType[providerType["GETNAMEINFOREQWRAP"] = 11] = "GETNAMEINFOREQWRAP";
    providerType[providerType["HEAPSNAPSHOT"] = 12] = "HEAPSNAPSHOT";
    providerType[providerType["HTTP2SESSION"] = 13] = "HTTP2SESSION";
    providerType[providerType["HTTP2STREAM"] = 14] = "HTTP2STREAM";
    providerType[providerType["HTTP2PING"] = 15] = "HTTP2PING";
    providerType[providerType["HTTP2SETTINGS"] = 16] = "HTTP2SETTINGS";
    providerType[providerType["HTTPINCOMINGMESSAGE"] = 17] = "HTTPINCOMINGMESSAGE";
    providerType[providerType["HTTPCLIENTREQUEST"] = 18] = "HTTPCLIENTREQUEST";
    providerType[providerType["JSSTREAM"] = 19] = "JSSTREAM";
    providerType[providerType["JSUDPWRAP"] = 20] = "JSUDPWRAP";
    providerType[providerType["MESSAGEPORT"] = 21] = "MESSAGEPORT";
    providerType[providerType["PIPECONNECTWRAP"] = 22] = "PIPECONNECTWRAP";
    providerType[providerType["PIPESERVERWRAP"] = 23] = "PIPESERVERWRAP";
    providerType[providerType["PIPEWRAP"] = 24] = "PIPEWRAP";
    providerType[providerType["PROCESSWRAP"] = 25] = "PROCESSWRAP";
    providerType[providerType["PROMISE"] = 26] = "PROMISE";
    providerType[providerType["QUERYWRAP"] = 27] = "QUERYWRAP";
    providerType[providerType["SHUTDOWNWRAP"] = 28] = "SHUTDOWNWRAP";
    providerType[providerType["SIGNALWRAP"] = 29] = "SIGNALWRAP";
    providerType[providerType["STATWATCHER"] = 30] = "STATWATCHER";
    providerType[providerType["STREAMPIPE"] = 31] = "STREAMPIPE";
    providerType[providerType["TCPCONNECTWRAP"] = 32] = "TCPCONNECTWRAP";
    providerType[providerType["TCPSERVERWRAP"] = 33] = "TCPSERVERWRAP";
    providerType[providerType["TCPWRAP"] = 34] = "TCPWRAP";
    providerType[providerType["TTYWRAP"] = 35] = "TTYWRAP";
    providerType[providerType["UDPSENDWRAP"] = 36] = "UDPSENDWRAP";
    providerType[providerType["UDPWRAP"] = 37] = "UDPWRAP";
    providerType[providerType["SIGINTWATCHDOG"] = 38] = "SIGINTWATCHDOG";
    providerType[providerType["WORKER"] = 39] = "WORKER";
    providerType[providerType["WORKERHEAPSNAPSHOT"] = 40] = "WORKERHEAPSNAPSHOT";
    providerType[providerType["WRITEWRAP"] = 41] = "WRITEWRAP";
    providerType[providerType["ZLIB"] = 42] = "ZLIB";
})(providerType || (providerType = {}));
const kInvalidAsyncId = -1;
class AsyncWrap {
    provider = providerType.NONE;
    asyncId = kInvalidAsyncId;
    constructor(provider){
        this.provider = provider;
        this.getAsyncId();
    }
    getAsyncId() {
        this.asyncId = this.asyncId === kInvalidAsyncId ? newAsyncId() : this.asyncId;
        return this.asyncId;
    }
    getProviderType() {
        return this.provider;
    }
}
const mod9 = {
    async_hook_fields: asyncHookFields,
    asyncIdFields: asyncIdFields,
    registerDestroyHook: registerDestroyHook,
    constants: constants1,
    newAsyncId: newAsyncId,
    UidFields: UidFields,
    providerType: providerType,
    AsyncWrap: AsyncWrap
};
const mod10 = {};
const v4Seg = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const v4Str = `(${v4Seg}[.]){3}${v4Seg}`;
const IPv4Reg = new RegExp(`^${v4Str}$`);
const v6Seg = "(?:[0-9a-fA-F]{1,4})";
const IPv6Reg = new RegExp("^(" + `(?:${v6Seg}:){7}(?:${v6Seg}|:)|` + `(?:${v6Seg}:){6}(?:${v4Str}|:${v6Seg}|:)|` + `(?:${v6Seg}:){5}(?::${v4Str}|(:${v6Seg}){1,2}|:)|` + `(?:${v6Seg}:){4}(?:(:${v6Seg}){0,1}:${v4Str}|(:${v6Seg}){1,3}|:)|` + `(?:${v6Seg}:){3}(?:(:${v6Seg}){0,2}:${v4Str}|(:${v6Seg}){1,4}|:)|` + `(?:${v6Seg}:){2}(?:(:${v6Seg}){0,3}:${v4Str}|(:${v6Seg}){1,5}|:)|` + `(?:${v6Seg}:){1}(?:(:${v6Seg}){0,4}:${v4Str}|(:${v6Seg}){1,6}|:)|` + `(?::((?::${v6Seg}){0,5}:${v4Str}|(?::${v6Seg}){1,7}|:))` + ")(%[0-9a-zA-Z-.:]{1,})?$");
function isIPv4(ip) {
    return RegExp.prototype.test.call(IPv4Reg, ip);
}
function isIPv6(ip) {
    return RegExp.prototype.test.call(IPv6Reg, ip);
}
function isIP(ip) {
    if (isIPv4(ip)) {
        return 4;
    }
    if (isIPv6(ip)) {
        return 6;
    }
    return 0;
}
Symbol("normalizedArgs");
function ares_strerror(code) {
    const errorText = [
        "Successful completion",
        "DNS server returned answer with no data",
        "DNS server claims query was misformatted",
        "DNS server returned general failure",
        "Domain name not found",
        "DNS server does not implement requested operation",
        "DNS server refused query",
        "Misformatted DNS query",
        "Misformatted domain name",
        "Unsupported address family",
        "Misformatted DNS reply",
        "Could not contact DNS servers",
        "Timeout while contacting DNS servers",
        "End of file",
        "Error reading file",
        "Out of memory",
        "Channel is being destroyed",
        "Misformatted string",
        "Illegal flags specified",
        "Given hostname is not numeric",
        "Illegal hints flags specified",
        "c-ares library initialization not yet performed",
        "Error loading iphlpapi.dll",
        "Could not find GetNetworkParams function",
        "DNS query cancelled"
    ];
    if (code >= 0 && code < errorText.length) {
        return errorText[code];
    } else {
        return "unknown";
    }
}
class GetAddrInfoReqWrap extends AsyncWrap {
    family;
    hostname;
    callback;
    resolve;
    reject;
    oncomplete;
    constructor(){
        super(providerType.GETADDRINFOREQWRAP);
    }
}
function getaddrinfo(req, hostname, family, _hints, verbatim) {
    let addresses = [];
    const recordTypes = [];
    if (family === 0 || family === 4) {
        recordTypes.push("A");
    }
    if (family === 0 || family === 6) {
        recordTypes.push("AAAA");
    }
    (async ()=>{
        await Promise.allSettled(recordTypes.map((recordType)=>Deno.resolveDns(hostname, recordType).then((records)=>{
                records.forEach((record)=>addresses.push(record));
            })));
        const error = addresses.length ? 0 : codeMap.get("EAI_NODATA");
        if (!verbatim) {
            addresses.sort((a, b)=>{
                if (isIPv4(a)) {
                    return -1;
                } else if (isIPv4(b)) {
                    return 1;
                }
                return 0;
            });
        }
        if (isWindows && hostname === "localhost") {
            addresses = addresses.filter((address)=>isIPv4(address));
        }
        req.oncomplete(error, addresses);
    })();
    return 0;
}
class QueryReqWrap extends AsyncWrap {
    bindingName;
    hostname;
    ttl;
    callback;
    resolve;
    reject;
    oncomplete;
    constructor(){
        super(providerType.QUERYWRAP);
    }
}
function fqdnToHostname(fqdn) {
    return fqdn.replace(/\.$/, "");
}
function compressIPv6(address) {
    const formatted = address.replace(/\b(?:0+:){2,}/, ":");
    const finalAddress = formatted.split(":").map((octet)=>{
        if (octet.match(/^\d+\.\d+\.\d+\.\d+$/)) {
            return Number(octet.replaceAll(".", "")).toString(16);
        }
        return octet.replace(/\b0+/g, "");
    }).join(":");
    return finalAddress;
}
class ChannelWrap extends AsyncWrap {
    #servers = [];
    #timeout;
    #tries;
    constructor(timeout, tries){
        super(providerType.DNSCHANNEL);
        this.#timeout = timeout;
        this.#tries = tries;
    }
    async #query(query, recordType) {
        let code;
        let ret;
        if (this.#servers.length) {
            for (const [ipAddr, port] of this.#servers){
                const resolveOptions = {
                    nameServer: {
                        ipAddr,
                        port
                    }
                };
                ({ code , ret  } = await this.#resolve(query, recordType, resolveOptions));
                if (code === 0 || code === codeMap.get("EAI_NODATA")) {
                    break;
                }
            }
        } else {
            ({ code , ret  } = await this.#resolve(query, recordType));
        }
        return {
            code: code,
            ret: ret
        };
    }
    async #resolve(query1, recordType1, resolveOptions1) {
        let ret1 = [];
        let code1 = 0;
        try {
            ret1 = await Deno.resolveDns(query1, recordType1, resolveOptions1);
        } catch (e) {
            if (e instanceof Deno.errors.NotFound) {
                code1 = codeMap.get("EAI_NODATA");
            } else {
                code1 = codeMap.get("UNKNOWN");
            }
        }
        return {
            code: code1,
            ret: ret1
        };
    }
    queryAny(req, name) {
        (async ()=>{
            const records = [];
            await Promise.allSettled([
                this.#query(name, "A").then(({ ret  })=>{
                    ret.forEach((record)=>records.push({
                            type: "A",
                            address: record
                        }));
                }),
                this.#query(name, "AAAA").then(({ ret  })=>{
                    ret.forEach((record)=>records.push({
                            type: "AAAA",
                            address: compressIPv6(record)
                        }));
                }),
                this.#query(name, "CAA").then(({ ret  })=>{
                    ret.forEach(({ critical , tag , value  })=>records.push({
                            type: "CAA",
                            [tag]: value,
                            critical: +critical && 128
                        }));
                }),
                this.#query(name, "CNAME").then(({ ret  })=>{
                    ret.forEach((record)=>records.push({
                            type: "CNAME",
                            value: record
                        }));
                }),
                this.#query(name, "MX").then(({ ret  })=>{
                    ret.forEach(({ preference , exchange  })=>records.push({
                            type: "MX",
                            priority: preference,
                            exchange: fqdnToHostname(exchange)
                        }));
                }),
                this.#query(name, "NAPTR").then(({ ret  })=>{
                    ret.forEach(({ order , preference , flags , services , regexp , replacement  })=>records.push({
                            type: "NAPTR",
                            order,
                            preference,
                            flags,
                            service: services,
                            regexp,
                            replacement
                        }));
                }),
                this.#query(name, "NS").then(({ ret  })=>{
                    ret.forEach((record)=>records.push({
                            type: "NS",
                            value: fqdnToHostname(record)
                        }));
                }),
                this.#query(name, "PTR").then(({ ret  })=>{
                    ret.forEach((record)=>records.push({
                            type: "PTR",
                            value: fqdnToHostname(record)
                        }));
                }),
                this.#query(name, "SOA").then(({ ret  })=>{
                    ret.forEach(({ mname , rname , serial , refresh , retry , expire , minimum  })=>records.push({
                            type: "SOA",
                            nsname: fqdnToHostname(mname),
                            hostmaster: fqdnToHostname(rname),
                            serial,
                            refresh,
                            retry,
                            expire,
                            minttl: minimum
                        }));
                }),
                this.#query(name, "SRV").then(({ ret  })=>{
                    ret.forEach(({ priority , weight , port , target  })=>records.push({
                            type: "SRV",
                            priority,
                            weight,
                            port,
                            name: target
                        }));
                }),
                this.#query(name, "TXT").then(({ ret  })=>{
                    ret.forEach((record)=>records.push({
                            type: "TXT",
                            entries: record
                        }));
                })
            ]);
            const err = records.length ? 0 : codeMap.get("EAI_NODATA");
            req.oncomplete(err, records);
        })();
        return 0;
    }
    queryA(req, name) {
        this.#query(name, "A").then(({ code , ret  })=>{
            req.oncomplete(code, ret);
        });
        return 0;
    }
    queryAaaa(req, name) {
        this.#query(name, "AAAA").then(({ code , ret  })=>{
            const records = ret.map((record)=>compressIPv6(record));
            req.oncomplete(code, records);
        });
        return 0;
    }
    queryCaa(req, name) {
        this.#query(name, "CAA").then(({ code , ret  })=>{
            const records = ret.map(({ critical , tag , value  })=>({
                    [tag]: value,
                    critical: +critical && 128
                }));
            req.oncomplete(code, records);
        });
        return 0;
    }
    queryCname(req, name) {
        this.#query(name, "CNAME").then(({ code , ret  })=>{
            req.oncomplete(code, ret);
        });
        return 0;
    }
    queryMx(req, name) {
        this.#query(name, "MX").then(({ code , ret  })=>{
            const records = ret.map(({ preference , exchange  })=>({
                    priority: preference,
                    exchange: fqdnToHostname(exchange)
                }));
            req.oncomplete(code, records);
        });
        return 0;
    }
    queryNaptr(req, name) {
        this.#query(name, "NAPTR").then(({ code , ret  })=>{
            const records = ret.map(({ order , preference , flags , services , regexp , replacement  })=>({
                    flags,
                    service: services,
                    regexp,
                    replacement,
                    order,
                    preference
                }));
            req.oncomplete(code, records);
        });
        return 0;
    }
    queryNs(req, name) {
        this.#query(name, "NS").then(({ code , ret  })=>{
            const records = ret.map((record)=>fqdnToHostname(record));
            req.oncomplete(code, records);
        });
        return 0;
    }
    queryPtr(req, name) {
        this.#query(name, "PTR").then(({ code , ret  })=>{
            const records = ret.map((record)=>fqdnToHostname(record));
            req.oncomplete(code, records);
        });
        return 0;
    }
    querySoa(req, name) {
        this.#query(name, "SOA").then(({ code , ret  })=>{
            let record = {};
            if (ret.length) {
                const { mname , rname , serial , refresh , retry , expire , minimum  } = ret[0];
                record = {
                    nsname: fqdnToHostname(mname),
                    hostmaster: fqdnToHostname(rname),
                    serial,
                    refresh,
                    retry,
                    expire,
                    minttl: minimum
                };
            }
            req.oncomplete(code, record);
        });
        return 0;
    }
    querySrv(req, name) {
        this.#query(name, "SRV").then(({ code , ret  })=>{
            const records = ret.map(({ priority , weight , port , target  })=>({
                    priority,
                    weight,
                    port,
                    name: target
                }));
            req.oncomplete(code, records);
        });
        return 0;
    }
    queryTxt(req, name) {
        this.#query(name, "TXT").then(({ code , ret  })=>{
            req.oncomplete(code, ret);
        });
        return 0;
    }
    getHostByAddr(_req, _name) {
        notImplemented("cares.ChannelWrap.prototype.getHostByAddr");
    }
    getServers() {
        return this.#servers;
    }
    setServers(servers) {
        if (typeof servers === "string") {
            const tuples = [];
            for(let i = 0; i < servers.length; i += 2){
                tuples.push([
                    servers[i],
                    parseInt(servers[i + 1])
                ]);
            }
            this.#servers = tuples;
        } else {
            this.#servers = servers.map(([_ipVersion, ip, port])=>[
                    ip,
                    port
                ]);
        }
        return 0;
    }
    setLocalAddress(_addr0, _addr1) {
        notImplemented("cares.ChannelWrap.prototype.setLocalAddress");
    }
    cancel() {
        notImplemented("cares.ChannelWrap.prototype.cancel");
    }
}
const DNS_ESETSRVPENDING = -1000;
const EMSG_ESETSRVPENDING = "There are pending queries.";
function strerror(code) {
    return code === DNS_ESETSRVPENDING ? EMSG_ESETSRVPENDING : ares_strerror(code);
}
const mod11 = {
    GetAddrInfoReqWrap: GetAddrInfoReqWrap,
    getaddrinfo: getaddrinfo,
    QueryReqWrap: QueryReqWrap,
    ChannelWrap: ChannelWrap,
    strerror: strerror
};
const mod12 = {};
function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    if (!(a instanceof DataView)) {
        a = new DataView(ArrayBuffer.isView(a) ? a.buffer : a);
    }
    if (!(b instanceof DataView)) {
        b = new DataView(ArrayBuffer.isView(b) ? b.buffer : b);
    }
    assert(a instanceof DataView);
    assert(b instanceof DataView);
    const length = a.byteLength;
    let out = 0;
    let i = -1;
    while(++i < length){
        out |= a.getUint8(i) ^ b.getUint8(i);
    }
    return out === 0;
}
const timingSafeEqual1 = (a, b)=>{
    if (a instanceof Buffer) a = new DataView(a.buffer);
    if (a instanceof Buffer) b = new DataView(a.buffer);
    return timingSafeEqual(a, b);
};
function getFipsCrypto() {
    notImplemented("crypto.getFipsCrypto");
}
function setFipsCrypto(_fips) {
    notImplemented("crypto.setFipsCrypto");
}
const mod13 = {
    timingSafeEqual: timingSafeEqual1,
    getFipsCrypto: getFipsCrypto,
    setFipsCrypto: setFipsCrypto
};
const mod14 = {};
const mod15 = {};
const mod16 = {};
const mod17 = {};
const mod18 = {};
const mod19 = {};
const mod20 = {};
const mod21 = {};
const mod22 = {};
const mod23 = {};
const mod24 = {};
const mod25 = {};
const mod26 = {};
const mod27 = {};
const mod28 = {};
const mod29 = {};
class HandleWrap extends AsyncWrap {
    constructor(provider){
        super(provider);
    }
    close(cb = ()=>{}) {
        this._onClose();
        queueMicrotask(cb);
    }
    ref() {
        unreachable();
    }
    unref() {
        unreachable();
    }
    _onClose() {}
}
async function writeAll(w, arr) {
    let nwritten = 0;
    while(nwritten < arr.length){
        nwritten += await w.write(arr.subarray(nwritten));
    }
}
var StreamBaseStateFields;
(function(StreamBaseStateFields) {
    StreamBaseStateFields[StreamBaseStateFields["kReadBytesOrError"] = 0] = "kReadBytesOrError";
    StreamBaseStateFields[StreamBaseStateFields["kArrayBufferOffset"] = 1] = "kArrayBufferOffset";
    StreamBaseStateFields[StreamBaseStateFields["kBytesWritten"] = 2] = "kBytesWritten";
    StreamBaseStateFields[StreamBaseStateFields["kLastWriteWasAsync"] = 3] = "kLastWriteWasAsync";
    StreamBaseStateFields[StreamBaseStateFields["kNumStreamBaseStateFields"] = 4] = "kNumStreamBaseStateFields";
})(StreamBaseStateFields || (StreamBaseStateFields = {}));
const kReadBytesOrError = StreamBaseStateFields.kReadBytesOrError;
const kArrayBufferOffset = StreamBaseStateFields.kArrayBufferOffset;
const kBytesWritten = StreamBaseStateFields.kBytesWritten;
const kLastWriteWasAsync = StreamBaseStateFields.kLastWriteWasAsync;
const kNumStreamBaseStateFields = StreamBaseStateFields.kNumStreamBaseStateFields;
const streamBaseState = new Uint8Array(5);
streamBaseState[kLastWriteWasAsync] = 1;
class WriteWrap extends AsyncWrap {
    handle;
    oncomplete;
    async;
    bytes;
    buffer;
    callback;
    _chunks;
    constructor(){
        super(providerType.WRITEWRAP);
    }
}
class ShutdownWrap extends AsyncWrap {
    handle;
    oncomplete;
    callback;
    constructor(){
        super(providerType.SHUTDOWNWRAP);
    }
}
const kStreamBaseField = Symbol("kStreamBaseField");
const SUGGESTED_SIZE = 64 * 1024;
class LibuvStreamWrap extends HandleWrap {
    [kStreamBaseField];
    reading;
    #reading = false;
    destroyed = false;
    writeQueueSize = 0;
    bytesRead = 0;
    bytesWritten = 0;
    onread;
    constructor(provider, stream){
        super(provider);
        this.#attachToObject(stream);
    }
    readStart() {
        if (!this.#reading) {
            this.#reading = true;
            this.#read();
        }
        return 0;
    }
    readStop() {
        this.#reading = false;
        return 0;
    }
    shutdown(req) {
        const status = this._onClose();
        try {
            req.oncomplete(status);
        } catch  {}
        return 0;
    }
    useUserBuffer(_userBuf) {
        notImplemented("LibuvStreamWrap.prototype.useUserBuffer");
    }
    writeBuffer(req, data) {
        this.#write(req, data);
        return 0;
    }
    writev(req, chunks, allBuffers) {
        const count = allBuffers ? chunks.length : chunks.length >> 1;
        const buffers = new Array(count);
        if (!allBuffers) {
            for(let i = 0; i < count; i++){
                const chunk = chunks[i * 2];
                if (Buffer.isBuffer(chunk)) {
                    buffers[i] = chunk;
                }
                const encoding = chunks[i * 2 + 1];
                buffers[i] = Buffer.from(chunk, encoding);
            }
        } else {
            for(let i1 = 0; i1 < count; i1++){
                buffers[i1] = chunks[i1];
            }
        }
        return this.writeBuffer(req, Buffer.concat(buffers));
    }
    writeAsciiString(req, data) {
        const buffer = new TextEncoder().encode(data);
        return this.writeBuffer(req, buffer);
    }
    writeUtf8String(req, data) {
        const buffer = new TextEncoder().encode(data);
        return this.writeBuffer(req, buffer);
    }
    writeUcs2String(_req, _data) {
        notImplemented("LibuvStreamWrap.prototype.writeUcs2String");
    }
    writeLatin1String(req, data) {
        const buffer = Buffer.from(data, "latin1");
        return this.writeBuffer(req, buffer);
    }
    _onClose() {
        let status = 0;
        this.#reading = false;
        try {
            this[kStreamBaseField]?.close();
        } catch  {
            status = codeMap.get("ENOTCONN");
        }
        return status;
    }
    #attachToObject(stream) {
        this[kStreamBaseField] = stream;
    }
    async #read() {
        let buf = new Uint8Array(SUGGESTED_SIZE);
        let nread;
        try {
            nread = await this[kStreamBaseField].read(buf);
        } catch (e1) {
            if (e1 instanceof Deno.errors.Interrupted || e1 instanceof Deno.errors.BadResource) {
                nread = codeMap.get("EOF");
            } else if (e1 instanceof Deno.errors.ConnectionReset || e1 instanceof Deno.errors.ConnectionAborted) {
                nread = codeMap.get("ECONNRESET");
            } else {
                nread = codeMap.get("UNKNOWN");
            }
            buf = new Uint8Array(0);
        }
        nread ??= codeMap.get("EOF");
        streamBaseState[kReadBytesOrError] = nread;
        if (nread > 0) {
            this.bytesRead += nread;
        }
        buf = buf.slice(0, nread);
        streamBaseState[kArrayBufferOffset] = 0;
        try {
            this.onread(buf, nread);
        } catch  {}
        if (nread >= 0 && this.#reading) {
            this.#read();
        }
    }
    async #write(req, data) {
        const { byteLength: byteLength1  } = data;
        try {
            await writeAll(this[kStreamBaseField], data);
        } catch (e11) {
            let status;
            if (e11 instanceof Deno.errors.BadResource || e11 instanceof Deno.errors.BrokenPipe) {
                status = codeMap.get("EBADF");
            } else {
                status = codeMap.get("UNKNOWN");
            }
            try {
                req.oncomplete(status);
            } catch  {}
            return;
        }
        streamBaseState[kBytesWritten] = byteLength1;
        this.bytesWritten += byteLength1;
        try {
            req.oncomplete(0);
        } catch  {}
        return;
    }
}
const mod30 = {
    kReadBytesOrError: kReadBytesOrError,
    kArrayBufferOffset: kArrayBufferOffset,
    kBytesWritten: kBytesWritten,
    kLastWriteWasAsync: kLastWriteWasAsync,
    kNumStreamBaseStateFields: kNumStreamBaseStateFields,
    streamBaseState: streamBaseState,
    WriteWrap: WriteWrap,
    ShutdownWrap: ShutdownWrap,
    kStreamBaseField: kStreamBaseField,
    LibuvStreamWrap: LibuvStreamWrap
};
class ConnectionWrap extends LibuvStreamWrap {
    onconnection = null;
    constructor(provider, object){
        super(provider, object);
    }
    afterConnect(req, status) {
        const isSuccessStatus = !status;
        const readable = isSuccessStatus;
        const writable = isSuccessStatus;
        try {
            req.oncomplete(status, this, req, readable, writable);
        } catch  {}
        return;
    }
}
function deferred() {
    let methods;
    let state = "pending";
    const promise = new Promise((resolve, reject)=>{
        methods = {
            async resolve (value) {
                await value;
                state = "fulfilled";
                resolve(value);
            },
            reject (reason) {
                state = "rejected";
                reject(reason);
            }
        };
    });
    Object.defineProperty(promise, "state", {
        get: ()=>state
    });
    return Object.assign(promise, methods);
}
function delay(ms, options = {}) {
    const { signal , persistent  } = options;
    if (signal?.aborted) {
        return Promise.reject(new DOMException("Delay was aborted.", "AbortError"));
    }
    return new Promise((resolve, reject)=>{
        const abort = ()=>{
            clearTimeout(i);
            reject(new DOMException("Delay was aborted.", "AbortError"));
        };
        const done = ()=>{
            signal?.removeEventListener("abort", abort);
            resolve();
        };
        const i = setTimeout(done, ms);
        signal?.addEventListener("abort", abort, {
            once: true
        });
        if (persistent === false) {
            try {
                Deno.unrefTimer(i);
            } catch (error) {
                if (!(error instanceof ReferenceError)) {
                    throw error;
                }
                console.error("`persistent` option is only available in Deno");
            }
        }
    });
}
class MuxAsyncIterator {
    #iteratorCount = 0;
    #yields = [];
    #throws = [];
    #signal = deferred();
    add(iterable) {
        ++this.#iteratorCount;
        this.#callIteratorNext(iterable[Symbol.asyncIterator]());
    }
    async #callIteratorNext(iterator) {
        try {
            const { value , done  } = await iterator.next();
            if (done) {
                --this.#iteratorCount;
            } else {
                this.#yields.push({
                    iterator,
                    value
                });
            }
        } catch (e2) {
            this.#throws.push(e2);
        }
        this.#signal.resolve();
    }
    async *iterate() {
        while(this.#iteratorCount > 0){
            await this.#signal;
            for(let i = 0; i < this.#yields.length; i++){
                const { iterator , value  } = this.#yields[i];
                yield value;
                this.#callIteratorNext(iterator);
            }
            if (this.#throws.length) {
                for (const e of this.#throws){
                    throw e;
                }
                this.#throws.length = 0;
            }
            this.#yields.length = 0;
            this.#signal = deferred();
        }
    }
    [Symbol.asyncIterator]() {
        return this.iterate();
    }
}
function ceilPowOf2(n) {
    const roundPowOf2 = 1 << 31 - Math.clz32(n);
    return roundPowOf2 < n ? roundPowOf2 * 2 : roundPowOf2;
}
const INITIAL_ACCEPT_BACKOFF_DELAY = 5;
const MAX_ACCEPT_BACKOFF_DELAY = 1000;
var socketType;
(function(socketType) {
    socketType[socketType["SOCKET"] = 0] = "SOCKET";
    socketType[socketType["SERVER"] = 1] = "SERVER";
    socketType[socketType["IPC"] = 2] = "IPC";
})(socketType || (socketType = {}));
class Pipe extends ConnectionWrap {
    reading = false;
    ipc;
    #pendingInstances = 4;
    #address;
    #backlog;
    #listener;
    #connections = 0;
    #closed = false;
    #acceptBackoffDelay;
    constructor(type, conn){
        let provider;
        let ipc;
        switch(type){
            case socketType.SOCKET:
                {
                    provider = providerType.PIPEWRAP;
                    ipc = false;
                    break;
                }
            case socketType.SERVER:
                {
                    provider = providerType.PIPESERVERWRAP;
                    ipc = false;
                    break;
                }
            case socketType.IPC:
                {
                    provider = providerType.PIPEWRAP;
                    ipc = true;
                    break;
                }
            default:
                {
                    unreachable();
                }
        }
        super(provider, conn);
        this.ipc = ipc;
        if (conn && provider === providerType.PIPEWRAP) {
            const localAddr = conn.localAddr;
            this.#address = localAddr.path;
        }
    }
    open(_fd) {
        notImplemented("Pipe.prototype.open");
    }
    bind(name) {
        this.#address = name;
        return 0;
    }
    connect(req, address) {
        if (isWindows) {
            notImplemented("Pipe.prototype.connect - Windows");
        }
        const connectOptions = {
            path: address,
            transport: "unix"
        };
        Deno.connect(connectOptions).then((conn)=>{
            const localAddr = conn.localAddr;
            this.#address = req.address = localAddr.path;
            this[kStreamBaseField] = conn;
            try {
                this.afterConnect(req, 0);
            } catch  {}
        }, (e)=>{
            let code;
            if (e instanceof Deno.errors.NotFound) {
                code = codeMap.get("ENOENT");
            } else if (e instanceof Deno.errors.PermissionDenied) {
                code = codeMap.get("EACCES");
            } else {
                code = codeMap.get("ECONNREFUSED");
            }
            try {
                this.afterConnect(req, code);
            } catch  {}
        });
        return 0;
    }
    listen(backlog) {
        if (isWindows) {
            notImplemented("Pipe.prototype.listen - Windows");
        }
        this.#backlog = isWindows ? this.#pendingInstances : ceilPowOf2(backlog + 1);
        const listenOptions = {
            path: this.#address,
            transport: "unix"
        };
        let listener;
        try {
            listener = Deno.listen(listenOptions);
        } catch (e) {
            if (e instanceof Deno.errors.AddrInUse) {
                return codeMap.get("EADDRINUSE");
            } else if (e instanceof Deno.errors.AddrNotAvailable) {
                return codeMap.get("EADDRNOTAVAIL");
            }
            return codeMap.get("UNKNOWN");
        }
        const address = listener.addr;
        this.#address = address.path;
        this.#listener = listener;
        this.#accept();
        return 0;
    }
    ref() {
        if (this.#listener) {
            this.#listener.ref();
        }
    }
    unref() {
        if (this.#listener) {
            this.#listener.unref();
        }
    }
    setPendingInstances(instances) {
        this.#pendingInstances = instances;
    }
    fchmod(mode) {
        if (mode != constants2.UV_READABLE && mode != constants2.UV_WRITABLE && mode != (constants2.UV_WRITABLE | constants2.UV_READABLE)) {
            return codeMap.get("EINVAL");
        }
        let desired_mode = 0;
        if (mode & constants2.UV_READABLE) {
            desired_mode |= fs.S_IRUSR | fs.S_IRGRP | fs.S_IROTH;
        }
        if (mode & constants2.UV_WRITABLE) {
            desired_mode |= fs.S_IWUSR | fs.S_IWGRP | fs.S_IWOTH;
        }
        try {
            Deno.chmodSync(this.#address, desired_mode);
        } catch  {
            return codeMap.get("UNKNOWN");
        }
        return 0;
    }
    async #acceptBackoff() {
        if (!this.#acceptBackoffDelay) {
            this.#acceptBackoffDelay = INITIAL_ACCEPT_BACKOFF_DELAY;
        } else {
            this.#acceptBackoffDelay *= 2;
        }
        if (this.#acceptBackoffDelay >= 1000) {
            this.#acceptBackoffDelay = MAX_ACCEPT_BACKOFF_DELAY;
        }
        await delay(this.#acceptBackoffDelay);
        this.#accept();
    }
    async #accept() {
        if (this.#closed) {
            return;
        }
        if (this.#connections > this.#backlog) {
            this.#acceptBackoff();
            return;
        }
        let connection;
        try {
            connection = await this.#listener.accept();
        } catch (e3) {
            if (e3 instanceof Deno.errors.BadResource && this.#closed) {
                return;
            }
            try {
                this.onconnection(codeMap.get("UNKNOWN"), undefined);
            } catch  {}
            this.#acceptBackoff();
            return;
        }
        this.#acceptBackoffDelay = undefined;
        const connectionHandle = new Pipe(socketType.SOCKET, connection);
        this.#connections++;
        try {
            this.onconnection(0, connectionHandle);
        } catch  {}
        return this.#accept();
    }
    _onClose() {
        this.#closed = true;
        this.reading = false;
        this.#address = undefined;
        this.#backlog = undefined;
        this.#connections = 0;
        this.#acceptBackoffDelay = undefined;
        if (this.provider === providerType.PIPESERVERWRAP) {
            try {
                this.#listener.close();
            } catch  {}
        }
        return LibuvStreamWrap.prototype._onClose.call(this);
    }
}
class PipeConnectWrap extends AsyncWrap {
    oncomplete;
    address;
    constructor(){
        super(providerType.PIPECONNECTWRAP);
    }
}
var constants2;
(function(constants) {
    constants[constants["SOCKET"] = socketType.SOCKET] = "SOCKET";
    constants[constants["SERVER"] = socketType.SERVER] = "SERVER";
    constants[constants["IPC"] = socketType.IPC] = "IPC";
    constants[constants["UV_READABLE"] = 1] = "UV_READABLE";
    constants[constants["UV_WRITABLE"] = 2] = "UV_WRITABLE";
})(constants2 || (constants2 = {}));
const mod31 = {
    socketType: socketType,
    Pipe: Pipe,
    PipeConnectWrap: PipeConnectWrap,
    constants: constants2
};
const mod32 = {};
const mod33 = {};
const mod34 = {};
const mod35 = {};
const mod36 = {};
const mod37 = {};
const asyncIdSymbol = Symbol("asyncIdSymbol");
const ownerSymbol = Symbol("ownerSymbol");
const mod38 = {
    asyncIdSymbol: asyncIdSymbol,
    ownerSymbol: ownerSymbol
};
const mod39 = {};
var socketType1;
(function(socketType) {
    socketType[socketType["SOCKET"] = 0] = "SOCKET";
    socketType[socketType["SERVER"] = 1] = "SERVER";
})(socketType1 || (socketType1 = {}));
class TCPConnectWrap extends AsyncWrap {
    oncomplete;
    address;
    port;
    localAddress;
    localPort;
    constructor(){
        super(providerType.TCPCONNECTWRAP);
    }
}
var constants3;
(function(constants) {
    constants[constants["SOCKET"] = socketType1.SOCKET] = "SOCKET";
    constants[constants["SERVER"] = socketType1.SERVER] = "SERVER";
    constants[constants["UV_TCP_IPV6ONLY"] = 0] = "UV_TCP_IPV6ONLY";
})(constants3 || (constants3 = {}));
class TCP extends ConnectionWrap {
    [ownerSymbol] = null;
    reading = false;
    #address;
    #port;
    #remoteAddress;
    #remoteFamily;
    #remotePort;
    #backlog;
    #listener;
    #connections = 0;
    #closed = false;
    #acceptBackoffDelay;
    constructor(type, conn){
        let provider;
        switch(type){
            case socketType1.SOCKET:
                {
                    provider = providerType.TCPWRAP;
                    break;
                }
            case socketType1.SERVER:
                {
                    provider = providerType.TCPSERVERWRAP;
                    break;
                }
            default:
                {
                    unreachable();
                }
        }
        super(provider, conn);
        if (conn && provider === providerType.TCPWRAP) {
            const localAddr = conn.localAddr;
            this.#address = localAddr.hostname;
            this.#port = localAddr.port;
            const remoteAddr = conn.remoteAddr;
            this.#remoteAddress = remoteAddr.hostname;
            this.#remotePort = remoteAddr.port;
            this.#remoteFamily = isIP(remoteAddr.hostname);
        }
    }
    open(_fd) {
        notImplemented("TCP.prototype.open");
    }
    bind(address, port) {
        return this.#bind(address, port, 0);
    }
    bind6(address, port, flags) {
        return this.#bind(address, port, flags);
    }
    connect(req, address, port) {
        return this.#connect(req, address, port);
    }
    connect6(req, address, port) {
        return this.#connect(req, address, port);
    }
    listen(backlog) {
        this.#backlog = ceilPowOf2(backlog + 1);
        const listenOptions = {
            hostname: this.#address,
            port: this.#port,
            transport: "tcp"
        };
        let listener;
        try {
            listener = Deno.listen(listenOptions);
        } catch (e) {
            if (e instanceof Deno.errors.AddrInUse) {
                return codeMap.get("EADDRINUSE");
            } else if (e instanceof Deno.errors.AddrNotAvailable) {
                return codeMap.get("EADDRNOTAVAIL");
            }
            return codeMap.get("UNKNOWN");
        }
        const address = listener.addr;
        this.#address = address.hostname;
        this.#port = address.port;
        this.#listener = listener;
        this.#accept();
        return 0;
    }
    ref() {
        if (this.#listener) {
            this.#listener.ref();
        }
    }
    unref() {
        if (this.#listener) {
            this.#listener.unref();
        }
    }
    getsockname(sockname) {
        if (typeof this.#address === "undefined" || typeof this.#port === "undefined") {
            return codeMap.get("EADDRNOTAVAIL");
        }
        sockname.address = this.#address;
        sockname.port = this.#port;
        sockname.family = isIP(this.#address);
        return 0;
    }
    getpeername(peername) {
        if (typeof this.#remoteAddress === "undefined" || typeof this.#remotePort === "undefined") {
            return codeMap.get("EADDRNOTAVAIL");
        }
        peername.address = this.#remoteAddress;
        peername.port = this.#remotePort;
        peername.family = this.#remoteFamily;
        return 0;
    }
    setNoDelay(_noDelay) {
        return 0;
    }
    setKeepAlive(_enable, _initialDelay) {
        return 0;
    }
    setSimultaneousAccepts(_enable) {
        notImplemented("TCP.prototype.setSimultaneousAccepts");
    }
    #bind(address, port1, _flags) {
        this.#address = address;
        this.#port = port1;
        return 0;
    }
    #connect(req1, address1, port11) {
        this.#remoteAddress = address1;
        this.#remotePort = port11;
        this.#remoteFamily = isIP(address1);
        const connectOptions = {
            hostname: address1,
            port: port11,
            transport: "tcp"
        };
        Deno.connect(connectOptions).then((conn)=>{
            const localAddr = conn.localAddr;
            this.#address = req1.localAddress = localAddr.hostname;
            this.#port = req1.localPort = localAddr.port;
            this[kStreamBaseField] = conn;
            try {
                this.afterConnect(req1, 0);
            } catch  {}
        }, ()=>{
            try {
                this.afterConnect(req1, codeMap.get("ECONNREFUSED"));
            } catch  {}
        });
        return 0;
    }
    async #acceptBackoff() {
        if (!this.#acceptBackoffDelay) {
            this.#acceptBackoffDelay = INITIAL_ACCEPT_BACKOFF_DELAY;
        } else {
            this.#acceptBackoffDelay *= 2;
        }
        if (this.#acceptBackoffDelay >= 1000) {
            this.#acceptBackoffDelay = MAX_ACCEPT_BACKOFF_DELAY;
        }
        await delay(this.#acceptBackoffDelay);
        this.#accept();
    }
    async #accept() {
        if (this.#closed) {
            return;
        }
        if (this.#connections > this.#backlog) {
            this.#acceptBackoff();
            return;
        }
        let connection1;
        try {
            connection1 = await this.#listener.accept();
        } catch (e4) {
            if (e4 instanceof Deno.errors.BadResource && this.#closed) {
                return;
            }
            try {
                this.onconnection(codeMap.get("UNKNOWN"), undefined);
            } catch  {}
            this.#acceptBackoff();
            return;
        }
        this.#acceptBackoffDelay = undefined;
        const connectionHandle1 = new TCP(socketType1.SOCKET, connection1);
        this.#connections++;
        try {
            this.onconnection(0, connectionHandle1);
        } catch  {}
        return this.#accept();
    }
    _onClose() {
        this.#closed = true;
        this.reading = false;
        this.#address = undefined;
        this.#port = undefined;
        this.#remoteAddress = undefined;
        this.#remoteFamily = undefined;
        this.#remotePort = undefined;
        this.#backlog = undefined;
        this.#connections = 0;
        this.#acceptBackoffDelay = undefined;
        if (this.provider === providerType.TCPSERVERWRAP) {
            try {
                this.#listener.close();
            } catch  {}
        }
        return LibuvStreamWrap.prototype._onClose.call(this);
    }
}
const mod40 = {
    TCPConnectWrap: TCPConnectWrap,
    constants: constants3,
    TCP: TCP
};
const mod41 = {};
const mod42 = {};
const mod43 = {};
const mod44 = {};
const DenoListenDatagram = Deno[Deno.internal]?.nodeUnstable?.listenDatagram || Deno.listenDatagram;
const AF_INET6 = 10;
const UDP_DGRAM_MAXSIZE = 64 * 1024;
class SendWrap extends AsyncWrap {
    list;
    address;
    port;
    callback;
    oncomplete;
    constructor(){
        super(providerType.UDPSENDWRAP);
    }
}
class UDP extends HandleWrap {
    [ownerSymbol] = null;
    #address;
    #family;
    #port;
    #remoteAddress;
    #remoteFamily;
    #remotePort;
    #listener;
    #receiving = false;
    #recvBufferSize = UDP_DGRAM_MAXSIZE;
    #sendBufferSize = UDP_DGRAM_MAXSIZE;
    onmessage;
    lookup;
    constructor(){
        super(providerType.UDPWRAP);
    }
    addMembership(_multicastAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.addMembership");
    }
    addSourceSpecificMembership(_sourceAddress, _groupAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.addSourceSpecificMembership");
    }
    bind(ip, port, flags) {
        return this.#doBind(ip, port, flags, 2);
    }
    bind6(ip, port, flags) {
        return this.#doBind(ip, port, flags, 10);
    }
    bufferSize(size, buffer, ctx) {
        let err;
        if (size > UDP_DGRAM_MAXSIZE) {
            err = "EINVAL";
        } else if (!this.#address) {
            err = isWindows ? "ENOTSOCK" : "EBADF";
        }
        if (err) {
            ctx.errno = codeMap.get(err);
            ctx.code = err;
            ctx.message = errorMap.get(ctx.errno)[1];
            ctx.syscall = buffer ? "uv_recv_buffer_size" : "uv_send_buffer_size";
            return;
        }
        if (size !== 0) {
            size = isLinux ? size * 2 : size;
            if (buffer) {
                return this.#recvBufferSize = size;
            }
            return this.#sendBufferSize = size;
        }
        return buffer ? this.#recvBufferSize : this.#sendBufferSize;
    }
    connect(ip, port) {
        return this.#doConnect(ip, port, 2);
    }
    connect6(ip, port) {
        return this.#doConnect(ip, port, 10);
    }
    disconnect() {
        this.#remoteAddress = undefined;
        this.#remotePort = undefined;
        this.#remoteFamily = undefined;
        return 0;
    }
    dropMembership(_multicastAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.dropMembership");
    }
    dropSourceSpecificMembership(_sourceAddress, _groupAddress, _interfaceAddress) {
        notImplemented("udp.UDP.prototype.dropSourceSpecificMembership");
    }
    getpeername(peername) {
        if (this.#remoteAddress === undefined) {
            return codeMap.get("EBADF");
        }
        peername.address = this.#remoteAddress;
        peername.port = this.#remotePort;
        peername.family = this.#remoteFamily;
        return 0;
    }
    getsockname(sockname) {
        if (this.#address === undefined) {
            return codeMap.get("EBADF");
        }
        sockname.address = this.#address;
        sockname.port = this.#port;
        sockname.family = this.#family;
        return 0;
    }
    open(_fd) {
        notImplemented("udp.UDP.prototype.open");
    }
    recvStart() {
        if (!this.#receiving) {
            this.#receiving = true;
            this.#receive();
        }
        return 0;
    }
    recvStop() {
        this.#receiving = false;
        return 0;
    }
    ref() {
        notImplemented("udp.UDP.prototype.ref");
    }
    send(req, bufs, count, ...args) {
        return this.#doSend(req, bufs, count, args, 2);
    }
    send6(req, bufs, count, ...args) {
        return this.#doSend(req, bufs, count, args, 10);
    }
    setBroadcast(_bool) {
        notImplemented("udp.UDP.prototype.setBroadcast");
    }
    setMulticastInterface(_interfaceAddress) {
        notImplemented("udp.UDP.prototype.setMulticastInterface");
    }
    setMulticastLoopback(_bool) {
        notImplemented("udp.UDP.prototype.setMulticastLoopback");
    }
    setMulticastTTL(_ttl) {
        notImplemented("udp.UDP.prototype.setMulticastTTL");
    }
    setTTL(_ttl) {
        notImplemented("udp.UDP.prototype.setTTL");
    }
    unref() {
        notImplemented("udp.UDP.prototype.unref");
    }
    #doBind(ip, port2, _flags1, family) {
        const listenOptions = {
            port: port2,
            hostname: ip,
            transport: "udp"
        };
        let listener;
        try {
            listener = DenoListenDatagram(listenOptions);
        } catch (e5) {
            if (e5 instanceof Deno.errors.AddrInUse) {
                return codeMap.get("EADDRINUSE");
            } else if (e5 instanceof Deno.errors.AddrNotAvailable) {
                return codeMap.get("EADDRNOTAVAIL");
            }
            return codeMap.get("UNKNOWN");
        }
        const address2 = listener.addr;
        this.#address = address2.hostname;
        this.#port = address2.port;
        this.#family = family === AF_INET6 ? "IPv6" : "IPv4";
        this.#listener = listener;
        return 0;
    }
    #doConnect(ip1, port12, family1) {
        this.#remoteAddress = ip1;
        this.#remotePort = port12;
        this.#remoteFamily = family1 === AF_INET6 ? "IPv6" : "IPv4";
        return 0;
    }
    #doSend(req2, bufs, _count, args, _family) {
        let hasCallback;
        if (args.length === 3) {
            this.#remotePort = args[0];
            this.#remoteAddress = args[1];
            hasCallback = args[2];
        } else {
            hasCallback = args[0];
        }
        const addr = {
            hostname: this.#remoteAddress,
            port: this.#remotePort,
            transport: "udp"
        };
        const payload = new Uint8Array(Buffer.concat(bufs.map((buf)=>{
            if (typeof buf === "string") {
                return Buffer.from(buf);
            }
            return Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
        })));
        (async ()=>{
            let sent;
            let err = null;
            try {
                sent = await this.#listener.send(payload, addr);
            } catch (e) {
                if (e instanceof Deno.errors.BadResource) {
                    err = codeMap.get("EBADF");
                } else if (e instanceof Error && e.message.match(/os error (40|90|10040)/)) {
                    err = codeMap.get("EMSGSIZE");
                } else {
                    err = codeMap.get("UNKNOWN");
                }
                sent = 0;
            }
            if (hasCallback) {
                try {
                    req2.oncomplete(err, sent);
                } catch  {}
            }
        })();
        return 0;
    }
    async #receive() {
        if (!this.#receiving) {
            return;
        }
        const p = new Uint8Array(this.#recvBufferSize);
        let buf1;
        let remoteAddr;
        let nread1;
        try {
            [buf1, remoteAddr] = await this.#listener.receive(p);
            nread1 = buf1.length;
        } catch (e12) {
            if (e12 instanceof Deno.errors.Interrupted || e12 instanceof Deno.errors.BadResource) {
                nread1 = 0;
            } else {
                nread1 = codeMap.get("UNKNOWN");
            }
            buf1 = new Uint8Array(0);
            remoteAddr = null;
        }
        nread1 ??= 0;
        const rinfo = remoteAddr ? {
            address: remoteAddr.hostname,
            port: remoteAddr.port,
            family: isIP(remoteAddr.hostname) === 6 ? "IPv6" : "IPv4"
        } : undefined;
        try {
            this.onmessage(nread1, this, Buffer.from(buf1), rinfo);
        } catch  {}
        this.#receive();
    }
    _onClose() {
        this.#receiving = false;
        this.#address = undefined;
        this.#port = undefined;
        this.#family = undefined;
        try {
            this.#listener.close();
        } catch  {}
        this.#listener = undefined;
        return 0;
    }
}
const mod45 = {
    SendWrap: SendWrap,
    UDP: UDP
};
const mod46 = {};
const mod47 = {};
const mod48 = {};
const mod49 = {};
const modules = {
    "async_wrap": mod9,
    buffer: mod8,
    "cares_wrap": mod11,
    config: mod10,
    constants: mod4,
    contextify: mod12,
    credentials: mod14,
    crypto: mod13,
    errors: mod15,
    fs: mod16,
    "fs_dir": mod17,
    "fs_event_wrap": mod18,
    "heap_utils": mod19,
    "http_parser": mod20,
    icu: mod21,
    inspector: mod22,
    "js_stream": mod23,
    messaging: mod24,
    "module_wrap": mod25,
    "native_module": mod26,
    natives: mod27,
    options: mod28,
    os: mod29,
    performance: mod32,
    "pipe_wrap": mod31,
    "process_methods": mod33,
    report: mod34,
    serdes: mod35,
    "signal_wrap": mod36,
    "spawn_sync": mod37,
    "stream_wrap": mod30,
    "string_decoder": mod7,
    symbols: mod38,
    "task_queue": mod39,
    "tcp_wrap": mod40,
    timers: mod41,
    "tls_wrap": mod42,
    "trace_events": mod43,
    "tty_wrap": mod44,
    types: mod1,
    "udp_wrap": mod45,
    url: mod46,
    util: mod3,
    uv: mod,
    v8: mod47,
    worker: mod48,
    zlib: mod49
};
function getBinding(name) {
    const mod = modules[name];
    if (!mod) {
        throw new Error(`No such module: ${name}`);
    }
    return mod;
}
const kInternal = Symbol("internal properties");
const replaceUnderscoresRegex = /_/g;
const leadingDashesRegex = /^--?/;
const trailingValuesRegex = /=.*$/;
function buildAllowedFlags() {
    const allowedNodeEnvironmentFlags = [
        "--track-heap-objects",
        "--no-track-heap-objects",
        "--node-snapshot",
        "--no-node-snapshot",
        "--require",
        "--max-old-space-size",
        "--trace-exit",
        "--no-trace-exit",
        "--disallow-code-generation-from-strings",
        "--experimental-json-modules",
        "--no-experimental-json-modules",
        "--interpreted-frames-native-stack",
        "--inspect-brk",
        "--no-inspect-brk",
        "--trace-tls",
        "--no-trace-tls",
        "--stack-trace-limit",
        "--experimental-repl-await",
        "--no-experimental-repl-await",
        "--preserve-symlinks",
        "--no-preserve-symlinks",
        "--report-uncaught-exception",
        "--no-report-uncaught-exception",
        "--experimental-modules",
        "--no-experimental-modules",
        "--report-signal",
        "--jitless",
        "--inspect-port",
        "--heapsnapshot-near-heap-limit",
        "--tls-keylog",
        "--force-context-aware",
        "--no-force-context-aware",
        "--napi-modules",
        "--abort-on-uncaught-exception",
        "--diagnostic-dir",
        "--verify-base-objects",
        "--no-verify-base-objects",
        "--unhandled-rejections",
        "--perf-basic-prof",
        "--trace-atomics-wait",
        "--no-trace-atomics-wait",
        "--deprecation",
        "--no-deprecation",
        "--perf-basic-prof-only-functions",
        "--perf-prof",
        "--max-http-header-size",
        "--report-on-signal",
        "--no-report-on-signal",
        "--throw-deprecation",
        "--no-throw-deprecation",
        "--warnings",
        "--no-warnings",
        "--force-fips",
        "--no-force-fips",
        "--pending-deprecation",
        "--no-pending-deprecation",
        "--input-type",
        "--tls-max-v1.3",
        "--no-tls-max-v1.3",
        "--tls-min-v1.2",
        "--no-tls-min-v1.2",
        "--inspect",
        "--no-inspect",
        "--heapsnapshot-signal",
        "--trace-warnings",
        "--no-trace-warnings",
        "--trace-event-categories",
        "--experimental-worker",
        "--tls-max-v1.2",
        "--no-tls-max-v1.2",
        "--perf-prof-unwinding-info",
        "--preserve-symlinks-main",
        "--no-preserve-symlinks-main",
        "--policy-integrity",
        "--experimental-wasm-modules",
        "--no-experimental-wasm-modules",
        "--node-memory-debug",
        "--inspect-publish-uid",
        "--tls-min-v1.3",
        "--no-tls-min-v1.3",
        "--experimental-specifier-resolution",
        "--secure-heap",
        "--tls-min-v1.0",
        "--no-tls-min-v1.0",
        "--redirect-warnings",
        "--experimental-report",
        "--trace-event-file-pattern",
        "--trace-uncaught",
        "--no-trace-uncaught",
        "--experimental-loader",
        "--http-parser",
        "--dns-result-order",
        "--trace-sigint",
        "--no-trace-sigint",
        "--secure-heap-min",
        "--enable-fips",
        "--no-enable-fips",
        "--enable-source-maps",
        "--no-enable-source-maps",
        "--insecure-http-parser",
        "--no-insecure-http-parser",
        "--use-openssl-ca",
        "--no-use-openssl-ca",
        "--tls-cipher-list",
        "--experimental-top-level-await",
        "--no-experimental-top-level-await",
        "--openssl-config",
        "--icu-data-dir",
        "--v8-pool-size",
        "--report-on-fatalerror",
        "--no-report-on-fatalerror",
        "--title",
        "--tls-min-v1.1",
        "--no-tls-min-v1.1",
        "--report-filename",
        "--trace-deprecation",
        "--no-trace-deprecation",
        "--report-compact",
        "--no-report-compact",
        "--experimental-policy",
        "--experimental-import-meta-resolve",
        "--no-experimental-import-meta-resolve",
        "--zero-fill-buffers",
        "--no-zero-fill-buffers",
        "--report-dir",
        "--use-bundled-ca",
        "--no-use-bundled-ca",
        "--experimental-vm-modules",
        "--no-experimental-vm-modules",
        "--force-async-hooks-checks",
        "--no-force-async-hooks-checks",
        "--frozen-intrinsics",
        "--no-frozen-intrinsics",
        "--huge-max-old-generation-size",
        "--disable-proto",
        "--debug-arraybuffer-allocations",
        "--no-debug-arraybuffer-allocations",
        "--conditions",
        "--experimental-wasi-unstable-preview1",
        "--no-experimental-wasi-unstable-preview1",
        "--trace-sync-io",
        "--no-trace-sync-io",
        "--use-largepages",
        "--experimental-abortcontroller",
        "--debug-port",
        "--es-module-specifier-resolution",
        "--prof-process",
        "-C",
        "--loader",
        "--report-directory",
        "-r",
        "--trace-events-enabled"
    ];
    const trimLeadingDashes = (flag)=>flag.replace(leadingDashesRegex, "");
    const nodeFlags = allowedNodeEnvironmentFlags.map(trimLeadingDashes);
    class NodeEnvironmentFlagsSet extends Set {
        constructor(array){
            super();
            this[kInternal] = {
                array
            };
        }
        add() {
            return this;
        }
        delete() {
            return false;
        }
        clear() {}
        has(key) {
            if (typeof key === "string") {
                key = key.replace(replaceUnderscoresRegex, "-");
                if (leadingDashesRegex.test(key)) {
                    key = key.replace(trailingValuesRegex, "");
                    return this[kInternal].array.includes(key);
                }
                return nodeFlags.includes(key);
            }
            return false;
        }
        entries() {
            this[kInternal].set ??= new Set(this[kInternal].array);
            return this[kInternal].set.entries();
        }
        forEach(callback, thisArg = undefined) {
            this[kInternal].array.forEach((v)=>Reflect.apply(callback, thisArg, [
                    v,
                    v,
                    this
                ]));
        }
        get size() {
            return this[kInternal].array.length;
        }
        values() {
            this[kInternal].set ??= new Set(this[kInternal].array);
            return this[kInternal].set.values();
        }
    }
    NodeEnvironmentFlagsSet.prototype.keys = NodeEnvironmentFlagsSet.prototype[Symbol.iterator] = NodeEnvironmentFlagsSet.prototype.values;
    Object.freeze(NodeEnvironmentFlagsSet.prototype.constructor);
    Object.freeze(NodeEnvironmentFlagsSet.prototype);
    return Object.freeze(new NodeEnvironmentFlagsSet(allowedNodeEnvironmentFlags));
}
const DenoCommand = Deno[Deno.internal]?.nodeUnstable?.Command || Deno.Command;
const notImplementedEvents = [
    "disconnect",
    "message",
    "multipleResolves",
    "rejectionHandled",
    "worker"
];
const argv = [
    "",
    "",
    ...Deno.args
];
Object.defineProperty(argv, "0", {
    get: Deno.execPath
});
Object.defineProperty(argv, "1", {
    get: ()=>{
        if (Deno.mainModule.startsWith("file:")) {
            return fromFileUrl2(Deno.mainModule);
        } else {
            return join4(Deno.cwd(), "$deno$node.js");
        }
    }
});
const exit = (code)=>{
    if (code || code === 0) {
        if (typeof code === "string") {
            const parsedCode = parseInt(code);
            process2.exitCode = isNaN(parsedCode) ? undefined : parsedCode;
        } else {
            process2.exitCode = code;
        }
    }
    if (!process2._exiting) {
        process2._exiting = true;
        process2.emit("exit", process2.exitCode || 0);
    }
    Deno.exit(process2.exitCode || 0);
};
function addReadOnlyProcessAlias(name, option, enumerable = true) {
    const value = getOptionValue(option);
    if (value) {
        Object.defineProperty(process2, name, {
            writable: false,
            configurable: true,
            enumerable,
            value
        });
    }
}
function createWarningObject(warning, type, code, ctor, detail) {
    assert(typeof warning === "string");
    const warningErr = new Error(warning);
    warningErr.name = String(type || "Warning");
    if (code !== undefined) {
        warningErr.code = code;
    }
    if (detail !== undefined) {
        warningErr.detail = detail;
    }
    Error.captureStackTrace(warningErr, ctor || process2.emitWarning);
    return warningErr;
}
function doEmitWarning(warning) {
    process2.emit("warning", warning);
}
function emitWarning(warning, type, code, ctor) {
    let detail;
    if (type !== null && typeof type === "object" && !Array.isArray(type)) {
        ctor = type.ctor;
        code = type.code;
        if (typeof type.detail === "string") {
            detail = type.detail;
        }
        type = type.type || "Warning";
    } else if (typeof type === "function") {
        ctor = type;
        code = undefined;
        type = "Warning";
    }
    if (type !== undefined) {
        validateString(type, "type");
    }
    if (typeof code === "function") {
        ctor = code;
        code = undefined;
    } else if (code !== undefined) {
        validateString(code, "code");
    }
    if (typeof warning === "string") {
        warning = createWarningObject(warning, type, code, ctor, detail);
    } else if (!(warning instanceof Error)) {
        throw new ERR_INVALID_ARG_TYPE("warning", [
            "Error",
            "string"
        ], warning);
    }
    if (warning.name === "DeprecationWarning") {
        if (process2.noDeprecation) {
            return;
        }
        if (process2.throwDeprecation) {
            return process2.nextTick(()=>{
                throw warning;
            });
        }
    }
    process2.nextTick(doEmitWarning, warning);
}
function hrtime(time) {
    const milli = performance.now();
    const sec = Math.floor(milli / 1000);
    const nano = Math.floor(milli * 1_000_000 - sec * 1_000_000_000);
    if (!time) {
        return [
            sec,
            nano
        ];
    }
    const [prevSec, prevNano] = time;
    return [
        sec - prevSec,
        nano - prevNano
    ];
}
hrtime.bigint = function() {
    const [sec, nano] = hrtime();
    return BigInt(sec) * 1_000_000_000n + BigInt(nano);
};
function memoryUsage() {
    return {
        ...Deno.memoryUsage(),
        arrayBuffers: 0
    };
}
memoryUsage.rss = function() {
    return memoryUsage().rss;
};
function _kill(pid, sig) {
    let errCode;
    if (sig === 0) {
        let status;
        if (Deno.build.os === "windows") {
            status = new DenoCommand("powershell.exe", {
                args: [
                    "Get-Process",
                    "-pid",
                    pid
                ]
            }).outputSync();
        } else {
            status = new DenoCommand("kill", {
                args: [
                    "-0",
                    pid
                ]
            }).outputSync();
        }
        if (!status.success) {
            errCode = codeMap.get("ESRCH");
        }
    } else {
        const maybeSignal = Object.entries(os.signals).find(([_, numericCode])=>numericCode === sig);
        if (!maybeSignal) {
            errCode = codeMap.get("EINVAL");
        } else {
            try {
                Deno.kill(pid, maybeSignal[0]);
            } catch (e) {
                if (e instanceof TypeError) {
                    throw notImplemented(maybeSignal[0]);
                }
                throw e;
            }
        }
    }
    if (!errCode) {
        return 0;
    } else {
        return errCode;
    }
}
function kill(pid, sig = "SIGTERM") {
    if (pid != (pid | 0)) {
        throw new ERR_INVALID_ARG_TYPE("pid", "number", pid);
    }
    let err;
    if (typeof sig === "number") {
        err = process2._kill(pid, sig);
    } else {
        if (sig in os.signals) {
            err = process2._kill(pid, os.signals[sig]);
        } else {
            throw new ERR_UNKNOWN_SIGNAL(sig);
        }
    }
    if (err) {
        throw errnoException(err, "kill");
    }
    return true;
}
function uncaughtExceptionHandler(err, origin) {
    process2.emit("uncaughtExceptionMonitor", err, origin);
    process2.emit("uncaughtException", err, origin);
}
let execPath = null;
class Process extends EventEmitter {
    constructor(){
        super();
        globalThis.addEventListener("unhandledrejection", (event)=>{
            if (process2.listenerCount("unhandledRejection") === 0) {
                if (process2.listenerCount("uncaughtException") === 0) {
                    throw event.reason;
                }
                event.preventDefault();
                uncaughtExceptionHandler(event.reason, "unhandledRejection");
                return;
            }
            event.preventDefault();
            process2.emit("unhandledRejection", event.reason, event.promise);
        });
        globalThis.addEventListener("error", (event)=>{
            if (process2.listenerCount("uncaughtException") > 0) {
                event.preventDefault();
            }
            uncaughtExceptionHandler(event.error, "uncaughtException");
        });
        globalThis.addEventListener("beforeunload", (e)=>{
            super.emit("beforeExit", process2.exitCode || 0);
            processTicksAndRejections();
            if (core.eventLoopHasMoreWork()) {
                e.preventDefault();
            }
        });
        globalThis.addEventListener("unload", ()=>{
            if (!process2._exiting) {
                process2._exiting = true;
                super.emit("exit", process2.exitCode || 0);
            }
        });
    }
    arch = arch;
    argv = argv;
    chdir = chdir;
    config = {
        target_defaults: {},
        variables: {}
    };
    cwd = cwd;
    env = env;
    execArgv = [];
    exit = exit;
    _exiting = _exiting;
    exitCode = undefined;
    mainModule = undefined;
    nextTick = nextTick1;
    on(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.on("${event}")`);
            super.on(event, listener);
        } else if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {} else if (event === "SIGTERM" && Deno.build.os === "windows") {} else {
                Deno.addSignalListener(event, listener);
            }
        } else {
            super.on(event, listener);
        }
        return this;
    }
    off(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.off("${event}")`);
            super.off(event, listener);
        } else if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {} else if (event === "SIGTERM" && Deno.build.os === "windows") {} else {
                Deno.removeSignalListener(event, listener);
            }
        } else {
            super.off(event, listener);
        }
        return this;
    }
    emit(event, ...args) {
        if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {} else {
                Deno.kill(Deno.pid, event);
            }
        } else {
            return super.emit(event, ...args);
        }
        return true;
    }
    prependListener(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.prependListener("${event}")`);
            super.prependListener(event, listener);
        } else if (event.startsWith("SIG")) {
            if (event === "SIGBREAK" && Deno.build.os !== "windows") {} else {
                Deno.addSignalListener(event, listener);
            }
        } else {
            super.prependListener(event, listener);
        }
        return this;
    }
    pid = pid;
    platform = platform;
    addListener(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.addListener("${event}")`);
        }
        return this.on(event, listener);
    }
    removeListener(event, listener) {
        if (notImplementedEvents.includes(event)) {
            warnNotImplemented(`process.removeListener("${event}")`);
        }
        return this.off(event, listener);
    }
    hrtime = hrtime;
    _kill = _kill;
    kill = kill;
    memoryUsage = memoryUsage;
    stderr = stderr;
    stdin = stdin;
    stdout = stdout;
    version = version;
    versions = versions;
    emitWarning = emitWarning;
    binding(name) {
        return getBinding(name);
    }
    umask() {
        return 0o22;
    }
    getgid() {
        return Deno.gid();
    }
    getuid() {
        return Deno.uid();
    }
    _eval = undefined;
    get execPath() {
        if (execPath) {
            return execPath;
        }
        execPath = Deno.execPath();
        return execPath;
    }
    set execPath(path) {
        execPath = path;
    }
    #startTime = Date.now();
    uptime() {
        return (Date.now() - this.#startTime) / 1000;
    }
    #allowedFlags = buildAllowedFlags();
    get allowedNodeEnvironmentFlags() {
        return this.#allowedFlags;
    }
    features = {
        inspector: false
    };
}
if (Deno.build.os === "windows") {
    delete Process.prototype.getgid;
    delete Process.prototype.getuid;
}
const process2 = new Process();
Object.defineProperty(process2, Symbol.toStringTag, {
    enumerable: false,
    writable: true,
    configurable: false,
    value: "process"
});
addReadOnlyProcessAlias("noDeprecation", "--no-deprecation");
addReadOnlyProcessAlias("throwDeprecation", "--throw-deprecation");
process2.removeListener;
process2.removeAllListeners;
const SEE_GITHUB_ISSUE = "See https://github.com/denoland/deno_std/issues/1436";
function arch1() {
    return process2.arch;
}
arch1[Symbol.toPrimitive] = ()=>process2.arch;
endianness[Symbol.toPrimitive] = ()=>endianness();
freemem[Symbol.toPrimitive] = ()=>freemem();
homedir[Symbol.toPrimitive] = ()=>homedir();
hostname[Symbol.toPrimitive] = ()=>hostname();
platform1[Symbol.toPrimitive] = ()=>platform1();
release[Symbol.toPrimitive] = ()=>release();
version1[Symbol.toPrimitive] = ()=>version1();
totalmem[Symbol.toPrimitive] = ()=>totalmem();
type[Symbol.toPrimitive] = ()=>type();
uptime[Symbol.toPrimitive] = ()=>uptime();
function endianness() {
    const buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true);
    return new Int16Array(buffer)[0] === 256 ? "LE" : "BE";
}
function freemem() {
    return Deno.systemMemoryInfo().free;
}
function homedir() {
    switch(osType){
        case "windows":
            return Deno.env.get("USERPROFILE") || null;
        case "linux":
        case "darwin":
        case "freebsd":
            return Deno.env.get("HOME") || null;
        default:
            throw Error("unreachable");
    }
}
function hostname() {
    return Deno.hostname();
}
function platform1() {
    return process2.platform;
}
function release() {
    return Deno.osRelease();
}
function version1() {
    return Deno.osRelease();
}
function totalmem() {
    return Deno.systemMemoryInfo().total;
}
function type() {
    switch(Deno.build.os){
        case "windows":
            return "Windows_NT";
        case "linux":
            return "Linux";
        case "darwin":
            return "Darwin";
        case "freebsd":
            return "FreeBSD";
        default:
            throw Error("unreachable");
    }
}
function uptime() {
    notImplemented(SEE_GITHUB_ISSUE);
}
isWindows ? EOL.CRLF : EOL.LF;
const separatorsForRegex = {
    "/": "\\/",
    "\\": "\\\\"
};
const homeDir = homedir();
if (!homeDir) {
    throw new Error("Home directory not found");
}
const __default6 = {
    scriptsPath: homeDir,
    scriptsFile: ".launch.scripts.mjs",
    commandSeparator: "&&",
    othersCommandsToShow: 3,
    envRegexp: new RegExp(`\\$(\\w+)${separatorsForRegex[SEP]}`, "g")
};
const __default7 = "0.0.3";
function cmdBuild(parts, ...args) {
    return (context)=>parts.reduce((cmd, part, i)=>{
            cmd = cmd.concat(part);
            const arg = args[i];
            if (arg) {
                if (typeof arg === "function") {
                    cmd = cmd.concat(arg(context));
                } else {
                    cmd = cmd.concat(`${arg}`);
                }
            }
            return cmd;
        }, "");
}
function showAllCommands(config, commands) {
    const commandNames = Object.keys(commands);
    const maxLen = Math.max(...commandNames.map((cmd)=>cmd.length));
    console.log(`Available scripts in ${scriptsFile(config)}\n`);
    if (commandNames.length === 0) {
        console.log("  <empty list>");
    }
    commandNames.forEach((cmd)=>{
        const script = commands[cmd];
        if (script.desc) {
            console.log(`  ${cmd.padEnd(maxLen)}    ${script.desc}`);
        } else {
            console.log(`  ${cmd}`);
        }
    });
}
const scriptsFile = (config)=>join4(config.scriptsPath, config.scriptsFile);
function showTheMostSimilarCommand(config, commands, cmd) {
    const cmdKeys = Object.keys(commands);
    const like = cmd.toLowerCase().split("");
    const PENALTY = -1000;
    const matches = cmdKeys.map((name)=>{
        const nameLike = name.toLowerCase();
        return {
            name,
            match: like.map((letter)=>nameLike.indexOf(letter))
        };
    }).map(({ name , match  })=>({
            name,
            match: match.map((value, i)=>{
                if (value === -1) return PENALTY;
                return Math.abs(value - i) * -1;
            }).reduce((a, b)=>a + b)
        }));
    const mostSimilar = matches.reduce((match1, match2)=>{
        return match1.match >= match2.match ? match1 : match2;
    });
    const minMatch = like.length * PENALTY;
    if (!mostSimilar || mostSimilar.match <= minMatch) {
        return;
    }
    console.log("\nThe most similar command is");
    console.log(`    ${mostSimilar.name}`);
    const acc = [];
    const others = matches.reduce((acc, match)=>{
        if (match.name == mostSimilar.name) return acc;
        if (match.match > minMatch) {
            acc.push(match);
        }
        return acc;
    }, acc);
    if (others.length === 0) {
        return;
    }
    others.sort((a, b)=>b.match - a.match);
    console.log("\nOther similar commands");
    others.slice(0, config.othersCommandsToShow).forEach((match)=>{
        console.log(`    ${match.name}`);
    });
}
function buildCommand(config, context, commands) {
    return commands.map((cmd)=>{
        if (typeof cmd === "function") {
            return cmd(context);
        }
        return cmd;
    }).join(config.commandSeparator);
}
const exists = async (filename)=>{
    try {
        await Deno.stat(filename);
        return true;
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            return false;
        } else {
            throw error;
        }
    }
};
function mapValues(record, transformer) {
    const ret = {};
    const entries = Object.entries(record);
    for (const [key, value] of entries){
        const mappedValue = transformer(value);
        ret[key] = mappedValue;
    }
    return ret;
}
const CHAR_FORWARD_SLASH1 = 47;
function assertPath1(path) {
    if (typeof path !== "string") {
        throw new ERR_INVALID_ARG_TYPE("path", [
            "string"
        ], path);
    }
}
function isPosixPathSeparator1(code) {
    return code === 47;
}
function isPathSeparator1(code) {
    return isPosixPathSeparator1(code) || code === 92;
}
function isWindowsDeviceRoot1(code) {
    return code >= 97 && code <= 122 || code >= 65 && code <= 90;
}
function normalizeString1(path, allowAboveRoot, separator, isPathSeparator) {
    let res = "";
    let lastSegmentLength = 0;
    let lastSlash = -1;
    let dots = 0;
    let code;
    for(let i = 0, len = path.length; i <= len; ++i){
        if (i < len) code = path.charCodeAt(i);
        else if (isPathSeparator(code)) break;
        else code = CHAR_FORWARD_SLASH1;
        if (isPathSeparator(code)) {
            if (lastSlash === i - 1 || dots === 1) {} else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                    if (res.length > 2) {
                        const lastSlashIndex = res.lastIndexOf(separator);
                        if (lastSlashIndex === -1) {
                            res = "";
                            lastSegmentLength = 0;
                        } else {
                            res = res.slice(0, lastSlashIndex);
                            lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
                        }
                        lastSlash = i;
                        dots = 0;
                        continue;
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += `${separator}..`;
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += separator + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 && dots !== -1) {
            ++dots;
        } else {
            dots = -1;
        }
    }
    return res;
}
function _format1(sep, pathObject) {
    const dir = pathObject.dir || pathObject.root;
    const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
const WHITESPACE_ENCODINGS1 = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20"
};
function encodeWhitespace1(string) {
    return string.replaceAll(/[\s]/g, (c)=>{
        return WHITESPACE_ENCODINGS1[c] ?? c;
    });
}
const sep3 = "\\";
const delimiter3 = ";";
function resolve3(...pathSegments) {
    let resolvedDevice = "";
    let resolvedTail = "";
    let resolvedAbsolute = false;
    for(let i = pathSegments.length - 1; i >= -1; i--){
        let path;
        const { Deno: Deno1  } = globalThis;
        if (i >= 0) {
            path = pathSegments[i];
        } else if (!resolvedDevice) {
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a drive-letter-less path without a CWD.");
            }
            path = Deno1.cwd();
        } else {
            if (typeof Deno1?.env?.get !== "function" || typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path = Deno1.cwd();
            if (path === undefined || path.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
                path = `${resolvedDevice}\\`;
            }
        }
        assertPath1(path);
        const len = path.length;
        if (len === 0) continue;
        let rootEnd = 0;
        let device = "";
        let isAbsolute = false;
        const code = path.charCodeAt(0);
        if (len > 1) {
            if (isPathSeparator1(code)) {
                isAbsolute = true;
                if (isPathSeparator1(path.charCodeAt(1))) {
                    let j = 2;
                    let last = j;
                    for(; j < len; ++j){
                        if (isPathSeparator1(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        const firstPart = path.slice(last, j);
                        last = j;
                        for(; j < len; ++j){
                            if (!isPathSeparator1(path.charCodeAt(j))) break;
                        }
                        if (j < len && j !== last) {
                            last = j;
                            for(; j < len; ++j){
                                if (isPathSeparator1(path.charCodeAt(j))) break;
                            }
                            if (j === len) {
                                device = `\\\\${firstPart}\\${path.slice(last)}`;
                                rootEnd = j;
                            } else if (j !== last) {
                                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                                rootEnd = j;
                            }
                        }
                    }
                } else {
                    rootEnd = 1;
                }
            } else if (isWindowsDeviceRoot1(code)) {
                if (path.charCodeAt(1) === 58) {
                    device = path.slice(0, 2);
                    rootEnd = 2;
                    if (len > 2) {
                        if (isPathSeparator1(path.charCodeAt(2))) {
                            isAbsolute = true;
                            rootEnd = 3;
                        }
                    }
                }
            }
        } else if (isPathSeparator1(code)) {
            rootEnd = 1;
            isAbsolute = true;
        }
        if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            continue;
        }
        if (resolvedDevice.length === 0 && device.length > 0) {
            resolvedDevice = device;
        }
        if (!resolvedAbsolute) {
            resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
            resolvedAbsolute = isAbsolute;
        }
        if (resolvedAbsolute && resolvedDevice.length > 0) break;
    }
    resolvedTail = normalizeString1(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator1);
    return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize4(path) {
    assertPath1(path);
    const len = path.length;
    if (len === 0) return ".";
    let rootEnd = 0;
    let device;
    let isAbsolute = false;
    const code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator1(code)) {
            isAbsolute = true;
            if (isPathSeparator1(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator1(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    const firstPart = path.slice(last, j);
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator1(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator1(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            return `\\\\${firstPart}\\${path.slice(last)}\\`;
                        } else if (j !== last) {
                            device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                            rootEnd = j;
                        }
                    }
                }
            } else {
                rootEnd = 1;
            }
        } else if (isWindowsDeviceRoot1(code)) {
            if (path.charCodeAt(1) === 58) {
                device = path.slice(0, 2);
                rootEnd = 2;
                if (len > 2) {
                    if (isPathSeparator1(path.charCodeAt(2))) {
                        isAbsolute = true;
                        rootEnd = 3;
                    }
                }
            }
        }
    } else if (isPathSeparator1(code)) {
        return "\\";
    }
    let tail;
    if (rootEnd < len) {
        tail = normalizeString1(path.slice(rootEnd), !isAbsolute, "\\", isPathSeparator1);
    } else {
        tail = "";
    }
    if (tail.length === 0 && !isAbsolute) tail = ".";
    if (tail.length > 0 && isPathSeparator1(path.charCodeAt(len - 1))) {
        tail += "\\";
    }
    if (device === undefined) {
        if (isAbsolute) {
            if (tail.length > 0) return `\\${tail}`;
            else return "\\";
        } else if (tail.length > 0) {
            return tail;
        } else {
            return "";
        }
    } else if (isAbsolute) {
        if (tail.length > 0) return `${device}\\${tail}`;
        else return `${device}\\`;
    } else if (tail.length > 0) {
        return device + tail;
    } else {
        return device;
    }
}
function isAbsolute3(path) {
    assertPath1(path);
    const len = path.length;
    if (len === 0) return false;
    const code = path.charCodeAt(0);
    if (isPathSeparator1(code)) {
        return true;
    } else if (isWindowsDeviceRoot1(code)) {
        if (len > 2 && path.charCodeAt(1) === 58) {
            if (isPathSeparator1(path.charCodeAt(2))) return true;
        }
    }
    return false;
}
function join5(...paths) {
    const pathsCount = paths.length;
    if (pathsCount === 0) return ".";
    let joined;
    let firstPart = null;
    for(let i = 0; i < pathsCount; ++i){
        const path = paths[i];
        assertPath1(path);
        if (path.length > 0) {
            if (joined === undefined) joined = firstPart = path;
            else joined += `\\${path}`;
        }
    }
    if (joined === undefined) return ".";
    let needsReplace = true;
    let slashCount = 0;
    assert(firstPart != null);
    if (isPathSeparator1(firstPart.charCodeAt(0))) {
        ++slashCount;
        const firstLen = firstPart.length;
        if (firstLen > 1) {
            if (isPathSeparator1(firstPart.charCodeAt(1))) {
                ++slashCount;
                if (firstLen > 2) {
                    if (isPathSeparator1(firstPart.charCodeAt(2))) ++slashCount;
                    else {
                        needsReplace = false;
                    }
                }
            }
        }
    }
    if (needsReplace) {
        for(; slashCount < joined.length; ++slashCount){
            if (!isPathSeparator1(joined.charCodeAt(slashCount))) break;
        }
        if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
    }
    return normalize4(joined);
}
function relative3(from, to) {
    assertPath1(from);
    assertPath1(to);
    if (from === to) return "";
    const fromOrig = resolve3(from);
    const toOrig = resolve3(to);
    if (fromOrig === toOrig) return "";
    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();
    if (from === to) return "";
    let fromStart = 0;
    let fromEnd = from.length;
    for(; fromStart < fromEnd; ++fromStart){
        if (from.charCodeAt(fromStart) !== 92) break;
    }
    for(; fromEnd - 1 > fromStart; --fromEnd){
        if (from.charCodeAt(fromEnd - 1) !== 92) break;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 0;
    let toEnd = to.length;
    for(; toStart < toEnd; ++toStart){
        if (to.charCodeAt(toStart) !== 92) break;
    }
    for(; toEnd - 1 > toStart; --toEnd){
        if (to.charCodeAt(toEnd - 1) !== 92) break;
    }
    const toLen = toEnd - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for(; i <= length; ++i){
        if (i === length) {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === 92) {
                    return toOrig.slice(toStart + i + 1);
                } else if (i === 2) {
                    return toOrig.slice(toStart + i);
                }
            }
            if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === 92) {
                    lastCommonSep = i;
                } else if (i === 2) {
                    lastCommonSep = 3;
                }
            }
            break;
        }
        const fromCode = from.charCodeAt(fromStart + i);
        const toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode) break;
        else if (fromCode === 92) lastCommonSep = i;
    }
    if (i !== length && lastCommonSep === -1) {
        return toOrig;
    }
    let out = "";
    if (lastCommonSep === -1) lastCommonSep = 0;
    for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i){
        if (i === fromEnd || from.charCodeAt(i) === 92) {
            if (out.length === 0) out += "..";
            else out += "\\..";
        }
    }
    if (out.length > 0) {
        return out + toOrig.slice(toStart + lastCommonSep, toEnd);
    } else {
        toStart += lastCommonSep;
        if (toOrig.charCodeAt(toStart) === 92) ++toStart;
        return toOrig.slice(toStart, toEnd);
    }
}
function toNamespacedPath3(path) {
    if (typeof path !== "string") return path;
    if (path.length === 0) return "";
    const resolvedPath = resolve3(path);
    if (resolvedPath.length >= 3) {
        if (resolvedPath.charCodeAt(0) === 92) {
            if (resolvedPath.charCodeAt(1) === 92) {
                const code = resolvedPath.charCodeAt(2);
                if (code !== 63 && code !== 46) {
                    return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
                }
            }
        } else if (isWindowsDeviceRoot1(resolvedPath.charCodeAt(0))) {
            if (resolvedPath.charCodeAt(1) === 58 && resolvedPath.charCodeAt(2) === 92) {
                return `\\\\?\\${resolvedPath}`;
            }
        }
    }
    return path;
}
function dirname3(path) {
    assertPath1(path);
    const len = path.length;
    if (len === 0) return ".";
    let rootEnd = -1;
    let end = -1;
    let matchedSlash = true;
    let offset = 0;
    const code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator1(code)) {
            rootEnd = offset = 1;
            if (isPathSeparator1(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator1(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator1(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator1(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            return path;
                        }
                        if (j !== last) {
                            rootEnd = offset = j + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot1(code)) {
            if (path.charCodeAt(1) === 58) {
                rootEnd = offset = 2;
                if (len > 2) {
                    if (isPathSeparator1(path.charCodeAt(2))) rootEnd = offset = 3;
                }
            }
        }
    } else if (isPathSeparator1(code)) {
        return path;
    }
    for(let i = len - 1; i >= offset; --i){
        if (isPathSeparator1(path.charCodeAt(i))) {
            if (!matchedSlash) {
                end = i;
                break;
            }
        } else {
            matchedSlash = false;
        }
    }
    if (end === -1) {
        if (rootEnd === -1) return ".";
        else end = rootEnd;
    }
    return path.slice(0, end);
}
function basename3(path, ext = "") {
    if (ext !== undefined && typeof ext !== "string") {
        throw new ERR_INVALID_ARG_TYPE("ext", [
            "string"
        ], ext);
    }
    assertPath1(path);
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (path.length >= 2) {
        const drive = path.charCodeAt(0);
        if (isWindowsDeviceRoot1(drive)) {
            if (path.charCodeAt(1) === 58) start = 2;
        }
    }
    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
        if (ext.length === path.length && ext === path) return "";
        let extIdx = ext.length - 1;
        let firstNonSlashEnd = -1;
        for(i = path.length - 1; i >= start; --i){
            const code = path.charCodeAt(i);
            if (isPathSeparator1(code)) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd === -1) {
                    matchedSlash = false;
                    firstNonSlashEnd = i + 1;
                }
                if (extIdx >= 0) {
                    if (code === ext.charCodeAt(extIdx)) {
                        if (--extIdx === -1) {
                            end = i;
                        }
                    } else {
                        extIdx = -1;
                        end = firstNonSlashEnd;
                    }
                }
            }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path.length;
        return path.slice(start, end);
    } else {
        for(i = path.length - 1; i >= start; --i){
            if (isPathSeparator1(path.charCodeAt(i))) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) return "";
        return path.slice(start, end);
    }
}
function extname3(path) {
    assertPath1(path);
    let start = 0;
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    if (path.length >= 2 && path.charCodeAt(1) === 58 && isWindowsDeviceRoot1(path.charCodeAt(0))) {
        start = startPart = 2;
    }
    for(let i = path.length - 1; i >= start; --i){
        const code = path.charCodeAt(i);
        if (isPathSeparator1(code)) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path.slice(startDot, end);
}
function format3(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new ERR_INVALID_ARG_TYPE("pathObject", [
            "Object"
        ], pathObject);
    }
    return _format1("\\", pathObject);
}
function parse4(path) {
    assertPath1(path);
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    const len = path.length;
    if (len === 0) return ret;
    let rootEnd = 0;
    let code = path.charCodeAt(0);
    if (len > 1) {
        if (isPathSeparator1(code)) {
            rootEnd = 1;
            if (isPathSeparator1(path.charCodeAt(1))) {
                let j = 2;
                let last = j;
                for(; j < len; ++j){
                    if (isPathSeparator1(path.charCodeAt(j))) break;
                }
                if (j < len && j !== last) {
                    last = j;
                    for(; j < len; ++j){
                        if (!isPathSeparator1(path.charCodeAt(j))) break;
                    }
                    if (j < len && j !== last) {
                        last = j;
                        for(; j < len; ++j){
                            if (isPathSeparator1(path.charCodeAt(j))) break;
                        }
                        if (j === len) {
                            rootEnd = j;
                        } else if (j !== last) {
                            rootEnd = j + 1;
                        }
                    }
                }
            }
        } else if (isWindowsDeviceRoot1(code)) {
            if (path.charCodeAt(1) === 58) {
                rootEnd = 2;
                if (len > 2) {
                    if (isPathSeparator1(path.charCodeAt(2))) {
                        if (len === 3) {
                            ret.root = ret.dir = path;
                            return ret;
                        }
                        rootEnd = 3;
                    }
                } else {
                    ret.root = ret.dir = path;
                    return ret;
                }
            }
        }
    } else if (isPathSeparator1(code)) {
        ret.root = ret.dir = path;
        return ret;
    }
    if (rootEnd > 0) ret.root = path.slice(0, rootEnd);
    let startDot = -1;
    let startPart = rootEnd;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for(; i >= rootEnd; --i){
        code = path.charCodeAt(i);
        if (isPathSeparator1(code)) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
            ret.base = ret.name = path.slice(startPart, end);
        }
    } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
        ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0 && startPart !== rootEnd) {
        ret.dir = path.slice(0, startPart - 1);
    } else ret.dir = ret.root;
    return ret;
}
function fromFileUrl3(url) {
    url = url instanceof URL ? url : new URL(url);
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    let path = decodeURIComponent(url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
    if (url.hostname != "") {
        path = `\\\\${url.hostname}${path}`;
    }
    return path;
}
function toFileUrl3(path) {
    if (!isAbsolute3(path)) {
        throw new TypeError("Must be an absolute path.");
    }
    const [, hostname, pathname] = path.match(/^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/);
    const url = new URL("file:///");
    url.pathname = encodeWhitespace1(pathname.replace(/%/g, "%25"));
    if (hostname != null && hostname != "localhost") {
        url.hostname = hostname;
        if (!url.hostname) {
            throw new TypeError("Invalid hostname.");
        }
    }
    return url;
}
const __default8 = {
    basename: basename3,
    delimiter: delimiter3,
    dirname: dirname3,
    extname: extname3,
    format: format3,
    fromFileUrl: fromFileUrl3,
    isAbsolute: isAbsolute3,
    join: join5,
    normalize: normalize4,
    parse: parse4,
    relative: relative3,
    resolve: resolve3,
    sep: sep3,
    toFileUrl: toFileUrl3,
    toNamespacedPath: toNamespacedPath3
};
const mod50 = {
    sep: sep3,
    delimiter: delimiter3,
    resolve: resolve3,
    normalize: normalize4,
    isAbsolute: isAbsolute3,
    join: join5,
    relative: relative3,
    toNamespacedPath: toNamespacedPath3,
    dirname: dirname3,
    basename: basename3,
    extname: extname3,
    format: format3,
    parse: parse4,
    fromFileUrl: fromFileUrl3,
    toFileUrl: toFileUrl3,
    default: __default8
};
const sep4 = "/";
const delimiter4 = ":";
function resolve4(...pathSegments) {
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for(let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--){
        let path;
        if (i >= 0) path = pathSegments[i];
        else {
            const { Deno: Deno1  } = globalThis;
            if (typeof Deno1?.cwd !== "function") {
                throw new TypeError("Resolved a relative path without a CWD.");
            }
            path = Deno1.cwd();
        }
        assertPath1(path);
        if (path.length === 0) {
            continue;
        }
        resolvedPath = `${path}/${resolvedPath}`;
        resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH1;
    }
    resolvedPath = normalizeString1(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator1);
    if (resolvedAbsolute) {
        if (resolvedPath.length > 0) return `/${resolvedPath}`;
        else return "/";
    } else if (resolvedPath.length > 0) return resolvedPath;
    else return ".";
}
function normalize5(path) {
    assertPath1(path);
    if (path.length === 0) return ".";
    const isAbsolute = path.charCodeAt(0) === 47;
    const trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    path = normalizeString1(path, !isAbsolute, "/", isPosixPathSeparator1);
    if (path.length === 0 && !isAbsolute) path = ".";
    if (path.length > 0 && trailingSeparator) path += "/";
    if (isAbsolute) return `/${path}`;
    return path;
}
function isAbsolute4(path) {
    assertPath1(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
}
function join6(...paths) {
    if (paths.length === 0) return ".";
    let joined;
    for(let i = 0, len = paths.length; i < len; ++i){
        const path = paths[i];
        assertPath1(path);
        if (path.length > 0) {
            if (!joined) joined = path;
            else joined += `/${path}`;
        }
    }
    if (!joined) return ".";
    return normalize5(joined);
}
function relative4(from, to) {
    assertPath1(from);
    assertPath1(to);
    if (from === to) return "";
    from = resolve4(from);
    to = resolve4(to);
    if (from === to) return "";
    let fromStart = 1;
    const fromEnd = from.length;
    for(; fromStart < fromEnd; ++fromStart){
        if (from.charCodeAt(fromStart) !== 47) break;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 1;
    const toEnd = to.length;
    for(; toStart < toEnd; ++toStart){
        if (to.charCodeAt(toStart) !== 47) break;
    }
    const toLen = toEnd - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for(; i <= length; ++i){
        if (i === length) {
            if (toLen > length) {
                if (to.charCodeAt(toStart + i) === 47) {
                    return to.slice(toStart + i + 1);
                } else if (i === 0) {
                    return to.slice(toStart + i);
                }
            } else if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === 47) {
                    lastCommonSep = i;
                } else if (i === 0) {
                    lastCommonSep = 0;
                }
            }
            break;
        }
        const fromCode = from.charCodeAt(fromStart + i);
        const toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode) break;
        else if (fromCode === 47) lastCommonSep = i;
    }
    let out = "";
    for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i){
        if (i === fromEnd || from.charCodeAt(i) === 47) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
    }
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
    else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47) ++toStart;
        return to.slice(toStart);
    }
}
function toNamespacedPath4(path) {
    return path;
}
function dirname4(path) {
    assertPath1(path);
    if (path.length === 0) return ".";
    const hasRoot = path.charCodeAt(0) === 47;
    let end = -1;
    let matchedSlash = true;
    for(let i = path.length - 1; i >= 1; --i){
        if (path.charCodeAt(i) === 47) {
            if (!matchedSlash) {
                end = i;
                break;
            }
        } else {
            matchedSlash = false;
        }
    }
    if (end === -1) return hasRoot ? "/" : ".";
    if (hasRoot && end === 1) return "//";
    return path.slice(0, end);
}
function basename4(path, ext = "") {
    if (ext !== undefined && typeof ext !== "string") {
        throw new ERR_INVALID_ARG_TYPE("ext", [
            "string"
        ], ext);
    }
    assertPath1(path);
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
        if (ext.length === path.length && ext === path) return "";
        let extIdx = ext.length - 1;
        let firstNonSlashEnd = -1;
        for(i = path.length - 1; i >= 0; --i){
            const code = path.charCodeAt(i);
            if (code === 47) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else {
                if (firstNonSlashEnd === -1) {
                    matchedSlash = false;
                    firstNonSlashEnd = i + 1;
                }
                if (extIdx >= 0) {
                    if (code === ext.charCodeAt(extIdx)) {
                        if (--extIdx === -1) {
                            end = i;
                        }
                    } else {
                        extIdx = -1;
                        end = firstNonSlashEnd;
                    }
                }
            }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path.length;
        return path.slice(start, end);
    } else {
        for(i = path.length - 1; i >= 0; --i){
            if (path.charCodeAt(i) === 47) {
                if (!matchedSlash) {
                    start = i + 1;
                    break;
                }
            } else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
            }
        }
        if (end === -1) return "";
        return path.slice(start, end);
    }
}
function extname4(path) {
    assertPath1(path);
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    for(let i = path.length - 1; i >= 0; --i){
        const code = path.charCodeAt(i);
        if (code === 47) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
    }
    return path.slice(startDot, end);
}
function format4(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
        throw new ERR_INVALID_ARG_TYPE("pathObject", [
            "Object"
        ], pathObject);
    }
    return _format1("/", pathObject);
}
function parse5(path) {
    assertPath1(path);
    const ret = {
        root: "",
        dir: "",
        base: "",
        ext: "",
        name: ""
    };
    if (path.length === 0) return ret;
    const isAbsolute = path.charCodeAt(0) === 47;
    let start;
    if (isAbsolute) {
        ret.root = "/";
        start = 1;
    } else {
        start = 0;
    }
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for(; i >= start; --i){
        const code = path.charCodeAt(i);
        if (code === 47) {
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
            preDotState = -1;
        }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
            if (startPart === 0 && isAbsolute) {
                ret.base = ret.name = path.slice(1, end);
            } else {
                ret.base = ret.name = path.slice(startPart, end);
            }
        }
    } else {
        if (startPart === 0 && isAbsolute) {
            ret.name = path.slice(1, startDot);
            ret.base = path.slice(1, end);
        } else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
        }
        ret.ext = path.slice(startDot, end);
    }
    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute) ret.dir = "/";
    return ret;
}
function fromFileUrl4(url) {
    url = url instanceof URL ? url : new URL(url);
    if (url.protocol != "file:") {
        throw new TypeError("Must be a file URL.");
    }
    return decodeURIComponent(url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function toFileUrl4(path) {
    if (!isAbsolute4(path)) {
        throw new TypeError("Must be an absolute path.");
    }
    const url = new URL("file:///");
    url.pathname = encodeWhitespace1(path.replace(/%/g, "%25").replace(/\\/g, "%5C"));
    return url;
}
const __default9 = {
    basename: basename4,
    delimiter: delimiter4,
    dirname: dirname4,
    extname: extname4,
    format: format4,
    fromFileUrl: fromFileUrl4,
    isAbsolute: isAbsolute4,
    join: join6,
    normalize: normalize5,
    parse: parse5,
    relative: relative4,
    resolve: resolve4,
    sep: sep4,
    toFileUrl: toFileUrl4,
    toNamespacedPath: toNamespacedPath4
};
const mod51 = {
    sep: sep4,
    delimiter: delimiter4,
    resolve: resolve4,
    normalize: normalize5,
    isAbsolute: isAbsolute4,
    join: join6,
    relative: relative4,
    toNamespacedPath: toNamespacedPath4,
    dirname: dirname4,
    basename: basename4,
    extname: extname4,
    format: format4,
    parse: parse5,
    fromFileUrl: fromFileUrl4,
    toFileUrl: toFileUrl4,
    default: __default9
};
const SEP1 = isWindows ? "\\" : "/";
const SEP_PATTERN = isWindows ? /[\\/]+/ : /\/+/;
function common(paths, sep = SEP1) {
    const [first = "", ...remaining] = paths;
    if (first === "" || remaining.length === 0) {
        return first.substring(0, first.lastIndexOf(sep) + 1);
    }
    const parts = first.split(sep);
    let endOfPrefix = parts.length;
    for (const path of remaining){
        const compare = path.split(sep);
        for(let i = 0; i < endOfPrefix; i++){
            if (compare[i] !== parts[i]) {
                endOfPrefix = i;
            }
        }
        if (endOfPrefix === 0) {
            return "";
        }
    }
    const prefix = parts.slice(0, endOfPrefix).join(sep);
    return prefix.endsWith(sep) ? prefix : `${prefix}${sep}`;
}
const path2 = isWindows ? mod50 : mod51;
const { join: join7 , normalize: normalize6  } = path2;
const regExpEscapeChars = [
    "!",
    "$",
    "(",
    ")",
    "*",
    "+",
    ".",
    "=",
    "?",
    "[",
    "\\",
    "^",
    "{",
    "|"
];
const rangeEscapeChars = [
    "-",
    "\\",
    "]"
];
function globToRegExp(glob, { extended =true , globstar: globstarOption = true , os =osType , caseInsensitive =false  } = {}) {
    if (glob == "") {
        return /(?!)/;
    }
    const sep = os == "windows" ? "(?:\\\\|/)+" : "/+";
    const sepMaybe = os == "windows" ? "(?:\\\\|/)*" : "/*";
    const seps = os == "windows" ? [
        "\\",
        "/"
    ] : [
        "/"
    ];
    const globstar = os == "windows" ? "(?:[^\\\\/]*(?:\\\\|/|$)+)*" : "(?:[^/]*(?:/|$)+)*";
    const wildcard = os == "windows" ? "[^\\\\/]*" : "[^/]*";
    const escapePrefix = os == "windows" ? "`" : "\\";
    let newLength = glob.length;
    for(; newLength > 1 && seps.includes(glob[newLength - 1]); newLength--);
    glob = glob.slice(0, newLength);
    let regExpString = "";
    for(let j = 0; j < glob.length;){
        let segment = "";
        const groupStack = [];
        let inRange = false;
        let inEscape = false;
        let endsWithSep = false;
        let i = j;
        for(; i < glob.length && !seps.includes(glob[i]); i++){
            if (inEscape) {
                inEscape = false;
                const escapeChars = inRange ? rangeEscapeChars : regExpEscapeChars;
                segment += escapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
                continue;
            }
            if (glob[i] == escapePrefix) {
                inEscape = true;
                continue;
            }
            if (glob[i] == "[") {
                if (!inRange) {
                    inRange = true;
                    segment += "[";
                    if (glob[i + 1] == "!") {
                        i++;
                        segment += "^";
                    } else if (glob[i + 1] == "^") {
                        i++;
                        segment += "\\^";
                    }
                    continue;
                } else if (glob[i + 1] == ":") {
                    let k = i + 1;
                    let value = "";
                    while(glob[k + 1] != null && glob[k + 1] != ":"){
                        value += glob[k + 1];
                        k++;
                    }
                    if (glob[k + 1] == ":" && glob[k + 2] == "]") {
                        i = k + 2;
                        if (value == "alnum") segment += "\\dA-Za-z";
                        else if (value == "alpha") segment += "A-Za-z";
                        else if (value == "ascii") segment += "\x00-\x7F";
                        else if (value == "blank") segment += "\t ";
                        else if (value == "cntrl") segment += "\x00-\x1F\x7F";
                        else if (value == "digit") segment += "\\d";
                        else if (value == "graph") segment += "\x21-\x7E";
                        else if (value == "lower") segment += "a-z";
                        else if (value == "print") segment += "\x20-\x7E";
                        else if (value == "punct") {
                            segment += "!\"#$%&'()*+,\\-./:;<=>?@[\\\\\\]^_‘{|}~";
                        } else if (value == "space") segment += "\\s\v";
                        else if (value == "upper") segment += "A-Z";
                        else if (value == "word") segment += "\\w";
                        else if (value == "xdigit") segment += "\\dA-Fa-f";
                        continue;
                    }
                }
            }
            if (glob[i] == "]" && inRange) {
                inRange = false;
                segment += "]";
                continue;
            }
            if (inRange) {
                if (glob[i] == "\\") {
                    segment += `\\\\`;
                } else {
                    segment += glob[i];
                }
                continue;
            }
            if (glob[i] == ")" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
                segment += ")";
                const type = groupStack.pop();
                if (type == "!") {
                    segment += wildcard;
                } else if (type != "@") {
                    segment += type;
                }
                continue;
            }
            if (glob[i] == "|" && groupStack.length > 0 && groupStack[groupStack.length - 1] != "BRACE") {
                segment += "|";
                continue;
            }
            if (glob[i] == "+" && extended && glob[i + 1] == "(") {
                i++;
                groupStack.push("+");
                segment += "(?:";
                continue;
            }
            if (glob[i] == "@" && extended && glob[i + 1] == "(") {
                i++;
                groupStack.push("@");
                segment += "(?:";
                continue;
            }
            if (glob[i] == "?") {
                if (extended && glob[i + 1] == "(") {
                    i++;
                    groupStack.push("?");
                    segment += "(?:";
                } else {
                    segment += ".";
                }
                continue;
            }
            if (glob[i] == "!" && extended && glob[i + 1] == "(") {
                i++;
                groupStack.push("!");
                segment += "(?!";
                continue;
            }
            if (glob[i] == "{") {
                groupStack.push("BRACE");
                segment += "(?:";
                continue;
            }
            if (glob[i] == "}" && groupStack[groupStack.length - 1] == "BRACE") {
                groupStack.pop();
                segment += ")";
                continue;
            }
            if (glob[i] == "," && groupStack[groupStack.length - 1] == "BRACE") {
                segment += "|";
                continue;
            }
            if (glob[i] == "*") {
                if (extended && glob[i + 1] == "(") {
                    i++;
                    groupStack.push("*");
                    segment += "(?:";
                } else {
                    const prevChar = glob[i - 1];
                    let numStars = 1;
                    while(glob[i + 1] == "*"){
                        i++;
                        numStars++;
                    }
                    const nextChar = glob[i + 1];
                    if (globstarOption && numStars == 2 && [
                        ...seps,
                        undefined
                    ].includes(prevChar) && [
                        ...seps,
                        undefined
                    ].includes(nextChar)) {
                        segment += globstar;
                        endsWithSep = true;
                    } else {
                        segment += wildcard;
                    }
                }
                continue;
            }
            segment += regExpEscapeChars.includes(glob[i]) ? `\\${glob[i]}` : glob[i];
        }
        if (groupStack.length > 0 || inRange || inEscape) {
            segment = "";
            for (const c of glob.slice(j, i)){
                segment += regExpEscapeChars.includes(c) ? `\\${c}` : c;
                endsWithSep = false;
            }
        }
        regExpString += segment;
        if (!endsWithSep) {
            regExpString += i < glob.length ? sep : sepMaybe;
            endsWithSep = true;
        }
        while(seps.includes(glob[i]))i++;
        if (!(i > j)) {
            throw new Error("Assertion failure: i > j (potential infinite loop)");
        }
        j = i;
    }
    regExpString = `^${regExpString}$`;
    return new RegExp(regExpString, caseInsensitive ? "i" : "");
}
function isGlob(str) {
    const chars = {
        "{": "}",
        "(": ")",
        "[": "]"
    };
    const regex = /\\(.)|(^!|\*|\?|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/;
    if (str === "") {
        return false;
    }
    let match;
    while(match = regex.exec(str)){
        if (match[2]) return true;
        let idx = match.index + match[0].length;
        const open = match[1];
        const close = open ? chars[open] : null;
        if (open && close) {
            const n = str.indexOf(close, idx);
            if (n !== -1) {
                idx = n + 1;
            }
        }
        str = str.slice(idx);
    }
    return false;
}
function normalizeGlob(glob, { globstar =false  } = {}) {
    if (glob.match(/\0/g)) {
        throw new Error(`Glob contains invalid characters: "${glob}"`);
    }
    if (!globstar) {
        return normalize6(glob);
    }
    const s = SEP_PATTERN.source;
    const badParentPattern = new RegExp(`(?<=(${s}|^)\\*\\*${s})\\.\\.(?=${s}|$)`, "g");
    return normalize6(glob.replace(badParentPattern, "\0")).replace(/\0/g, "..");
}
function joinGlobs(globs, { extended =true , globstar =false  } = {}) {
    if (!globstar || globs.length == 0) {
        return join7(...globs);
    }
    if (globs.length === 0) return ".";
    let joined;
    for (const glob of globs){
        const path = glob;
        if (path.length > 0) {
            if (!joined) joined = path;
            else joined += `${SEP1}${path}`;
        }
    }
    if (!joined) return ".";
    return normalizeGlob(joined, {
        extended,
        globstar
    });
}
const path3 = isWindows ? __default8 : __default9;
const { basename: basename5 , delimiter: delimiter5 , dirname: dirname5 , extname: extname5 , format: format5 , fromFileUrl: fromFileUrl5 , isAbsolute: isAbsolute5 , join: join8 , normalize: normalize7 , parse: parse6 , relative: relative5 , resolve: resolve5 , sep: sep5 , toFileUrl: toFileUrl5 , toNamespacedPath: toNamespacedPath5  } = path3;
const mod52 = {
    SEP: SEP1,
    SEP_PATTERN: SEP_PATTERN,
    win32: __default8,
    posix: __default9,
    basename: basename5,
    delimiter: delimiter5,
    dirname: dirname5,
    extname: extname5,
    format: format5,
    fromFileUrl: fromFileUrl5,
    isAbsolute: isAbsolute5,
    join: join8,
    normalize: normalize7,
    parse: parse6,
    relative: relative5,
    resolve: resolve5,
    sep: sep5,
    toFileUrl: toFileUrl5,
    toNamespacedPath: toNamespacedPath5,
    common,
    globToRegExp,
    isGlob,
    normalizeGlob,
    joinGlobs
};
const __default10 = {
    ...mod52
};
"use strict";
const hexTable = new Array(256);
for(let i1 = 0; i1 < 256; ++i1){
    hexTable[i1] = "%" + ((i1 < 16 ? "0" : "") + i1.toString(16)).toUpperCase();
}
new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]);
new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
]);
new Int8Array([
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    +0,
    +1,
    +2,
    +3,
    +4,
    +5,
    +6,
    +7,
    +8,
    +9,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
]);
const forwardSlashRegEx = /\//g;
new Set([
    "javascript",
    "javascript:"
]);
new Set([
    "javascript",
    "javascript:"
]);
new Set([
    "http",
    "http:",
    "https",
    "https:",
    "ftp",
    "ftp:",
    "gopher",
    "gopher:",
    "file",
    "file:",
    "ws",
    "ws:",
    "wss",
    "wss:"
]);
new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
]);
URL;
function fileURLToPath(path) {
    if (typeof path === "string") path = new URL(path);
    else if (!(path instanceof URL)) {
        throw new ERR_INVALID_ARG_TYPE("path", [
            "string",
            "URL"
        ], path);
    }
    if (path.protocol !== "file:") {
        throw new ERR_INVALID_URL_SCHEME("file");
    }
    return isWindows ? getPathFromURLWin(path) : getPathFromURLPosix(path);
}
function getPathFromURLWin(url) {
    const hostname = url.hostname;
    let pathname = url.pathname;
    for(let n = 0; n < pathname.length; n++){
        if (pathname[n] === "%") {
            const third = pathname.codePointAt(n + 2) | 0x20;
            if (pathname[n + 1] === "2" && third === 102 || pathname[n + 1] === "5" && third === 99) {
                throw new ERR_INVALID_FILE_URL_PATH("must not include encoded \\ or / characters");
            }
        }
    }
    pathname = pathname.replace(forwardSlashRegEx, "\\");
    pathname = decodeURIComponent(pathname);
    if (hostname !== "") {
        return `\\\\${hostname}${pathname}`;
    } else {
        const letter = pathname.codePointAt(1) | 0x20;
        const sep = pathname[2];
        if (letter < 97 || letter > 122 || sep !== ":") {
            throw new ERR_INVALID_FILE_URL_PATH("must be absolute");
        }
        return pathname.slice(1);
    }
}
function getPathFromURLPosix(url) {
    if (url.hostname !== "") {
        throw new ERR_INVALID_FILE_URL_HOST(osType);
    }
    const pathname = url.pathname;
    for(let n = 0; n < pathname.length; n++){
        if (pathname[n] === "%") {
            const third = pathname.codePointAt(n + 2) | 0x20;
            if (pathname[n + 1] === "2" && third === 102) {
                throw new ERR_INVALID_FILE_URL_PATH("must not include encoded / characters");
            }
        }
    }
    return decodeURIComponent(pathname);
}
URLSearchParams;
Symbol("query");
function toPathIfFileURL(fileURLOrPath) {
    if (!(fileURLOrPath instanceof URL)) {
        return fileURLOrPath;
    }
    return fileURLToPath(fileURLOrPath);
}
function assert1(value, message) {
    if (!value) {
        throw new ERR_INTERNAL_ASSERTION(message);
    }
}
function fail(message) {
    throw new ERR_INTERNAL_ASSERTION(message);
}
assert1.fail = fail;
function convertFileInfoToStats(origin) {
    return {
        dev: origin.dev,
        ino: origin.ino,
        mode: origin.mode,
        nlink: origin.nlink,
        uid: origin.uid,
        gid: origin.gid,
        rdev: origin.rdev,
        size: origin.size,
        blksize: origin.blksize,
        blocks: origin.blocks,
        mtime: origin.mtime,
        atime: origin.atime,
        birthtime: origin.birthtime,
        mtimeMs: origin.mtime?.getTime() || null,
        atimeMs: origin.atime?.getTime() || null,
        birthtimeMs: origin.birthtime?.getTime() || null,
        isFile: ()=>origin.isFile,
        isDirectory: ()=>origin.isDirectory,
        isSymbolicLink: ()=>origin.isSymlink,
        isBlockDevice: ()=>false,
        isFIFO: ()=>false,
        isCharacterDevice: ()=>false,
        isSocket: ()=>false,
        ctime: origin.mtime,
        ctimeMs: origin.mtime?.getTime() || null
    };
}
function toBigInt(number) {
    if (number === null || number === undefined) return null;
    return BigInt(number);
}
function convertFileInfoToBigIntStats(origin) {
    return {
        dev: toBigInt(origin.dev),
        ino: toBigInt(origin.ino),
        mode: toBigInt(origin.mode),
        nlink: toBigInt(origin.nlink),
        uid: toBigInt(origin.uid),
        gid: toBigInt(origin.gid),
        rdev: toBigInt(origin.rdev),
        size: toBigInt(origin.size) || 0n,
        blksize: toBigInt(origin.blksize),
        blocks: toBigInt(origin.blocks),
        mtime: origin.mtime,
        atime: origin.atime,
        birthtime: origin.birthtime,
        mtimeMs: origin.mtime ? BigInt(origin.mtime.getTime()) : null,
        atimeMs: origin.atime ? BigInt(origin.atime.getTime()) : null,
        birthtimeMs: origin.birthtime ? BigInt(origin.birthtime.getTime()) : null,
        mtimeNs: origin.mtime ? BigInt(origin.mtime.getTime()) * 1000000n : null,
        atimeNs: origin.atime ? BigInt(origin.atime.getTime()) * 1000000n : null,
        birthtimeNs: origin.birthtime ? BigInt(origin.birthtime.getTime()) * 1000000n : null,
        isFile: ()=>origin.isFile,
        isDirectory: ()=>origin.isDirectory,
        isSymbolicLink: ()=>origin.isSymlink,
        isBlockDevice: ()=>false,
        isFIFO: ()=>false,
        isCharacterDevice: ()=>false,
        isSocket: ()=>false,
        ctime: origin.mtime,
        ctimeMs: origin.mtime ? BigInt(origin.mtime.getTime()) : null,
        ctimeNs: origin.mtime ? BigInt(origin.mtime.getTime()) * 1000000n : null
    };
}
function CFISBIS(fileInfo, bigInt) {
    if (bigInt) return convertFileInfoToBigIntStats(fileInfo);
    return convertFileInfoToStats(fileInfo);
}
function stat(path, optionsOrCallback, maybeCallback) {
    const callback = typeof optionsOrCallback === "function" ? optionsOrCallback : maybeCallback;
    const options = typeof optionsOrCallback === "object" ? optionsOrCallback : {
        bigint: false
    };
    if (!callback) throw new Error("No callback function supplied");
    Deno.stat(path).then((stat)=>callback(null, CFISBIS(stat, options.bigint)), (err)=>callback(denoErrorToNodeError(err, {
            syscall: "stat"
        })));
}
promisify(stat);
function statSync(path, options = {
    bigint: false,
    throwIfNoEntry: true
}) {
    try {
        const origin = Deno.statSync(path);
        return CFISBIS(origin, options.bigint);
    } catch (err) {
        if (options?.throwIfNoEntry === false && err instanceof Deno.errors.NotFound) {
            return;
        }
        if (err instanceof Error) {
            throw denoErrorToNodeError(err, {
                syscall: "stat"
            });
        } else {
            throw err;
        }
    }
}
function lstat(path, optionsOrCallback, maybeCallback) {
    const callback = typeof optionsOrCallback === "function" ? optionsOrCallback : maybeCallback;
    const options = typeof optionsOrCallback === "object" ? optionsOrCallback : {
        bigint: false
    };
    if (!callback) throw new Error("No callback function supplied");
    Deno.lstat(path).then((stat)=>callback(null, CFISBIS(stat, options.bigint)), (err)=>callback(err));
}
promisify(lstat);
"use strict";
const kType = Symbol("type");
const kStats = Symbol("stats");
const { F_OK =0 , W_OK =0 , R_OK =0 , X_OK =0 , COPYFILE_EXCL , COPYFILE_FICLONE , COPYFILE_FICLONE_FORCE , O_APPEND , O_CREAT , O_EXCL , O_RDONLY , O_RDWR , O_SYNC , O_TRUNC , O_WRONLY , S_IFBLK , S_IFCHR , S_IFDIR , S_IFIFO , S_IFLNK , S_IFMT , S_IFREG , S_IFSOCK , UV_FS_SYMLINK_DIR , UV_FS_SYMLINK_JUNCTION , UV_DIRENT_UNKNOWN , UV_DIRENT_FILE , UV_DIRENT_DIR , UV_DIRENT_LINK , UV_DIRENT_FIFO , UV_DIRENT_SOCKET , UV_DIRENT_CHAR , UV_DIRENT_BLOCK  } = fs;
const { errno: { EISDIR  }  } = os;
const kMinimumAccessMode = Math.min(F_OK, W_OK, R_OK, X_OK);
const kMaximumAccessMode = F_OK | W_OK | R_OK | X_OK;
const kDefaultCopyMode = 0;
const kMinimumCopyMode = Math.min(0, COPYFILE_EXCL, COPYFILE_FICLONE, COPYFILE_FICLONE_FORCE);
const kMaximumCopyMode = COPYFILE_EXCL | COPYFILE_FICLONE | COPYFILE_FICLONE_FORCE;
class Dirent {
    constructor(name, type){
        this.name = name;
        this[kType] = type;
    }
    isDirectory() {
        return this[kType] === UV_DIRENT_DIR;
    }
    isFile() {
        return this[kType] === UV_DIRENT_FILE;
    }
    isBlockDevice() {
        return this[kType] === UV_DIRENT_BLOCK;
    }
    isCharacterDevice() {
        return this[kType] === UV_DIRENT_CHAR;
    }
    isSymbolicLink() {
        return this[kType] === UV_DIRENT_LINK;
    }
    isFIFO() {
        return this[kType] === UV_DIRENT_FIFO;
    }
    isSocket() {
        return this[kType] === UV_DIRENT_SOCKET;
    }
}
class DirentFromStats extends Dirent {
    constructor(name, stats){
        super(name, null);
        this[kStats] = stats;
    }
}
for (const name of Reflect.ownKeys(Dirent.prototype)){
    if (name === "constructor") {
        continue;
    }
    DirentFromStats.prototype[name] = function() {
        return this[kStats][name]();
    };
}
Buffer.from(__default10.sep);
const nullCheck = hideStackFrames((path, propName, throwError = true)=>{
    const pathIsString = typeof path === "string";
    const pathIsUint8Array = isUint8Array(path);
    if (!pathIsString && !pathIsUint8Array || pathIsString && !path.includes("\u0000") || pathIsUint8Array && !path.includes(0)) {
        return;
    }
    const err = new ERR_INVALID_ARG_VALUE(propName, path, "must be a string or Uint8Array without null bytes");
    if (throwError) {
        throw err;
    }
    return err;
});
function StatsBase(dev, mode, nlink, uid, gid, rdev, blksize, ino, size, blocks) {
    this.dev = dev;
    this.mode = mode;
    this.nlink = nlink;
    this.uid = uid;
    this.gid = gid;
    this.rdev = rdev;
    this.blksize = blksize;
    this.ino = ino;
    this.size = size;
    this.blocks = blocks;
}
StatsBase.prototype.isDirectory = function() {
    return this._checkModeProperty(S_IFDIR);
};
StatsBase.prototype.isFile = function() {
    return this._checkModeProperty(S_IFREG);
};
StatsBase.prototype.isBlockDevice = function() {
    return this._checkModeProperty(S_IFBLK);
};
StatsBase.prototype.isCharacterDevice = function() {
    return this._checkModeProperty(S_IFCHR);
};
StatsBase.prototype.isSymbolicLink = function() {
    return this._checkModeProperty(S_IFLNK);
};
StatsBase.prototype.isFIFO = function() {
    return this._checkModeProperty(S_IFIFO);
};
StatsBase.prototype.isSocket = function() {
    return this._checkModeProperty(S_IFSOCK);
};
const kNsPerMsBigInt = 10n ** 6n;
function dateFromMs(ms) {
    return new Date(Number(ms) + 0.5);
}
function BigIntStats(dev, mode, nlink, uid, gid, rdev, blksize, ino, size, blocks, atimeNs, mtimeNs, ctimeNs, birthtimeNs) {
    Reflect.apply(StatsBase, this, [
        dev,
        mode,
        nlink,
        uid,
        gid,
        rdev,
        blksize,
        ino,
        size,
        blocks
    ]);
    this.atimeMs = atimeNs / kNsPerMsBigInt;
    this.mtimeMs = mtimeNs / kNsPerMsBigInt;
    this.ctimeMs = ctimeNs / kNsPerMsBigInt;
    this.birthtimeMs = birthtimeNs / kNsPerMsBigInt;
    this.atimeNs = atimeNs;
    this.mtimeNs = mtimeNs;
    this.ctimeNs = ctimeNs;
    this.birthtimeNs = birthtimeNs;
    this.atime = dateFromMs(this.atimeMs);
    this.mtime = dateFromMs(this.mtimeMs);
    this.ctime = dateFromMs(this.ctimeMs);
    this.birthtime = dateFromMs(this.birthtimeMs);
}
Object.setPrototypeOf(BigIntStats.prototype, StatsBase.prototype);
Object.setPrototypeOf(BigIntStats, StatsBase);
BigIntStats.prototype._checkModeProperty = function(property) {
    if (isWindows && (property === S_IFIFO || property === S_IFBLK || property === S_IFSOCK)) {
        return false;
    }
    return (this.mode & BigInt(S_IFMT)) === BigInt(property);
};
function Stats(dev, mode, nlink, uid, gid, rdev, blksize, ino, size, blocks, atimeMs, mtimeMs, ctimeMs, birthtimeMs) {
    StatsBase.call(this, dev, mode, nlink, uid, gid, rdev, blksize, ino, size, blocks);
    this.atimeMs = atimeMs;
    this.mtimeMs = mtimeMs;
    this.ctimeMs = ctimeMs;
    this.birthtimeMs = birthtimeMs;
    this.atime = dateFromMs(atimeMs);
    this.mtime = dateFromMs(mtimeMs);
    this.ctime = dateFromMs(ctimeMs);
    this.birthtime = dateFromMs(birthtimeMs);
}
Object.setPrototypeOf(Stats.prototype, StatsBase.prototype);
Object.setPrototypeOf(Stats, StatsBase);
Stats.prototype.isFile = StatsBase.prototype.isFile;
Stats.prototype._checkModeProperty = function(property) {
    if (isWindows && (property === S_IFIFO || property === S_IFBLK || property === S_IFSOCK)) {
        return false;
    }
    return (this.mode & S_IFMT) === property;
};
hideStackFrames((type)=>{
    let flags = 0;
    if (typeof type === "string") {
        switch(type){
            case "dir":
                flags |= UV_FS_SYMLINK_DIR;
                break;
            case "junction":
                flags |= UV_FS_SYMLINK_JUNCTION;
                break;
            case "file":
                break;
            default:
                throw new ERR_FS_INVALID_SYMLINK_TYPE(type);
        }
    }
    return flags;
});
hideStackFrames((offset, length, bufferLength)=>{
    if (offset < 0) {
        throw new ERR_OUT_OF_RANGE("offset", ">= 0", offset);
    }
    if (length < 0) {
        throw new ERR_OUT_OF_RANGE("length", ">= 0", length);
    }
    if (offset + length > bufferLength) {
        throw new ERR_OUT_OF_RANGE("length", `<= ${bufferLength - offset}`, length);
    }
});
hideStackFrames((offset, length, byteLength)=>{
    if (offset > byteLength) {
        throw new ERR_OUT_OF_RANGE("offset", `<= ${byteLength}`, offset);
    }
    if (length > byteLength - offset) {
        throw new ERR_OUT_OF_RANGE("length", `<= ${byteLength - offset}`, length);
    }
    if (length < 0) {
        throw new ERR_OUT_OF_RANGE("length", ">= 0", length);
    }
    validateInt32(length, "length", 0);
});
const validatePath = hideStackFrames((path, propName = "path")=>{
    if (typeof path !== "string" && !isUint8Array(path)) {
        throw new ERR_INVALID_ARG_TYPE(propName, [
            "string",
            "Buffer",
            "URL"
        ], path);
    }
    const err = nullCheck(path, propName, false);
    if (err !== undefined) {
        throw err;
    }
});
hideStackFrames((fileURLOrPath, propName = "path")=>{
    const path = toPathIfFileURL(fileURLOrPath);
    validatePath(path, propName);
    return path;
});
hideStackFrames((fd, propName = "fd")=>{
    if (Object.is(fd, -0)) {
        return 0;
    }
    validateInt32(fd, propName, 0);
    return fd;
});
hideStackFrames((buffers, propName = "buffers")=>{
    if (!Array.isArray(buffers)) {
        throw new ERR_INVALID_ARG_TYPE(propName, "ArrayBufferView[]", buffers);
    }
    for(let i = 0; i < buffers.length; i++){
        if (!isArrayBufferView(buffers[i])) {
            throw new ERR_INVALID_ARG_TYPE(propName, "ArrayBufferView[]", buffers);
        }
    }
    return buffers;
});
const defaultCpOptions = {
    dereference: false,
    errorOnExist: false,
    filter: undefined,
    force: true,
    preserveTimestamps: false,
    recursive: false
};
const defaultRmOptions = {
    recursive: false,
    force: false,
    retryDelay: 100,
    maxRetries: 0
};
const defaultRmdirOptions = {
    retryDelay: 100,
    maxRetries: 0,
    recursive: false
};
hideStackFrames((options)=>{
    if (options === undefined) {
        return {
            ...defaultCpOptions
        };
    }
    validateObject(options, "options");
    options = {
        ...defaultCpOptions,
        ...options
    };
    validateBoolean(options.dereference, "options.dereference");
    validateBoolean(options.errorOnExist, "options.errorOnExist");
    validateBoolean(options.force, "options.force");
    validateBoolean(options.preserveTimestamps, "options.preserveTimestamps");
    validateBoolean(options.recursive, "options.recursive");
    if (options.filter !== undefined) {
        validateFunction(options.filter, "options.filter");
    }
    return options;
});
hideStackFrames((path, options, expectDir, cb)=>{
    options = validateRmdirOptions(options, defaultRmOptions);
    validateBoolean(options.force, "options.force");
    stat(path, (err, stats)=>{
        if (err) {
            if (options.force && err.code === "ENOENT") {
                return cb(null, options);
            }
            return cb(err, options);
        }
        if (expectDir && !stats.isDirectory()) {
            return cb(false);
        }
        if (stats.isDirectory() && !options.recursive) {
            return cb(new ERR_FS_EISDIR({
                code: "EISDIR",
                message: "is a directory",
                path,
                syscall: "rm",
                errno: EISDIR
            }));
        }
        return cb(null, options);
    });
});
hideStackFrames((path, options, expectDir)=>{
    options = validateRmdirOptions(options, defaultRmOptions);
    validateBoolean(options.force, "options.force");
    if (!options.force || expectDir || !options.recursive) {
        const isDirectory = statSync(path, {
            throwIfNoEntry: !options.force
        })?.isDirectory();
        if (expectDir && !isDirectory) {
            return false;
        }
        if (isDirectory && !options.recursive) {
            throw new ERR_FS_EISDIR({
                code: "EISDIR",
                message: "is a directory",
                path,
                syscall: "rm",
                errno: EISDIR
            });
        }
    }
    return options;
});
process2.noDeprecation;
const validateRmdirOptions = hideStackFrames((options, defaults = defaultRmdirOptions)=>{
    if (options === undefined) {
        return defaults;
    }
    validateObject(options, "options");
    options = {
        ...defaults,
        ...options
    };
    validateBoolean(options.recursive, "options.recursive");
    validateInt32(options.retryDelay, "options.retryDelay", 0);
    validateUint32(options.maxRetries, "options.maxRetries");
    return options;
});
hideStackFrames((mode, type)=>{
    let min = kMinimumAccessMode;
    let max = kMaximumAccessMode;
    let def = F_OK;
    if (type === "copyFile") {
        min = kMinimumCopyMode;
        max = kMaximumCopyMode;
        def = mode || kDefaultCopyMode;
    } else {
        assert1(type === "access");
    }
    if (mode == null) {
        return def;
    }
    if (Number.isInteger(mode) && mode >= min && mode <= max) {
        return mode;
    }
    if (typeof mode !== "number") {
        throw new ERR_INVALID_ARG_TYPE("mode", "integer", mode);
    }
    throw new ERR_OUT_OF_RANGE("mode", `an integer >= ${min} && <= ${max}`, mode);
});
hideStackFrames((buffer, name)=>{
    if (typeof buffer === "string") {
        return;
    }
    if (typeof buffer === "object" && buffer !== null && typeof buffer.toString === "function" && Object.prototype.hasOwnProperty.call(buffer, "toString")) {
        return;
    }
    throw new ERR_INVALID_ARG_TYPE(name, [
        "string",
        "Buffer",
        "TypedArray",
        "DataView"
    ], buffer);
});
hideStackFrames((position)=>{
    if (typeof position === "number") {
        validateInteger(position, "position");
    } else if (typeof position === "bigint") {
        if (!(position >= -(2n ** 63n) && position <= 2n ** 63n - 1n)) {
            throw new ERR_OUT_OF_RANGE("position", `>= ${-(2n ** 63n)} && <= ${2n ** 63n - 1n}`, position);
        }
    } else {
        throw new ERR_INVALID_ARG_TYPE("position", [
            "integer",
            "bigint"
        ], position);
    }
});
Symbol("realpathCacheKey");
deprecate(()=>{}, "Implicit coercion of objects with own toString property is deprecated.", "DEP0162");
const DenoCommand1 = Deno[Deno.internal]?.nodeUnstable?.Command || Deno.Command;
class ChildProcess extends EventEmitter {
    exitCode = null;
    killed = false;
    pid;
    signalCode = null;
    spawnargs;
    spawnfile;
    stdin = null;
    stdout = null;
    stderr = null;
    stdio = [
        null,
        null,
        null
    ];
    #process;
    #spawned = deferred();
    constructor(command, args, options){
        super();
        const { env ={} , stdio =[
            "pipe",
            "pipe",
            "pipe"
        ] , cwd , shell =false , signal , windowsVerbatimArguments =false  } = options || {};
        const [stdin = "pipe", stdout = "pipe", stderr = "pipe", _channel] = normalizeStdioOption(stdio);
        const [cmd, cmdArgs] = buildCommand1(command, args || [], shell);
        this.spawnfile = cmd;
        this.spawnargs = [
            cmd,
            ...cmdArgs
        ];
        const stringEnv = mapValues(env, (value)=>value.toString());
        try {
            this.#process = new DenoCommand1(cmd, {
                args: cmdArgs,
                cwd,
                env: stringEnv,
                stdin: toDenoStdio(stdin),
                stdout: toDenoStdio(stdout),
                stderr: toDenoStdio(stderr),
                windowsRawArguments: windowsVerbatimArguments
            }).spawn();
            this.pid = this.#process.pid;
            if (stdin === "pipe") {
                assert(this.#process.stdin);
                this.stdin = mu.fromWeb(this.#process.stdin);
            }
            if (stdout === "pipe") {
                assert(this.#process.stdout);
                this.stdout = Au.fromWeb(this.#process.stdout);
            }
            if (stderr === "pipe") {
                assert(this.#process.stderr);
                this.stderr = Au.fromWeb(this.#process.stderr);
            }
            this.stdio[0] = this.stdin;
            this.stdio[1] = this.stdout;
            this.stdio[2] = this.stderr;
            nextTick1(()=>{
                this.emit("spawn");
                this.#spawned.resolve();
            });
            if (signal) {
                const onAbortListener = ()=>{
                    try {
                        if (this.kill("SIGKILL")) {
                            this.emit("error", new AbortError());
                        }
                    } catch (err) {
                        this.emit("error", err);
                    }
                };
                if (signal.aborted) {
                    nextTick1(onAbortListener);
                } else {
                    signal.addEventListener("abort", onAbortListener, {
                        once: true
                    });
                    this.addListener("exit", ()=>signal.removeEventListener("abort", onAbortListener));
                }
            }
            (async ()=>{
                const status = await this.#process.status;
                this.exitCode = status.code;
                this.#spawned.then(async ()=>{
                    const exitCode = this.signalCode == null ? this.exitCode : null;
                    const signalCode = this.signalCode == null ? null : this.signalCode;
                    this.emit("exit", exitCode, signalCode);
                    await this.#_waitForChildStreamsToClose();
                    this.#closePipes();
                    this.emit("close", exitCode, signalCode);
                });
            })();
        } catch (err) {
            this.#_handleError(err);
        }
    }
    kill(signal) {
        if (this.killed) {
            return this.killed;
        }
        const denoSignal = signal == null ? "SIGTERM" : toDenoSignal(signal);
        this.#closePipes();
        try {
            this.#process.kill(denoSignal);
        } catch (err) {
            const alreadyClosed = err instanceof TypeError || err instanceof Deno.errors.PermissionDenied;
            if (!alreadyClosed) {
                throw err;
            }
        }
        this.killed = true;
        this.signalCode = denoSignal;
        return this.killed;
    }
    ref() {
        this.#process.ref();
    }
    unref() {
        this.#process.unref();
    }
    disconnect() {
        warnNotImplemented("ChildProcess.prototype.disconnect");
    }
    async #_waitForChildStreamsToClose() {
        const promises = [];
        if (this.stdin && !this.stdin.destroyed) {
            assert(this.stdin);
            this.stdin.destroy();
            promises.push(waitForStreamToClose(this.stdin));
        }
        if (this.stdout && !this.stdout.destroyed) {
            promises.push(waitForReadableToClose(this.stdout));
        }
        if (this.stderr && !this.stderr.destroyed) {
            promises.push(waitForReadableToClose(this.stderr));
        }
        await Promise.all(promises);
    }
    #_handleError(err) {
        nextTick1(()=>{
            this.emit("error", err);
        });
    }
    #closePipes() {
        if (this.stdin) {
            assert(this.stdin);
            this.stdin.destroy();
        }
    }
}
const supportedNodeStdioTypes = [
    "pipe",
    "ignore",
    "inherit"
];
function toDenoStdio(pipe) {
    if (!supportedNodeStdioTypes.includes(pipe) || typeof pipe === "number" || pipe instanceof Lu) {
        notImplemented(`toDenoStdio pipe=${typeof pipe} (${pipe})`);
    }
    switch(pipe){
        case "pipe":
        case undefined:
        case null:
            return "piped";
        case "ignore":
            return "null";
        case "inherit":
            return "inherit";
        default:
            notImplemented(`toDenoStdio pipe=${typeof pipe} (${pipe})`);
    }
}
function toDenoSignal(signal) {
    if (typeof signal === "number") {
        for (const name of keys(os.signals)){
            if (os.signals[name] === signal) {
                return name;
            }
        }
        throw new ERR_UNKNOWN_SIGNAL(String(signal));
    }
    const denoSignal = signal;
    if (denoSignal in os.signals) {
        return denoSignal;
    }
    throw new ERR_UNKNOWN_SIGNAL(signal);
}
function keys(object) {
    return Object.keys(object);
}
function normalizeStdioOption(stdio = [
    "pipe",
    "pipe",
    "pipe"
]) {
    if (Array.isArray(stdio)) {
        return stdio;
    } else {
        switch(stdio){
            case "overlapped":
                if (isWindows) {
                    notImplemented("normalizeStdioOption overlapped (on windows)");
                }
                return [
                    "pipe",
                    "pipe",
                    "pipe"
                ];
            case "pipe":
                return [
                    "pipe",
                    "pipe",
                    "pipe"
                ];
            case "inherit":
                return [
                    "inherit",
                    "inherit",
                    "inherit"
                ];
            case "ignore":
                return [
                    "ignore",
                    "ignore",
                    "ignore"
                ];
            default:
                notImplemented(`normalizeStdioOption stdio=${typeof stdio} (${stdio})`);
        }
    }
}
function waitForReadableToClose(readable) {
    readable.resume();
    return waitForStreamToClose(readable);
}
function waitForStreamToClose(stream) {
    const promise = deferred();
    const cleanup = ()=>{
        stream.removeListener("close", onClose);
        stream.removeListener("error", onError);
    };
    const onClose = ()=>{
        cleanup();
        promise.resolve();
    };
    const onError = (err)=>{
        cleanup();
        promise.reject(err);
    };
    stream.once("close", onClose);
    stream.once("error", onError);
    return promise;
}
function buildCommand1(file, args, shell) {
    if (file === Deno.execPath()) {
        args = toDenoArgs(args);
    }
    if (shell) {
        const command = [
            file,
            ...args
        ].join(" ");
        if (isWindows) {
            if (typeof shell === "string") {
                file = shell;
            } else {
                file = Deno.env.get("comspec") || "cmd.exe";
            }
            if (/^(?:.*\\)?cmd(?:\.exe)?$/i.test(file)) {
                args = [
                    "/d",
                    "/s",
                    "/c",
                    `"${command}"`
                ];
            } else {
                args = [
                    "-c",
                    command
                ];
            }
        } else {
            if (typeof shell === "string") {
                file = shell;
            } else {
                file = "/bin/sh";
            }
            args = [
                "-c",
                command
            ];
        }
    }
    return [
        file,
        args
    ];
}
const kLongArg = {
    type: 1
};
const kShortArg = {
    type: 2
};
const kNodeFlagsMap = new Map([
    [
        "--build-snapshot",
        kLongArg
    ],
    [
        "-c",
        kShortArg
    ],
    [
        "--check",
        kLongArg
    ],
    [
        "-C",
        kShortArg
    ],
    [
        "--conditions",
        kLongArg
    ],
    [
        "--cpu-prof-dir",
        kLongArg
    ],
    [
        "--cpu-prof-interval",
        kLongArg
    ],
    [
        "--cpu-prof-name",
        kLongArg
    ],
    [
        "--diagnostic-dir",
        kLongArg
    ],
    [
        "--disable-proto",
        kLongArg
    ],
    [
        "--dns-result-order",
        kLongArg
    ],
    [
        "-e",
        kShortArg
    ],
    [
        "--eval",
        kLongArg
    ],
    [
        "--experimental-loader",
        kLongArg
    ],
    [
        "--experimental-policy",
        kLongArg
    ],
    [
        "--experimental-specifier-resolution",
        kLongArg
    ],
    [
        "--heapsnapshot-near-heap-limit",
        kLongArg
    ],
    [
        "--heapsnapshot-signal",
        kLongArg
    ],
    [
        "--heap-prof-dir",
        kLongArg
    ],
    [
        "--heap-prof-interval",
        kLongArg
    ],
    [
        "--heap-prof-name",
        kLongArg
    ],
    [
        "--icu-data-dir",
        kLongArg
    ],
    [
        "--input-type",
        kLongArg
    ],
    [
        "--inspect-publish-uid",
        kLongArg
    ],
    [
        "--max-http-header-size",
        kLongArg
    ],
    [
        "--openssl-config",
        kLongArg
    ],
    [
        "-p",
        kShortArg
    ],
    [
        "--print",
        kLongArg
    ],
    [
        "--policy-integrity",
        kLongArg
    ],
    [
        "--prof-process",
        kLongArg
    ],
    [
        "-r",
        kShortArg
    ],
    [
        "--require",
        kLongArg
    ],
    [
        "--redirect-warnings",
        kLongArg
    ],
    [
        "--report-dir",
        kLongArg
    ],
    [
        "--report-directory",
        kLongArg
    ],
    [
        "--report-filename",
        kLongArg
    ],
    [
        "--report-signal",
        kLongArg
    ],
    [
        "--secure-heap",
        kLongArg
    ],
    [
        "--secure-heap-min",
        kLongArg
    ],
    [
        "--snapshot-blob",
        kLongArg
    ],
    [
        "--title",
        kLongArg
    ],
    [
        "--tls-cipher-list",
        kLongArg
    ],
    [
        "--tls-keylog",
        kLongArg
    ],
    [
        "--unhandled-rejections",
        kLongArg
    ],
    [
        "--use-largepages",
        kLongArg
    ],
    [
        "--v8-pool-size",
        kLongArg
    ]
]);
const kDenoSubcommands = new Set([
    "bench",
    "bundle",
    "cache",
    "check",
    "compile",
    "completions",
    "coverage",
    "doc",
    "eval",
    "fmt",
    "help",
    "info",
    "init",
    "install",
    "lint",
    "lsp",
    "repl",
    "run",
    "tasks",
    "test",
    "types",
    "uninstall",
    "upgrade",
    "vendor"
]);
function toDenoArgs(args) {
    if (args.length === 0) {
        return args;
    }
    const denoArgs = [];
    let useRunArgs = true;
    for(let i = 0; i < args.length; i++){
        const arg = args[i];
        if (arg.charAt(0) !== "-" || arg === "--") {
            if (kDenoSubcommands.has(arg)) {
                return args;
            }
            for(let j = i; j < args.length; j++){
                denoArgs.push(args[j]);
            }
            break;
        }
        let flag = arg;
        let flagInfo = kNodeFlagsMap.get(arg);
        let isLongWithValue = false;
        let flagValue;
        if (flagInfo === undefined) {
            const splitAt = arg.indexOf("=");
            if (splitAt !== -1) {
                flag = arg.slice(0, splitAt);
                flagInfo = kNodeFlagsMap.get(flag);
                flagValue = arg.slice(splitAt + 1);
                isLongWithValue = true;
            }
        }
        if (flagInfo === undefined) {
            denoArgs.push(arg);
            continue;
        }
        if (flagValue === undefined) {
            i++;
            if (i >= args.length) {
                denoArgs.push(arg);
                continue;
            }
            flagValue = args[i];
        }
        if (flag === "-e" || flag === "--eval") {
            denoArgs.push("eval", flagValue);
            useRunArgs = false;
        } else if (isLongWithValue) {
            denoArgs.push(arg);
        } else {
            denoArgs.push(flag, flagValue);
        }
    }
    if (useRunArgs) {
        denoArgs.unshift("run", "-A", "--unstable");
    }
    return denoArgs;
}
var State;
(function(State) {
    State[State["PASSTHROUGH"] = 0] = "PASSTHROUGH";
    State[State["PERCENT"] = 1] = "PERCENT";
    State[State["POSITIONAL"] = 2] = "POSITIONAL";
    State[State["PRECISION"] = 3] = "PRECISION";
    State[State["WIDTH"] = 4] = "WIDTH";
})(State || (State = {}));
var WorP;
(function(WorP) {
    WorP[WorP["WIDTH"] = 0] = "WIDTH";
    WorP[WorP["PRECISION"] = 1] = "PRECISION";
})(WorP || (WorP = {}));
class Flags {
    plus;
    dash;
    sharp;
    space;
    zero;
    lessthan;
    width = -1;
    precision = -1;
}
const min = Math.min;
const UNICODE_REPLACEMENT_CHARACTER = "\ufffd";
const FLOAT_REGEXP = /(-?)(\d)\.?(\d*)e([+-])(\d+)/;
var F;
(function(F) {
    F[F["sign"] = 1] = "sign";
    F[F["mantissa"] = 2] = "mantissa";
    F[F["fractional"] = 3] = "fractional";
    F[F["esign"] = 4] = "esign";
    F[F["exponent"] = 5] = "exponent";
})(F || (F = {}));
class Printf {
    format;
    args;
    i;
    state = State.PASSTHROUGH;
    verb = "";
    buf = "";
    argNum = 0;
    flags = new Flags();
    haveSeen;
    tmpError;
    constructor(format, ...args){
        this.format = format;
        this.args = args;
        this.haveSeen = Array.from({
            length: args.length
        });
        this.i = 0;
    }
    doPrintf() {
        for(; this.i < this.format.length; ++this.i){
            const c = this.format[this.i];
            switch(this.state){
                case State.PASSTHROUGH:
                    if (c === "%") {
                        this.state = State.PERCENT;
                    } else {
                        this.buf += c;
                    }
                    break;
                case State.PERCENT:
                    if (c === "%") {
                        this.buf += c;
                        this.state = State.PASSTHROUGH;
                    } else {
                        this.handleFormat();
                    }
                    break;
                default:
                    throw Error("Should be unreachable, certainly a bug in the lib.");
            }
        }
        let extras = false;
        let err = "%!(EXTRA";
        for(let i = 0; i !== this.haveSeen.length; ++i){
            if (!this.haveSeen[i]) {
                extras = true;
                err += ` '${Deno.inspect(this.args[i])}'`;
            }
        }
        err += ")";
        if (extras) {
            this.buf += err;
        }
        return this.buf;
    }
    handleFormat() {
        this.flags = new Flags();
        const flags = this.flags;
        for(; this.i < this.format.length; ++this.i){
            const c = this.format[this.i];
            switch(this.state){
                case State.PERCENT:
                    switch(c){
                        case "[":
                            this.handlePositional();
                            this.state = State.POSITIONAL;
                            break;
                        case "+":
                            flags.plus = true;
                            break;
                        case "<":
                            flags.lessthan = true;
                            break;
                        case "-":
                            flags.dash = true;
                            flags.zero = false;
                            break;
                        case "#":
                            flags.sharp = true;
                            break;
                        case " ":
                            flags.space = true;
                            break;
                        case "0":
                            flags.zero = !flags.dash;
                            break;
                        default:
                            if ("1" <= c && c <= "9" || c === "." || c === "*") {
                                if (c === ".") {
                                    this.flags.precision = 0;
                                    this.state = State.PRECISION;
                                    this.i++;
                                } else {
                                    this.state = State.WIDTH;
                                }
                                this.handleWidthAndPrecision(flags);
                            } else {
                                this.handleVerb();
                                return;
                            }
                    }
                    break;
                case State.POSITIONAL:
                    if (c === "*") {
                        const worp = this.flags.precision === -1 ? WorP.WIDTH : WorP.PRECISION;
                        this.handleWidthOrPrecisionRef(worp);
                        this.state = State.PERCENT;
                        break;
                    } else {
                        this.handleVerb();
                        return;
                    }
                default:
                    throw new Error(`Should not be here ${this.state}, library bug!`);
            }
        }
    }
    handleWidthOrPrecisionRef(wOrP) {
        if (this.argNum >= this.args.length) {
            return;
        }
        const arg = this.args[this.argNum];
        this.haveSeen[this.argNum] = true;
        if (typeof arg === "number") {
            switch(wOrP){
                case WorP.WIDTH:
                    this.flags.width = arg;
                    break;
                default:
                    this.flags.precision = arg;
            }
        } else {
            const tmp = wOrP === WorP.WIDTH ? "WIDTH" : "PREC";
            this.tmpError = `%!(BAD ${tmp} '${this.args[this.argNum]}')`;
        }
        this.argNum++;
    }
    handleWidthAndPrecision(flags) {
        const fmt = this.format;
        for(; this.i !== this.format.length; ++this.i){
            const c = fmt[this.i];
            switch(this.state){
                case State.WIDTH:
                    switch(c){
                        case ".":
                            this.flags.precision = 0;
                            this.state = State.PRECISION;
                            break;
                        case "*":
                            this.handleWidthOrPrecisionRef(WorP.WIDTH);
                            break;
                        default:
                            {
                                const val = parseInt(c);
                                if (isNaN(val)) {
                                    this.i--;
                                    this.state = State.PERCENT;
                                    return;
                                }
                                flags.width = flags.width == -1 ? 0 : flags.width;
                                flags.width *= 10;
                                flags.width += val;
                            }
                    }
                    break;
                case State.PRECISION:
                    {
                        if (c === "*") {
                            this.handleWidthOrPrecisionRef(WorP.PRECISION);
                            break;
                        }
                        const val1 = parseInt(c);
                        if (isNaN(val1)) {
                            this.i--;
                            this.state = State.PERCENT;
                            return;
                        }
                        flags.precision *= 10;
                        flags.precision += val1;
                        break;
                    }
                default:
                    throw new Error("can't be here. bug.");
            }
        }
    }
    handlePositional() {
        if (this.format[this.i] !== "[") {
            throw new Error("Can't happen? Bug.");
        }
        let positional = 0;
        const format = this.format;
        this.i++;
        let err = false;
        for(; this.i !== this.format.length; ++this.i){
            if (format[this.i] === "]") {
                break;
            }
            positional *= 10;
            const val = parseInt(format[this.i]);
            if (isNaN(val)) {
                this.tmpError = "%!(BAD INDEX)";
                err = true;
            }
            positional += val;
        }
        if (positional - 1 >= this.args.length) {
            this.tmpError = "%!(BAD INDEX)";
            err = true;
        }
        this.argNum = err ? this.argNum : positional - 1;
        return;
    }
    handleLessThan() {
        const arg = this.args[this.argNum];
        if ((arg || {}).constructor.name !== "Array") {
            throw new Error(`arg ${arg} is not an array. Todo better error handling`);
        }
        let str = "[ ";
        for(let i = 0; i !== arg.length; ++i){
            if (i !== 0) str += ", ";
            str += this._handleVerb(arg[i]);
        }
        return str + " ]";
    }
    handleVerb() {
        const verb = this.format[this.i];
        this.verb = verb;
        if (this.tmpError) {
            this.buf += this.tmpError;
            this.tmpError = undefined;
            if (this.argNum < this.haveSeen.length) {
                this.haveSeen[this.argNum] = true;
            }
        } else if (this.args.length <= this.argNum) {
            this.buf += `%!(MISSING '${verb}')`;
        } else {
            const arg = this.args[this.argNum];
            this.haveSeen[this.argNum] = true;
            if (this.flags.lessthan) {
                this.buf += this.handleLessThan();
            } else {
                this.buf += this._handleVerb(arg);
            }
        }
        this.argNum++;
        this.state = State.PASSTHROUGH;
    }
    _handleVerb(arg) {
        switch(this.verb){
            case "t":
                return this.pad(arg.toString());
            case "b":
                return this.fmtNumber(arg, 2);
            case "c":
                return this.fmtNumberCodePoint(arg);
            case "d":
                return this.fmtNumber(arg, 10);
            case "o":
                return this.fmtNumber(arg, 8);
            case "x":
                return this.fmtHex(arg);
            case "X":
                return this.fmtHex(arg, true);
            case "e":
                return this.fmtFloatE(arg);
            case "E":
                return this.fmtFloatE(arg, true);
            case "f":
            case "F":
                return this.fmtFloatF(arg);
            case "g":
                return this.fmtFloatG(arg);
            case "G":
                return this.fmtFloatG(arg, true);
            case "s":
                return this.fmtString(arg);
            case "T":
                return this.fmtString(typeof arg);
            case "v":
                return this.fmtV(arg);
            case "j":
                return this.fmtJ(arg);
            default:
                return `%!(BAD VERB '${this.verb}')`;
        }
    }
    pad(s) {
        const padding = this.flags.zero ? "0" : " ";
        if (this.flags.dash) {
            return s.padEnd(this.flags.width, padding);
        }
        return s.padStart(this.flags.width, padding);
    }
    padNum(nStr, neg) {
        let sign;
        if (neg) {
            sign = "-";
        } else if (this.flags.plus || this.flags.space) {
            sign = this.flags.plus ? "+" : " ";
        } else {
            sign = "";
        }
        const zero = this.flags.zero;
        if (!zero) {
            nStr = sign + nStr;
        }
        const pad = zero ? "0" : " ";
        const len = zero ? this.flags.width - sign.length : this.flags.width;
        if (this.flags.dash) {
            nStr = nStr.padEnd(len, pad);
        } else {
            nStr = nStr.padStart(len, pad);
        }
        if (zero) {
            nStr = sign + nStr;
        }
        return nStr;
    }
    fmtNumber(n, radix, upcase = false) {
        let num = Math.abs(n).toString(radix);
        const prec = this.flags.precision;
        if (prec !== -1) {
            this.flags.zero = false;
            num = n === 0 && prec === 0 ? "" : num;
            while(num.length < prec){
                num = "0" + num;
            }
        }
        let prefix = "";
        if (this.flags.sharp) {
            switch(radix){
                case 2:
                    prefix += "0b";
                    break;
                case 8:
                    prefix += num.startsWith("0") ? "" : "0";
                    break;
                case 16:
                    prefix += "0x";
                    break;
                default:
                    throw new Error("cannot handle base: " + radix);
            }
        }
        num = num.length === 0 ? num : prefix + num;
        if (upcase) {
            num = num.toUpperCase();
        }
        return this.padNum(num, n < 0);
    }
    fmtNumberCodePoint(n) {
        let s = "";
        try {
            s = String.fromCodePoint(n);
        } catch  {
            s = UNICODE_REPLACEMENT_CHARACTER;
        }
        return this.pad(s);
    }
    fmtFloatSpecial(n) {
        if (isNaN(n)) {
            this.flags.zero = false;
            return this.padNum("NaN", false);
        }
        if (n === Number.POSITIVE_INFINITY) {
            this.flags.zero = false;
            this.flags.plus = true;
            return this.padNum("Inf", false);
        }
        if (n === Number.NEGATIVE_INFINITY) {
            this.flags.zero = false;
            return this.padNum("Inf", true);
        }
        return "";
    }
    roundFractionToPrecision(fractional, precision) {
        let round = false;
        if (fractional.length > precision) {
            fractional = "1" + fractional;
            let tmp = parseInt(fractional.slice(0, precision + 2)) / 10;
            tmp = Math.round(tmp);
            fractional = Math.floor(tmp).toString();
            round = fractional[0] === "2";
            fractional = fractional.slice(1);
        } else {
            while(fractional.length < precision){
                fractional += "0";
            }
        }
        return [
            fractional,
            round
        ];
    }
    fmtFloatE(n, upcase = false) {
        const special = this.fmtFloatSpecial(n);
        if (special !== "") {
            return special;
        }
        const m = n.toExponential().match(FLOAT_REGEXP);
        if (!m) {
            throw Error("can't happen, bug");
        }
        let fractional = m[F.fractional];
        const precision = this.flags.precision !== -1 ? this.flags.precision : 6;
        let rounding = false;
        [fractional, rounding] = this.roundFractionToPrecision(fractional, precision);
        let e = m[F.exponent];
        let esign = m[F.esign];
        let mantissa = parseInt(m[F.mantissa]);
        if (rounding) {
            mantissa += 1;
            if (10 <= mantissa) {
                mantissa = 1;
                const r = parseInt(esign + e) + 1;
                e = r.toString();
                esign = r < 0 ? "-" : "+";
            }
        }
        e = e.length == 1 ? "0" + e : e;
        const val = `${mantissa}.${fractional}${upcase ? "E" : "e"}${esign}${e}`;
        return this.padNum(val, n < 0);
    }
    fmtFloatF(n) {
        const special = this.fmtFloatSpecial(n);
        if (special !== "") {
            return special;
        }
        function expandNumber(n) {
            if (Number.isSafeInteger(n)) {
                return n.toString() + ".";
            }
            const t = n.toExponential().split("e");
            let m = t[0].replace(".", "");
            const e = parseInt(t[1]);
            if (e < 0) {
                let nStr = "0.";
                for(let i = 0; i !== Math.abs(e) - 1; ++i){
                    nStr += "0";
                }
                return nStr += m;
            } else {
                const splIdx = e + 1;
                while(m.length < splIdx){
                    m += "0";
                }
                return m.slice(0, splIdx) + "." + m.slice(splIdx);
            }
        }
        const val = expandNumber(Math.abs(n));
        const arr = val.split(".");
        let dig = arr[0];
        let fractional = arr[1];
        const precision = this.flags.precision !== -1 ? this.flags.precision : 6;
        let round = false;
        [fractional, round] = this.roundFractionToPrecision(fractional, precision);
        if (round) {
            dig = (parseInt(dig) + 1).toString();
        }
        return this.padNum(`${dig}.${fractional}`, n < 0);
    }
    fmtFloatG(n, upcase = false) {
        const special = this.fmtFloatSpecial(n);
        if (special !== "") {
            return special;
        }
        let P = this.flags.precision !== -1 ? this.flags.precision : 6;
        P = P === 0 ? 1 : P;
        const m = n.toExponential().match(FLOAT_REGEXP);
        if (!m) {
            throw Error("can't happen");
        }
        const X = parseInt(m[F.exponent]) * (m[F.esign] === "-" ? -1 : 1);
        let nStr = "";
        if (P > X && X >= -4) {
            this.flags.precision = P - (X + 1);
            nStr = this.fmtFloatF(n);
            if (!this.flags.sharp) {
                nStr = nStr.replace(/\.?0*$/, "");
            }
        } else {
            this.flags.precision = P - 1;
            nStr = this.fmtFloatE(n);
            if (!this.flags.sharp) {
                nStr = nStr.replace(/\.?0*e/, upcase ? "E" : "e");
            }
        }
        return nStr;
    }
    fmtString(s) {
        if (this.flags.precision !== -1) {
            s = s.slice(0, this.flags.precision);
        }
        return this.pad(s);
    }
    fmtHex(val, upper = false) {
        switch(typeof val){
            case "number":
                return this.fmtNumber(val, 16, upper);
            case "string":
                {
                    const sharp = this.flags.sharp && val.length !== 0;
                    let hex = sharp ? "0x" : "";
                    const prec = this.flags.precision;
                    const end = prec !== -1 ? min(prec, val.length) : val.length;
                    for(let i = 0; i !== end; ++i){
                        if (i !== 0 && this.flags.space) {
                            hex += sharp ? " 0x" : " ";
                        }
                        const c = (val.charCodeAt(i) & 0xff).toString(16);
                        hex += c.length === 1 ? `0${c}` : c;
                    }
                    if (upper) {
                        hex = hex.toUpperCase();
                    }
                    return this.pad(hex);
                }
            default:
                throw new Error("currently only number and string are implemented for hex");
        }
    }
    fmtV(val) {
        if (this.flags.sharp) {
            const options = this.flags.precision !== -1 ? {
                depth: this.flags.precision
            } : {};
            return this.pad(Deno.inspect(val, options));
        } else {
            const p = this.flags.precision;
            return p === -1 ? val.toString() : val.toString().slice(0, p);
        }
    }
    fmtJ(val) {
        return JSON.stringify(val);
    }
}
let debugImpls;
function initializeDebugEnv(debugEnv) {
    debugImpls = Object.create(null);
    if (debugEnv) {
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replaceAll("*", ".*").replaceAll(",", "$|^");
        const debugEnvRegex = new RegExp(`^${debugEnv}$`, "i");
        (str)=>debugEnvRegex.exec(str) !== null;
    } else {
        ()=>false;
    }
}
let debugEnv;
try {
    debugEnv = Deno.env.get("NODE_DEBUG") ?? "";
} catch (error) {
    if (error instanceof Deno.errors.PermissionDenied) {
        debugEnv = "";
    } else {
        throw error;
    }
}
initializeDebugEnv(debugEnv);
({
    ...mod2
});
var valueType;
(function(valueType) {
    valueType[valueType["noIterator"] = 0] = "noIterator";
    valueType[valueType["isArray"] = 1] = "isArray";
    valueType[valueType["isSet"] = 2] = "isSet";
    valueType[valueType["isMap"] = 3] = "isMap";
})(valueType || (valueType = {}));
const MAX_BUFFER = 1024 * 1024;
function spawn(command, argsOrOptions, maybeOptions) {
    const args = Array.isArray(argsOrOptions) ? argsOrOptions : [];
    const options = !Array.isArray(argsOrOptions) && argsOrOptions != null ? argsOrOptions : maybeOptions;
    validateAbortSignal(options?.signal, "options.signal");
    return new ChildProcess(command, args, options);
}
function normalizeExecArgs(command, optionsOrCallback, maybeCallback) {
    let callback = maybeCallback;
    if (typeof optionsOrCallback === "function") {
        callback = optionsOrCallback;
        optionsOrCallback = undefined;
    }
    const options = {
        ...optionsOrCallback
    };
    options.shell = typeof options.shell === "string" ? options.shell : true;
    return {
        file: command,
        options: options,
        callback: callback
    };
}
function exec(command, optionsOrCallback, maybeCallback) {
    const opts = normalizeExecArgs(command, optionsOrCallback, maybeCallback);
    return execFile(opts.file, opts.options, opts.callback);
}
const customPromiseExecFunction = (orig)=>{
    return (...args)=>{
        const { promise , resolve , reject  } = createDeferredPromise();
        promise.child = orig(...args, (err, stdout, stderr)=>{
            if (err !== null) {
                const _err = err;
                _err.stdout = stdout;
                _err.stderr = stderr;
                reject && reject(_err);
            } else {
                resolve && resolve({
                    stdout,
                    stderr
                });
            }
        });
        return promise;
    };
};
Object.defineProperty(exec, promisify.custom, {
    enumerable: false,
    value: customPromiseExecFunction(exec)
});
class ExecFileError extends Error {
    code;
    constructor(message){
        super(message);
        this.code = "UNKNOWN";
    }
}
function execFile(file, argsOrOptionsOrCallback, optionsOrCallback, maybeCallback) {
    let args = [];
    let options = {};
    let callback;
    if (Array.isArray(argsOrOptionsOrCallback)) {
        args = argsOrOptionsOrCallback;
    } else if (argsOrOptionsOrCallback instanceof Function) {
        callback = argsOrOptionsOrCallback;
    } else if (argsOrOptionsOrCallback) {
        options = argsOrOptionsOrCallback;
    }
    if (optionsOrCallback instanceof Function) {
        callback = optionsOrCallback;
    } else if (optionsOrCallback) {
        options = optionsOrCallback;
        callback = maybeCallback;
    }
    const execOptions = {
        encoding: "utf8",
        timeout: 0,
        maxBuffer: MAX_BUFFER,
        killSignal: "SIGTERM",
        shell: false,
        ...options
    };
    if (!Number.isInteger(execOptions.timeout) || execOptions.timeout < 0) {
        throw new ERR_OUT_OF_RANGE("timeout", "an unsigned integer", execOptions.timeout);
    }
    if (execOptions.maxBuffer < 0) {
        throw new ERR_OUT_OF_RANGE("options.maxBuffer", "a positive number", execOptions.maxBuffer);
    }
    const spawnOptions = {
        cwd: execOptions.cwd,
        env: execOptions.env,
        gid: execOptions.gid,
        shell: execOptions.shell,
        signal: execOptions.signal,
        uid: execOptions.uid,
        windowsHide: !!execOptions.windowsHide,
        windowsVerbatimArguments: !!execOptions.windowsVerbatimArguments
    };
    const child = spawn(file, args, spawnOptions);
    let encoding;
    const _stdout = [];
    const _stderr = [];
    if (execOptions.encoding !== "buffer" && Buffer.isEncoding(execOptions.encoding)) {
        encoding = execOptions.encoding;
    } else {
        encoding = null;
    }
    let stdoutLen = 0;
    let stderrLen = 0;
    let killed = false;
    let exited = false;
    let timeoutId;
    let ex = null;
    let cmd = file;
    function exithandler(code = 0, signal) {
        if (exited) return;
        exited = true;
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        if (!callback) return;
        let stdout;
        let stderr;
        if (encoding || child.stdout && child.stdout.readableEncoding) {
            stdout = _stdout.join("");
        } else {
            stdout = Buffer.concat(_stdout);
        }
        if (encoding || child.stderr && child.stderr.readableEncoding) {
            stderr = _stderr.join("");
        } else {
            stderr = Buffer.concat(_stderr);
        }
        if (!ex && code === 0 && signal === null) {
            callback(null, stdout, stderr);
            return;
        }
        if (args?.length) {
            cmd += ` ${args.join(" ")}`;
        }
        if (!ex) {
            ex = new ExecFileError("Command failed: " + cmd + "\n" + stderr);
            ex.code = code < 0 ? getSystemErrorName(code) : code;
            ex.killed = child.killed || killed;
            ex.signal = signal;
        }
        ex.cmd = cmd;
        callback(ex, stdout, stderr);
    }
    function errorhandler(e) {
        ex = e;
        if (child.stdout) {
            child.stdout.destroy();
        }
        if (child.stderr) {
            child.stderr.destroy();
        }
        exithandler();
    }
    function kill() {
        if (child.stdout) {
            child.stdout.destroy();
        }
        if (child.stderr) {
            child.stderr.destroy();
        }
        killed = true;
        try {
            child.kill(execOptions.killSignal);
        } catch (e) {
            if (e) {
                ex = e;
            }
            exithandler();
        }
    }
    if (execOptions.timeout > 0) {
        timeoutId = setTimeout(function delayedKill() {
            kill();
            timeoutId = null;
        }, execOptions.timeout);
    }
    if (child.stdout) {
        if (encoding) {
            child.stdout.setEncoding(encoding);
        }
        child.stdout.on("data", function onChildStdout(chunk) {
            if (execOptions.maxBuffer === Infinity) {
                ArrayPrototypePush(_stdout, chunk);
                return;
            }
            const encoding = child.stdout?.readableEncoding;
            const length = encoding ? Buffer.byteLength(chunk, encoding) : chunk.length;
            const slice = encoding ? StringPrototypeSlice : (buf, ...args)=>buf.slice(...args);
            stdoutLen += length;
            if (stdoutLen > execOptions.maxBuffer) {
                const truncatedLen = execOptions.maxBuffer - (stdoutLen - length);
                ArrayPrototypePush(_stdout, slice(chunk, 0, truncatedLen));
                ex = new ERR_CHILD_PROCESS_STDIO_MAXBUFFER("stdout");
                kill();
            } else {
                ArrayPrototypePush(_stdout, chunk);
            }
        });
    }
    if (child.stderr) {
        if (encoding) {
            child.stderr.setEncoding(encoding);
        }
        child.stderr.on("data", function onChildStderr(chunk) {
            if (execOptions.maxBuffer === Infinity) {
                ArrayPrototypePush(_stderr, chunk);
                return;
            }
            const encoding = child.stderr?.readableEncoding;
            const length = encoding ? Buffer.byteLength(chunk, encoding) : chunk.length;
            const slice = encoding ? StringPrototypeSlice : (buf, ...args)=>buf.slice(...args);
            stderrLen += length;
            if (stderrLen > execOptions.maxBuffer) {
                const truncatedLen = execOptions.maxBuffer - (stderrLen - length);
                ArrayPrototypePush(_stderr, slice(chunk, 0, truncatedLen));
                ex = new ERR_CHILD_PROCESS_STDIO_MAXBUFFER("stderr");
                kill();
            } else {
                ArrayPrototypePush(_stderr, chunk);
            }
        });
    }
    child.addListener("close", exithandler);
    child.addListener("error", errorhandler);
    return child;
}
function launch({ config , scripts  }) {
    const [command] = Deno.args;
    if (!command) {
        showAllCommands(config, scripts);
        return;
    }
    const scheme = scripts[command];
    if (!scheme) {
        console.log("Unknown command");
        showTheMostSimilarCommand(config, scripts, command);
        return;
    }
    const replacer = (_, group)=>Deno.env.get(group) + SEP;
    scheme.dir = scheme.dir || Deno.cwd();
    scheme.dir = scheme.dir + SEP;
    scheme.dir = scheme.dir.replace(config.envRegexp, replacer);
    scheme.dir = resolve2(scheme.dir);
    let cmdToBuild = scheme.cmd;
    let finalArgs = Deno.args.slice(1);
    if (typeof cmdToBuild === "function") {
        const result = cmdToBuild({
            args: [
                ...finalArgs
            ]
        });
        if (Array.isArray(result)) {
            cmdToBuild = result;
        } else {
            finalArgs = result.args;
            cmdToBuild = result.cmd;
        }
    }
    const cmd = buildCommand(config, {
        path: scheme.dir
    }, cmdToBuild).concat(" ").concat(finalArgs.join(" "));
    spawn(cmd, {
        stdio: 'inherit',
        shell: true,
        cwd: scheme.dir
    });
}
const importMeta = {
    url: "file:///home/gbenm/code/personal/launch/cli/main.ts",
    main: import.meta.main
};
async function main(config) {
    await cliStatus();
    const moduleFile = scriptsFile(config);
    await createScriptsFileIfNotExists(moduleFile);
    const { default: getScripts  } = await import(`file://${moduleFile}`);
    const scripts = getScripts({
        cmd: cmdBuild
    });
    launch({
        config,
        scripts
    });
}
async function createScriptsFileIfNotExists(file) {
    if (await exists(file)) return;
    Deno.writeTextFileSync(file, __default);
}
async function cliStatus() {
    const jsonResponse = await fetch("https://api.github.com/repos/gbenm/launch/releases/latest");
    const { tag_name  } = await jsonResponse.json();
    if (tag_name !== __default7) {
        console.log(`There is a new version of launch available: ${tag_name}`);
    }
}
if (importMeta.main) {
    main(__default6);
}
