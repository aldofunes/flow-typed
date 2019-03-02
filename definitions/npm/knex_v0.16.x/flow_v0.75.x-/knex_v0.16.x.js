declare module 'knex' {
  declare class Transaction<R>
    mixins QueryBuilder<R>, events$EventEmitter, Promise<R> {
    [[call]]: (tableName: string) => QueryBuilder<R>;
    commit(connection?: any, value?: any): Promise<R>;
    rollback(?Error): Promise<R>;
    savepoint(connection?: any): Promise<R>;
  }

  declare type QueryBuilderFn<R> = (
    qb: QueryBuilder<R>
  ) => QueryBuilder<R> | void;

  declare class QueryBuilder<R> mixins Promise<R> {
    clearSelect(): this;
    clearWhere(): this;
    select(key?: string[]): this;
    select(...key: string[]): this;
    timeout(ms: number, options?: { cancel: boolean }): this;
    column(key: string[]): this;
    column(...key: string[]): this;
    with(alias: string, w: string | QueryBuilderFn<R>): this;
    withSchema(schema: string): this;
    returning(column: string): this;
    returning(...columns: string[]): this;
    returning(columns: string[]): this;
    as(name: string): this;
    transacting(trx: ?Transaction<R>): this;
    transaction((trx: Transaction<R>) => Promise<R> | void): this;
    where(builder: QueryBuilderFn<R>): this;
    where(column: string, value: any): this;
    where(column: string, operator: string, value: any): this;
    where(object: { [string]: any }): this;
    whereNot(builder: QueryBuilderFn<R>): this;
    whereNot(column: string, value: any): this;
    whereNot(column: string, operator: string, value: any): this;
    whereIn(column: string, values: any[]): this;
    whereNotIn(column: string, values: any[]): this;
    whereNull(column: string): this;
    whereNotNull(column: string): this;
    whereExists(column: string): this;
    whereNotExists(column: string): this;
    whereBetween(column: string, range: number[]): this;
    whereNotBetween(column: string, range: number[]): this;
    whereRaw(sql: string, bindings?: RawBindings): this;
    orWhere(builder: QueryBuilderFn<R>): this;
    orWhere(column: string, value: any): this;
    orWhere(column: string, operator: string, value: any): this;
    orWhereNot(builder: QueryBuilderFn<R>): this;
    orWhereNot(column: string, value: any): this;
    orWhereNot(column: string, operator: string, value: any): this;
    orWhereIn(column: string, values: any[]): this;
    orWhereNotIn(column: string, values: any[]): this;
    orWhereNull(column: string): this;
    orWhereNotNull(column: string): this;
    orWhereExists(column: string): this;
    orWhereNotExists(column: string): this;
    orWhereBetween(column: string, range: number[]): this;
    orWhereNotBetween(column: string, range: number[]): this;
    orWhereRaw(sql: string, bindings?: RawBindings): this;
    innerJoin(table: string, c1: string, operator: string, c2: string): this;
    innerJoin(table: string, c1: string, c2: string): this;
    innerJoin(
      builder: QueryBuilder<R> | QueryBuilderFn<R>,
      c1?: string,
      c2?: string
    ): this;
    innerJoin(table: string, builder: QueryBuilderFn<R>): this;
    leftJoin(table: string, c1: string, operator: string, c2: string): this;
    leftJoin(table: string, c1: string, c2: string): this;
    leftJoin(builder: QueryBuilder<R>): this;
    leftJoin(table: string, builder: QueryBuilderFn<R>): this;
    leftOuterJoin(
      table: string,
      c1: string,
      operator: string,
      c2: string
    ): this;
    leftOuterJoin(table: string, c1: string, c2: string): this;
    leftOuterJoin(table: string, builder: QueryBuilderFn<R>): this;
    rightJoin(table: string, c1: string, operator: string, c2: string): this;
    rightJoin(table: string, c1: string, c2: string): this;
    rightJoin(table: string, builder: QueryBuilderFn<R>): this;
    rightOuterJoin(
      table: string,
      c1: string,
      operator: string,
      c2: string
    ): this;
    rightOuterJoin(table: string, c1: string, c2: string): this;
    rightOuterJoin(table: string, builder: QueryBuilderFn<R>): this;
    outerJoin(table: string, c1: string, operator: string, c2: string): this;
    outerJoin(table: string, c1: string, c2: string): this;
    outerJoin(table: string, builder: QueryBuilderFn<R>): this;
    fullOuterJoin(
      table: string,
      c1: string,
      operator: string,
      c2: string
    ): this;
    fullOuterJoin(table: string, c1: string, c2: string): this;
    fullOuterJoin(table: string, builder: QueryBuilderFn<R>): this;
    crossJoin(column: string, c1: string, c2: string): this;
    crossJoin(column: string, c1: string, operator: string, c2: string): this;
    crossJoin(table: string, builder: QueryBuilderFn<R>): this;
    joinRaw(sql: string, bindings?: RawBindings): this;
    distinct(): this;
    groupBy(column: string): this;
    groupByRaw(sql: string, bindings?: RawBindings): this;
    orderBy(
      column: string | Array<string | { column: string, order?: string }>,
      direction?: 'desc' | 'asc'
    ): this;
    orderByRaw(sql: string, bindings?: RawBindings): this;
    offset(offset: number): this;
    limit(limit: number): this;
    having(column: string, operator: string, value: mixed): this;
    havingIn(column: string, values: Array<mixed>): this;
    havingNotIn(column: string, values: Array<mixed>): this;
    havingNull(column: string): this;
    havingNotNull(column: string): this;
    havingExists(builder: QueryBuilderFn<R> | QueryBuilder<R>): this;
    havingNotExists(builder: QueryBuilderFn<R> | QueryBuilder<R>): this;
    havingBetween<T>(column: string, range: [T, T]): this;
    havingNotBetween<T>(column: string, range: [T, T]): this;
    havingRaw(column: string, operator: string, value: mixed): this;
    havingRaw(column: string, value: mixed): this;
    havingRaw(raw: string, bindings?: RawBindings): this;
    union(): this;
    unionAll(): this;
    count(column?: string): this;
    countDistinct(column?: string): this;
    min(column?: string): this;
    max(column?: string): this;
    sum(column?: string): this;
    sumDistinct(column?: string): this;
    avg(column?: string): this;
    avgDistinct(column?: string): this;
    pluck(column: string): this;
    first(key?: string[]): this;
    first(...key: string[]): this;
    clone(): this;
    modify(
      fn: (queryBuilder: QueryBuilder<R>, ...args: [any]) => this,
      ...args: [any]
    ): this;
    connection(dbConnection: any): this;

    table(table: string, options?: Object): this;
    from(table: string): this;
    from(builder: QueryBuilderFn<R> | Knex<R> | QueryBuilder<R>): this;
    into(table: string, options?: Object): this;

    insert(val: Object | Object[]): this;
    del(): this;
    delete(): this;
    update(column: string, value: any): this;
    update(val: Object): this;
    returning(columns: string[]): this;
    forUpdate(): this;
    forShare(): this;
  }

  declare type MigrateConfig = {|
    directory?: string,
    extension?: string,
    tableName?: string,
    disableTransactions?: boolean,
    loadExtensions?: Array<string>,
  |};

  declare class Knex<R>
    mixins QueryBuilder<R>, Promise<R>, events$EventEmitter {
    static (config: Config): Knex<R>;
    static QueryBuilder: typeof QueryBuilder;
    [[call]]: (tableName: string) => QueryBuilder<R>;
    raw(sqlString: string, bindings?: RawBindings): any;
    batchInsert: (
      tableName: string,
      rows: Array<Object>,
      chunkSize?: number
    ) => QueryBuilder<R>;
    migrate: {
      make: (name: string, config?: MigrateConfig) => Promise<string>,
      latest: (config?: MigrateConfig) => Promise<void>,
      rollback: (config?: MigrateConfig) => Promise<void>,
      currentVersion: (config?: MigrateConfig) => Promise<string>,
    };
    client: any;
    destroy(): Promise<void>;
  }

  declare type PostgresConfig = {
    connection?:
      | string
      | {
          host?: string,
          user?: string,
          password?: string,
          database?: string,
          charset?: string,
        },
    searchPath?: string,
  };

  declare type MssqlConfig = {
    connection?:
      | string
      | {
          database?: string,
          domain?: string,
          options: {
            encrypt?: boolean,
          },
          password?: string,
          server?: string,
          user?: string,
        },
  };

  declare type RawBindings = Array<mixed> | { [key: string]: mixed };

  declare type Mysql2Config = {
    connection?:
      | string
      | {
          host?: string,
          user?: string,
          password?: string,
          database?: string,
          charset?: string,
        },
  };

  declare type MysqlConfig = {
    connection?: {
      host?: string,
      user?: string,
      password?: string,
      database?: string,
    },
  };

  declare type SqliteConfig = {
    connection?: {
      filename?: string,
    },
  };
  declare type Config = (
    | PostgresConfig
    | MysqlConfig
    | Mysql2Config
    | SqliteConfig
    | MssqlConfig
  ) & {
    client?: 'pg' | 'mysql' | 'mysql2' | 'mssql' | 'sqlite3',
  };

  declare type Error = {
    name: string,
    length: number,
    severity: string,
    code: string,
    detail: string,
    hint?: string,
    position?: any,
    internalPosition?: any,
    internalQuery?: any,
    where?: any,
    schema: string,
    table: string,
    column?: any,
    dataType?: any,
    constraint?: string,
    file: string,
    line: string,
    routine: string,
  };

  declare module.exports: typeof Knex;
}
