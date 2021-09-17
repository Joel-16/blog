"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = void 0;
var a;
if (process.env.NODE_ENV === 'production') {
    a = {
        type: 'postgres',
        autoLoadEntities: true,
        entities: [],
        url: 'postgres://bspoptrbdtspqs:cca87c2a6d5ebebaafce670a7af05b77cdc775353514fa6f8efeecc315d521c1@ec2-34-228-100-83.compute-1.amazonaws.com:5432/dape3pbvai4hkn',
        ssl: {
            rejectUnauthorized: false
        },
        synchronize: true
    };
}
else {
    a = {
        type: 'postgres',
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "5432",
        database: "blog",
        autoLoadEntities: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true
    };
}
exports.b = a;
//# sourceMappingURL=database.js.map