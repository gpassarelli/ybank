<?php


namespace Ybank;

use Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Support\MessageBag;
use Illuminate\Validation\Factory;
use Validator;


class EloquentBaseModel extends Eloquent implements BaseModelInterface
{
    /**
     * Validation rules
     *
     * @var array
     */
    protected static $rules = array();
    /**
     * Custom messages
     *
     * @var array
     */
    protected static $messages = array();
    /**
     * As a protection we hide the internal id of any model by default
     */
    protected $hidden = ['id'];
    /**
     * Error message bag
     *
     * @var MessageBag
     */
    protected $errors;

    /**
     * Validator instance
     *
     * @var Factory
     */
    protected $validator;

    public function __construct(array $attributes = array(), Factory $validator = null)
    {
        parent::__construct($attributes);

        $this->validator = $validator ?: Validator::getFacadeRoot();
    }

    /**
     * Listen for save event
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            return $model->validate();
        });
    }

    /**
     * Validates current attributes against rules
     */
    public function validate()
    {
        $v = $this->validator->make($this->attributes, static::$rules, static::$messages);

        if ($v->passes()) {
            return true;
        }

        $this->setErrors($v->messages());

        return false;
    }

    /**
     * Retrieve error message bag
     */
    public function getErrors()
    {
        return $this->errors;
    }

    /**
     * Set error message bag
     *
     * @var MessageBag
     */
    protected function setErrors($errors)
    {
        $this->errors = $errors;
    }

    /**
     * Inverse of wasSaved
     */
    public function hasErrors()
    {
        return !empty($this->errors);
    }

    /**
     * Retrieve the validation rules of this model to be used in requests
     */
    public function getRules()
    {
        return $this::$rules;
    }

}
