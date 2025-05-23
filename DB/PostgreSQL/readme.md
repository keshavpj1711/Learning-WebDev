# Data Types

| Name                              | Aliases                   | Description                                                                 |
|-----------------------------------|---------------------------|-----------------------------------------------------------------------------|
| `bigint`                          | `int8`                    | Signed eight-byte integer                                                  |
| `bigserial`                       | `serial8`                 | Autoincrementing eight-byte integer                                        |
| `bit [ (n) ]`                     |                           | Fixed-length bit string                                                    |
| `bit varying [ (n) ]`             | `varbit [ (n) ]`          | Variable-length bit string                                                 |
| `boolean`                         | `bool`                    | Logical Boolean (true/false)                                               |
| `box`                             |                           | Rectangular box on a plane                                                 |
| `bytea`                           |                           | Binary data ("byte array")                                                 |
| `character [ (n) ]`               | `char [ (n) ]`            | Fixed-length character string                                              |
| `character varying [ (n) ]`       | `varchar [ (n) ]`         | Variable-length character string                                           |
| `cidr`                            |                           | IPv4 or IPv6 network address                                               |
| `circle`                          |                           | Circle on a plane                                                          |
| `date`                            |                           | Calendar date (year, month, day)                                           |
| `double precision`                | `float8`                  | Double precision floating-point number (8 bytes)                           |
| `inet`                            |                           | IPv4 or IPv6 host address                                                  |
| `integer`                         | `int`, `int4`             | Signed four-byte integer                                                   |
| `interval [ fields ] [ (p) ]`     |                           | Time span                                                                  |
| `json`                            |                           | Textual JSON data                                                          |
| `jsonb`                           |                           | Binary JSON data, decomposed                                               |
| `line`                            |                           | Infinite line on a plane                                                   |
| `lseg`                            |                           | Line segment on a plane                                                    |
| `macaddr`                         |                           | MAC (Media Access Control) address                                         |
| `macaddr8`                        |                           | MAC (Media Access Control) address (EUI-64 format)                         |
| `money`                           |                           | Currency amount                                                            |
| `numeric [ (p, s) ]`              | `decimal [ (p, s) ]`      | Exact numeric of selectable precision                                      |
| `path`                            |                           | Geometric path on a plane                                                  |
| `pg_lsn`                          |                           | PostgreSQL Log Sequence Number                                             |
| `pg_snapshot`                     |                           | User-level transaction ID snapshot                                         |
| `point`                           |                           | Geometric point on a plane                                                 |
| `polygon`                         |                           | Closed geometric path on a plane                                           |
| `real`                            | `float4`                  | Single precision floating-point number (4 bytes)                           |
| `smallint`                        | `int2`                    | Signed two-byte integer                                                    |
| `smallserial`                     | `serial2`                 | Autoincrementing two-byte integer                                          |
| `serial`                          | `serial4`                 | Autoincrementing four-byte integer                                         |
| `text`                            |                           | Variable-length character string                                           |
| `time [ (p) ] [ without time zone ]` |                        | Time of day (no time zone)                                                 |
| `time [ (p) ] with time zone`     | `timetz`                  | Time of day, including time zone                                           |
| `timestamp [ (p) ] [ without time zone ]` |                    | Date and time (no time zone)                                               |
| `timestamp [ (p) ] with time zone` | `timestamptz`            | Date and time, including time zone                                         |
| `tsquery`                         |                           | Text search query                                                          |
| `tsvector`                        |                           | Text search document                                                       |
| `txid_snapshot`                   |                           | User-level transaction ID snapshot (deprecated; see `pg_snapshot`)        |
| `uuid`                            |                           | Universally unique identifier                                              |
| `xml`                             |                           | XML data                                                                   |
