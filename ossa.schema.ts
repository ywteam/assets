type TParamType = 'string' | 'number' | 'boolean' | 'path' | 'url' | 'email' | 'date' | 'datetime' | 'time' | 'file' | 'image' | 'array' | 'object' | 'enum' | 'any'
interface IParamValue {
    argv?: `--${string}=${string}`
    env?: string
    config?: `config.${string}`
    query?: string
    body?: string
    header?: string
    cookie?: string
    path?: string
    form?: string
    formData?: string
    prompt?: string
}
interface IParam {
    type: TParamType
    description?: string
    required?: boolean
    default?: any
    enum?: any[]
    value?: IParamValue
}
type TScannerVendorLicense = 'MIT' | 'GPL' | 'Apache' | 'BSD' | 'Proprietary'
interface IScannerVendor {
    description?: string
    url?: string
    logo?: string
    color?: string
    license?: TScannerVendorLicense
    oss?: boolean
}
type TScannerHooks = 'pre-commit' | 'pre-push' | 'commit-msg' | 'post-commit' | 'post-push' | 'post-checkout' | 'post-merge' | 'post-rewrite' | 'post-applypatch' | 'post-update'
type TScannerFormats = 'json' | 'text' | 'sql' | 'xml' | 'yml' | 'csv' | 'sarif' |
    'html' | 'markdown' | 'cyclonedx' | 'spdx' | 'swid'
type TScannerPackages = 'apt' | 'brew' | 'docker' | 'npm' | 'shell' | 'bat' | 'choco' | 'scoop' | 'yum' | 'zypper' | 'pkg' | 'port' | 'snap' | 'gem' | 'pip' | 'composer' | 'cargo' | 'go' | 'maven' | 'gradle' | 'ant' | 'nuget'
type TScannerTargets = 'file' | 'dir' | 'repo' | 'branch' | 'tag' | 'commit' | 'pr' | 'issue' | 'user' | 'org' | 'team' | 'project' | 'group' | 'pipeline' | 'job' | 'run' | 'workflow' | 'stage' | 'task' | 'service' | 'container' | 'pod' | 'node' | 'cluster' | 'namespace' | 'config' | 'secret' | 'ingress' | 'serviceaccount' | 'role' | 'rolebinding' | 'clusterrole' | 'clusterrolebinding' | 'policy' | 'rule' | 'template' | 'stack' | 'app' | 'function' | 'api' | 'endpoint' | 'gateway' | 'proxy' | 'plugin' | 'middleware' | 'hook' | 'event' | 'trigger' | 'action' | 'job' | 'task' | 'step' | 'script' | 'command' | 'query' | 'mutation' | 'subscription' | 'schema' | 'type' | 'interface' | 'enum' | 'input' | 'union' | 'scalar' | 'directive' | 'field' | 'argument' | 'variable' | 'constant' | 'function' | 'method' | 'class' | 'object' | 'module' | 'package' | 'library' | 'framework' | 'platform' | 'runtime' | 'environment' | 'config' | 'setting' | 'option' | 'parameter' | 'flag' | 'variable' | 'constant' | 'property' | 'attribute' | 'element' | 'node' | 'tag' | 'attribute' | 'style' | 'theme' | 'layout' | 'template' | 'component' | 'widget' | 'block' | 'section' | 'page' | 'view' | 'screen' | 'window' | 'dialog' | 'modal' | 'popup' | 'toast' | 'alert' | 'notification' | 'message' | 'log' | 'report' | 'dashboard' | 'chart' | 'graph' | 'table' | 'list' | 'menu' | 'button' | 'link' | 'icon' | 'image' 
interface IScannerCapabilities {
    hooks: TScannerHooks[]
    formats: TScannerFormats[]
    targets: TScannerTargets[]
    features: string[]        
}
interface IScannerCli {
    /**
     * Command to execute
     */
    cmd: string
    /**
     * Default arguments
     */
    args: string[]
    /**
     * Argument to show version
     */
    version: string
    /**
     * Argument to show help
     */
    help: string
}
type TScannerParam = string | IParam
type TScannerApiPath = `/${string}`
interface IScannerApi { 
    params?: { [key: string]: TScannerParam },
    args: string[]
    help?: string
}
interface IScanner {
    id: string
    vendor: IScannerVendor,
    capabilities: IScannerCapabilities
    packages: { [key in TScannerPackages]: string[] }
    cli: IScannerCli
    params?: { [key: string]: TScannerParam }
    api?: { [key: TScannerApiPath]: IScannerApi }      
}
interface ISchema {
    params: { [key: string]: IParam }
    scanners: IScanner[]
}