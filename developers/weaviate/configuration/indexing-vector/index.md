---
title: Vector index overview
sidebar_position: 10
image: og/docs/indexes.jpg
# tags: ['configuration']
---

import VectorIntro from '/_includes/indexes/vector-intro.mdx';

<VectorIntro/>

HNSW indexes are the default index type. If your collection has more than 10,000 objects, you should use an HNSW index. A flat index works best for smaller collections. Collections that start small and grow beyond 10,000 objects should consider a dynamic index.

When you configure your indexes, consider using [compression](#compression) to manage resource usage. Some compression methods have to be enabled when you create your collection.

## HNSW indexes

import HNSWIntro from '/_includes/indexes/hnsw-intro.mdx';

<HNSWIntro/>

[Configure an HNSW index](/developers/weaviate/configuration/indexing-vector/hnsw-indexes.md).

See also:

 - [HNSW index parameters](/developers/weaviate/config-refs/schema/vector-index#hnsw-index-parameters)

## Flat indexes

import FlatIntro from '/_includes/indexes/flat-intro.mdx';

<FlatIntro/>

[Configure a flat index](/developers/weaviate/configuration/indexing-vector/flat-indexes.md).

See also:

- [Flat index parameters](/developers/weaviate/config-refs/schema/vector-index#flat-indexes)

## Dynamic indexes

import DynamicIntro from '/_includes/indexes/dynamic-intro.mdx';

<DynamicIntro/>

Dynamic indexes require [asynchronous indexing](/developers/weaviate/config-refs/schema/vector-index#asynchronous-indexing). Enable asynchronous indexing before you configure a collection to use dynamic indexing.

[Configure a dynamic index](/developers/weaviate/configuration/indexing-vector/dynamic-indexes.md).

See also:

- [Dynamic index parameters](/developers/weaviate/config-refs/schema/vector-index#dynamic-index-parameters)

## Compression

import IndexCompression from '/_includes/indexes/index-compression.mdx';

<IndexCompression/>

## Asynchronous indexing

import AsyncIndexing from '/_includes/indexes/async-indexing.mdx';

<AsyncIndexing/>

## Related pages

- [Indexes overview](/developers/weaviate/starter-guides/managing-resources/indexing)
- [Configure inverted indexes](/developers/weaviate/configuration/inverted-indexes)


## Questions and feedback

import DocsFeedback from '/_includes/docs-feedback.mdx';

<DocsFeedback/>