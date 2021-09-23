import { PluginClient } from "@remixproject/plugin";
import { createClient } from "@remixproject/plugin-webview";
import { CompilerApiMixin } from './compiler-api'
import { ICompilerApi } from '@remix-project/remix-lib-ts'
import { CompileTabLogic } from '@remix-ui/solidity-compiler'

const profile = {
  name: 'solidity',
  displayName: 'Solidity compiler',
  icon: 'assets/img/solidity.webp',
  description: 'Compile solidity contracts',
  kind: 'compiler',
  permission: true,
  location: 'sidePanel',
  documentation: 'https://github.com/CortexFoundation/tech-doc',
  version: '0.0.1',
  methods: ['getCompilationResult', 'compile', 'compileWithParameters', 'setCompilerConfig', 'compileFile' ,'getCompilerState']
}

const defaultAppParameters = {
  hideWarnings: false,
  autoCompile: false,
  includeNightlies: false
}

const defaultCompilerParameters = {
  runs: '200',
  optimize: false,
  version: 'soljson-v0.8.7+commit.e28d00a7',
  cvmVersion: null, // compiler default
  language: 'Solidity'
}

export class CompilerClientApi extends CompilerApiMixin(PluginClient) implements ICompilerApi  {
  constructor () {
    super()
    createClient(this as any)
    this.compileTabLogic = new CompileTabLogic(this, this.contentImport)
    this.compiler = this.compileTabLogic.compiler
    this.compileTabLogic.init()
    this.initCompilerApi()
  }

  getCompilerParameters () {
    const params = {
      runs: localStorage.getItem('runs') || defaultCompilerParameters['runs'],
      optimize: localStorage.getItem('optimize') === 'true' ? true : false,
      version: localStorage.getItem('version') || defaultCompilerParameters['version'],
      cvmVersion: localStorage.getItem('cvmVersion') || defaultCompilerParameters['cvmVersion'], // default
      language: localStorage.getItem('language') || defaultCompilerParameters['language']
    }
    return params
  }

  setCompilerParameters (params) {
    for (const key of Object.keys(params)) {
      localStorage.setItem(key, params[key])
    }
  }

  getAppParameter (name) {
    const param = localStorage.getItem(name) || defaultAppParameters[name]
    if (param === 'true') return true
    if (param === 'false') return false
    return param
  }

  setAppParameter (name, value) {
    localStorage.setItem(name, value)
  }

  getFileManagerMode () {
    return 'browser'
  }
}
