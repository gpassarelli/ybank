<?php

namespace Ybank\Providers;

use Illuminate\Support\AggregateServiceProvider;

class YbankServiceProvider extends AggregateServiceProvider
{
    /**
     * The provider class names.
     *
     * @var array
     */
    protected $providers = [
        YbankRepositoryServiceProvider::class,
        YbankEventServiceProvider::class,
    ];
}
