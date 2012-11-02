
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","AppendIterator"],["c","ArrayAccess"],["c","ArrayIterator"],["c","BadFunctionCallException"],["c","BadMethodCallException"],["c","Closure"],["c","Countable"],["c","DateTime"],["c","DateTimeZone"],["c","Exception"],["c","FilterIterator"],["c","Guzzle\\Batch\\AbstractBatchDecorator"],["c","Guzzle\\Batch\\Batch"],["c","Guzzle\\Batch\\BatchBuilder"],["c","Guzzle\\Batch\\BatchClosureDivisor"],["c","Guzzle\\Batch\\BatchClosureTransfer"],["c","Guzzle\\Batch\\BatchCommandTransfer"],["c","Guzzle\\Batch\\BatchDivisorInterface"],["c","Guzzle\\Batch\\BatchInterface"],["c","Guzzle\\Batch\\BatchRequestTransfer"],["c","Guzzle\\Batch\\BatchSizeDivisor"],["c","Guzzle\\Batch\\BatchTransferInterface"],["c","Guzzle\\Batch\\Exception\\BatchTransferException"],["c","Guzzle\\Batch\\ExceptionBufferingBatch"],["c","Guzzle\\Batch\\FlushingBatch"],["c","Guzzle\\Batch\\HistoryBatch"],["c","Guzzle\\Batch\\NotifyingBatch"],["c","Guzzle\\Cache\\AbstractCacheAdapter"],["c","Guzzle\\Cache\\CacheAdapterFactory"],["c","Guzzle\\Cache\\CacheAdapterInterface"],["c","Guzzle\\Cache\\ClosureCacheAdapter"],["c","Guzzle\\Cache\\DoctrineCacheAdapter"],["c","Guzzle\\Cache\\NullCacheAdapter"],["c","Guzzle\\Cache\\Zf1CacheAdapter"],["c","Guzzle\\Cache\\Zf2CacheAdapter"],["c","Guzzle\\Common\\AbstractHasDispatcher"],["c","Guzzle\\Common\\Collection"],["c","Guzzle\\Common\\Event"],["c","Guzzle\\Common\\Exception\\BadMethodCallException"],["c","Guzzle\\Common\\Exception\\ExceptionCollection"],["c","Guzzle\\Common\\Exception\\GuzzleException"],["c","Guzzle\\Common\\Exception\\InvalidArgumentException"],["c","Guzzle\\Common\\Exception\\RuntimeException"],["c","Guzzle\\Common\\Exception\\UnexpectedValueException"],["c","Guzzle\\Common\\FromConfigInterface"],["c","Guzzle\\Common\\HasDispatcherInterface"],["c","Guzzle\\Common\\ToArrayInterface"],["c","Guzzle\\Common\\Version"],["c","Guzzle\\Http\\AbstractEntityBodyDecorator"],["c","Guzzle\\Http\\Client"],["c","Guzzle\\Http\\ClientInterface"],["c","Guzzle\\Http\\Curl\\CurlHandle"],["c","Guzzle\\Http\\Curl\\CurlMulti"],["c","Guzzle\\Http\\Curl\\CurlMultiInterface"],["c","Guzzle\\Http\\Curl\\CurlVersion"],["c","Guzzle\\Http\\Curl\\RequestMediator"],["c","Guzzle\\Http\\EntityBody"],["c","Guzzle\\Http\\EntityBodyInterface"],["c","Guzzle\\Http\\Exception\\BadResponseException"],["c","Guzzle\\Http\\Exception\\ClientErrorResponseException"],["c","Guzzle\\Http\\Exception\\CouldNotRewindStreamException"],["c","Guzzle\\Http\\Exception\\CurlException"],["c","Guzzle\\Http\\Exception\\HttpException"],["c","Guzzle\\Http\\Exception\\RequestException"],["c","Guzzle\\Http\\Exception\\ServerErrorResponseException"],["c","Guzzle\\Http\\Exception\\TooManyRedirectsException"],["c","Guzzle\\Http\\Message\\AbstractMessage"],["c","Guzzle\\Http\\Message\\EntityEnclosingRequest"],["c","Guzzle\\Http\\Message\\EntityEnclosingRequestInterface"],["c","Guzzle\\Http\\Message\\Header"],["c","Guzzle\\Http\\Message\\HeaderComparison"],["c","Guzzle\\Http\\Message\\MessageInterface"],["c","Guzzle\\Http\\Message\\PostFile"],["c","Guzzle\\Http\\Message\\PostFileInterface"],["c","Guzzle\\Http\\Message\\Request"],["c","Guzzle\\Http\\Message\\RequestFactory"],["c","Guzzle\\Http\\Message\\RequestFactoryInterface"],["c","Guzzle\\Http\\Message\\RequestInterface"],["c","Guzzle\\Http\\Message\\Response"],["c","Guzzle\\Http\\QueryString"],["c","Guzzle\\Http\\ReadLimitEntityBody"],["c","Guzzle\\Http\\RedirectPlugin"],["c","Guzzle\\Http\\Url"],["c","Guzzle\\Http\\Utils"],["c","Guzzle\\Inflection\\Inflector"],["c","Guzzle\\Inflection\\InflectorInterface"],["c","Guzzle\\Inflection\\MemoizingInflector"],["c","Guzzle\\Inflection\\PreComputedInflector"],["c","Guzzle\\Iterator\\AppendIterator"],["c","Guzzle\\Iterator\\ChunkedIterator"],["c","Guzzle\\Iterator\\FilterIterator"],["c","Guzzle\\Iterator\\MapIterator"],["c","Guzzle\\Iterator\\MethodProxyIterator"],["c","Guzzle\\Log\\AbstractLogAdapter"],["c","Guzzle\\Log\\ArrayLogAdapter"],["c","Guzzle\\Log\\ClosureLogAdapter"],["c","Guzzle\\Log\\LogAdapterInterface"],["c","Guzzle\\Log\\MessageFormatter"],["c","Guzzle\\Log\\MonologLogAdapter"],["c","Guzzle\\Log\\Zf1LogAdapter"],["c","Guzzle\\Log\\Zf2LogAdapter"],["c","Guzzle\\Parser\\Cookie\\CookieParser"],["c","Guzzle\\Parser\\Cookie\\CookieParserInterface"],["c","Guzzle\\Parser\\Message\\AbstractMessageParser"],["c","Guzzle\\Parser\\Message\\MessageParser"],["c","Guzzle\\Parser\\Message\\MessageParserInterface"],["c","Guzzle\\Parser\\Message\\PeclHttpMessageParser"],["c","Guzzle\\Parser\\ParserRegistry"],["c","Guzzle\\Parser\\UriTemplate\\PeclUriTemplate"],["c","Guzzle\\Parser\\UriTemplate\\UriTemplate"],["c","Guzzle\\Parser\\UriTemplate\\UriTemplateInterface"],["c","Guzzle\\Parser\\Url\\UrlParser"],["c","Guzzle\\Parser\\Url\\UrlParserInterface"],["c","Guzzle\\Plugin\\Async\\AsyncPlugin"],["c","Guzzle\\Plugin\\Backoff\\AbstractBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\AbstractErrorCodeBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\BackoffLogger"],["c","Guzzle\\Plugin\\Backoff\\BackoffPlugin"],["c","Guzzle\\Plugin\\Backoff\\BackoffStrategyInterface"],["c","Guzzle\\Plugin\\Backoff\\CallbackBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\ConstantBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\CurlBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\ExponentialBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\HttpBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\LinearBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\ReasonPhraseBackoffStrategy"],["c","Guzzle\\Plugin\\Backoff\\TruncatedBackoffStrategy"],["c","Guzzle\\Plugin\\Cache\\AbstractCallbackStrategy"],["c","Guzzle\\Plugin\\Cache\\CacheKeyProviderInterface"],["c","Guzzle\\Plugin\\Cache\\CachePlugin"],["c","Guzzle\\Plugin\\Cache\\CacheStorageInterface"],["c","Guzzle\\Plugin\\Cache\\CallbackCacheKeyProvider"],["c","Guzzle\\Plugin\\Cache\\CallbackCanCacheStrategy"],["c","Guzzle\\Plugin\\Cache\\CanCacheStrategyInterface"],["c","Guzzle\\Plugin\\Cache\\DefaultCacheKeyProvider"],["c","Guzzle\\Plugin\\Cache\\DefaultCacheStorage"],["c","Guzzle\\Plugin\\Cache\\DefaultCanCacheStrategy"],["c","Guzzle\\Plugin\\Cache\\DefaultRevalidation"],["c","Guzzle\\Plugin\\Cache\\DenyRevalidation"],["c","Guzzle\\Plugin\\Cache\\RevalidationInterface"],["c","Guzzle\\Plugin\\Cache\\SkipRevalidation"],["c","Guzzle\\Plugin\\Cookie\\Cookie"],["c","Guzzle\\Plugin\\Cookie\\CookieJar\\ArrayCookieJar"],["c","Guzzle\\Plugin\\Cookie\\CookieJar\\CookieJarInterface"],["c","Guzzle\\Plugin\\Cookie\\CookieJar\\FileCookieJar"],["c","Guzzle\\Plugin\\Cookie\\CookiePlugin"],["c","Guzzle\\Plugin\\CurlAuth\\CurlAuthPlugin"],["c","Guzzle\\Plugin\\History\\HistoryPlugin"],["c","Guzzle\\Plugin\\Log\\LogPlugin"],["c","Guzzle\\Plugin\\Md5\\CommandContentMd5Plugin"],["c","Guzzle\\Plugin\\Md5\\Md5ValidatorPlugin"],["c","Guzzle\\Plugin\\Mock\\MockPlugin"],["c","Guzzle\\Plugin\\Oauth\\OauthPlugin"],["c","Guzzle\\Service\\AbstractConfigLoader"],["c","Guzzle\\Service\\Builder\\ServiceBuilder"],["c","Guzzle\\Service\\Builder\\ServiceBuilderInterface"],["c","Guzzle\\Service\\Builder\\ServiceBuilderLoader"],["c","Guzzle\\Service\\CachingConfigLoader"],["c","Guzzle\\Service\\Client"],["c","Guzzle\\Service\\ClientInterface"],["c","Guzzle\\Service\\Command\\AbstractCommand"],["c","Guzzle\\Service\\Command\\ClosureCommand"],["c","Guzzle\\Service\\Command\\CommandInterface"],["c","Guzzle\\Service\\Command\\DefaultRequestSerializer"],["c","Guzzle\\Service\\Command\\DefaultResponseParser"],["c","Guzzle\\Service\\Command\\Factory\\AliasFactory"],["c","Guzzle\\Service\\Command\\Factory\\CompositeFactory"],["c","Guzzle\\Service\\Command\\Factory\\ConcreteClassFactory"],["c","Guzzle\\Service\\Command\\Factory\\FactoryInterface"],["c","Guzzle\\Service\\Command\\Factory\\MapFactory"],["c","Guzzle\\Service\\Command\\Factory\\ServiceDescriptionFactory"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\AbstractRequestVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\BodyVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\HeaderVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\JsonVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\PostFieldVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\PostFileVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\QueryVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\RequestVisitorInterface"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Request\\XmlVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\AbstractResponseVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\BodyVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\HeaderVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\JsonVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\ReasonPhraseVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\ResponseVisitorInterface"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\StatusCodeVisitor"],["c","Guzzle\\Service\\Command\\LocationVisitor\\Response\\XmlVisitor"],["c","Guzzle\\Service\\Command\\NoTranslationOperationResponseParser"],["c","Guzzle\\Service\\Command\\OperationCommand"],["c","Guzzle\\Service\\Command\\OperationResponseParser"],["c","Guzzle\\Service\\Command\\RequestSerializerInterface"],["c","Guzzle\\Service\\Command\\ResponseParserInterface"],["c","Guzzle\\Service\\ConfigLoaderInterface"],["c","Guzzle\\Service\\Description\\Operation"],["c","Guzzle\\Service\\Description\\OperationInterface"],["c","Guzzle\\Service\\Description\\Parameter"],["c","Guzzle\\Service\\Description\\SchemaFormatter"],["c","Guzzle\\Service\\Description\\SchemaValidator"],["c","Guzzle\\Service\\Description\\ServiceDescription"],["c","Guzzle\\Service\\Description\\ServiceDescriptionInterface"],["c","Guzzle\\Service\\Description\\ServiceDescriptionLoader"],["c","Guzzle\\Service\\Description\\ValidatorInterface"],["c","Guzzle\\Service\\Exception\\CommandException"],["c","Guzzle\\Service\\Exception\\DescriptionBuilderException"],["c","Guzzle\\Service\\Exception\\InconsistentClientTransferException"],["c","Guzzle\\Service\\Exception\\JsonException"],["c","Guzzle\\Service\\Exception\\ServiceBuilderException"],["c","Guzzle\\Service\\Exception\\ServiceNotFoundException"],["c","Guzzle\\Service\\Exception\\ValidationException"],["c","Guzzle\\Service\\Resource\\AbstractResourceIteratorFactory"],["c","Guzzle\\Service\\Resource\\MapResourceIteratorFactory"],["c","Guzzle\\Service\\Resource\\Model"],["c","Guzzle\\Service\\Resource\\ResourceIterator"],["c","Guzzle\\Service\\Resource\\ResourceIteratorApplyBatched"],["c","Guzzle\\Service\\Resource\\ResourceIteratorClassFactory"],["c","Guzzle\\Service\\Resource\\ResourceIteratorFactoryInterface"],["c","Guzzle\\Service\\Resource\\ResourceIteratorInterface"],["c","Guzzle\\Stream\\Stream"],["c","Guzzle\\Stream\\StreamInterface"],["c","InvalidArgumentException"],["c","Iterator"],["c","IteratorAggregate"],["c","IteratorIterator"],["c","LogicException"],["c","OuterIterator"],["c","RuntimeException"],["c","SeekableIterator"],["c","Serializable"],["c","SimpleXMLElement"],["c","SplDoublyLinkedList"],["c","SplObjectStorage"],["c","SplQueue"],["c","Traversable"],["c","UnexpectedValueException"]];
